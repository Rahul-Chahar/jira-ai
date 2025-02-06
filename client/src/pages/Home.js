import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { getTasks } from "../services/api";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const data = await getTasks();
        setTasks(data);
    };

    return (
        <div className="p-6 max-w-2xl mx-auto bg-gray-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl font-bold mb-5 text-gray-800">JIRA-AI Task Manager</h1>
            <TaskForm onTaskCreated={fetchTasks} />
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Home;
