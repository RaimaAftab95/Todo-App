import React, { useState } from 'react';

function ToDoInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-3 mb-6 w-full max-w-lg">
      <input
        type="text"
        className="flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
        placeholder="Enter a new task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-md hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
}

export default ToDoInput;
