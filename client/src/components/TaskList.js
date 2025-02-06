const TaskList = ({ tasks }) => {
    return (
        <div className="mt-4 bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-gray-800">Task List</h2>
            <ul className="mt-2 divide-y">
                {tasks.map((task) => (
                    <li key={task._id} className="py-3">
                        <strong className="text-lg text-gray-900">{task.title}</strong>
                        <p className="text-gray-600 mt-1">{task.description}</p>
                        <span className="text-sm text-blue-500">Jira ID: {task.jiraIssueId}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;