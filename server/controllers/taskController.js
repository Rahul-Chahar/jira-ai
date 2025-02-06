const Task = require('../models/Task');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const JIRA_API_URL = process.env.JIRA_API_URL;
const JIRA_AUTH = {
    auth: {
        username: process.env.JIRA_USERNAME,
        password: process.env.JIRA_API_TOKEN,
    },
    headers: { 'Content-Type': 'application/json' },
};

const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ error: 'Title is required' });
        }
        if (!process.env.HUGGINGFACE_API_KEY) {
            return res.status(500).json({ error: 'Hugging Face API key is missing in environment variables' });
        }

        const aiResponse = await axios.post(
            "https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct",
            { inputs: `Generate a detailed task description for: ${title}` },
            {
                headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` },
            }
        );
        

        const taskDescription = aiResponse.data[0]?.generated_text || 'Default description';
        
        const task = new Task({ title, description: taskDescription });
        await task.save();

        if (!process.env.JIRA_API_URL || !process.env.JIRA_USERNAME || !process.env.JIRA_API_TOKEN || !process.env.JIRA_PROJECT_KEY) {
            return res.status(500).json({ error: 'Jira credentials are missing in environment variables' });
        }

        // Create Jira Issue
        const jiraIssue = await axios.post(`${JIRA_API_URL}/rest/api/3/issue`, {
            fields: {
                project: { key: process.env.JIRA_PROJECT_KEY },
                summary: title,
                description: {
                    type: "doc",
                    version: 1,
                    content: [
                        {
                            type: "paragraph",
                            content: [
                                {
                                    type: "text",
                                    text: taskDescription
                                }
                            ]
                        }
                    ]
                },
                issuetype: { name: "Task" },
            }
        }, JIRA_AUTH);
        

        task.jiraIssueId = jiraIssue.data.id;
        await task.save();

        res.status(201).json(task);
    } catch (error) {
        console.error('Error creating task:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: error.response ? error.response.data : error.message });
    }
};

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createTask, getTasks };