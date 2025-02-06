import { useState } from "react";
import { createTask } from "../services/api";

const TaskForm = ({ onTaskCreated }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        const newTask = await createTask(title);
        if (newTask) {
            onTaskCreated(newTask);
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
            <input
                type="text"
                placeholder="Enter task title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-3 border rounded w-full text-lg"
            />
            <button
                type="submit"
                className="mt-3 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 w-full"
            >
                Create Task
            </button>
        </form>
    );
};

export default TaskForm;