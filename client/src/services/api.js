import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // Change this if deployed

// Fetch all tasks
export const getTasks = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        return [];
    }
};

// Create a new task
export const createTask = async (title) => {
    try {
        const response = await axios.post(API_URL, { title });
        return response.data;
    } catch (error) {
        console.error("Error creating task:", error);
        return null;
    }
};
