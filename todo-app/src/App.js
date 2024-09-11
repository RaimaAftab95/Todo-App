import React, { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'inProgress') return !task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-5">
      <h1 className="text-4xl font-bold mb-8 text-blue-600">To-Do App</h1>

      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-6">
        <button className={`px-5 py-2 rounded ${filter === 'all' ? 'bg-blue-600' : 'bg-blue-400'} text-white font-medium`} onClick={() => setFilter('all')}>
          All
        </button>
        <button className={`px-5 py-2 rounded ${filter === 'inProgress' ? 'bg-yellow-600' : 'bg-yellow-400'} text-white font-medium`} onClick={() => setFilter('inProgress')}>
          In Progress
        </button>
        <button className={`px-5 py-2 rounded ${filter === 'completed' ? 'bg-green-600' : 'bg-green-400'} text-white font-medium`} onClick={() => setFilter('completed')}>
          Completed
        </button>
      </div>

      <ToDoInput addTask={addTask} />
      <ToDoList tasks={filteredTasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
    </div>
  );
}

export default App;