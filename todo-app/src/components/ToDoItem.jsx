// // src/components/ToDoItem.jsx
// import React from 'react';

// const ToDoItem = ({ task, toggleTaskCompletion, removeTask }) => {
//   return (
//     <li className="flex justify-between items-center bg-white p-2 mb-2 border rounded">
//       <span
//         onClick={() => toggleTaskCompletion(task.id)}
//         className={`cursor-pointer ${task.completed ? 'line-through' : ''}`}
//       >
//         {task.text}
//       </span>
//       <button
//         onClick={() => removeTask(task.id)}
//         className="bg-red-500 text-white p-1 ml-3"
//       >
//         Delete
//       </button>
//     </li>
//   );
// };

// export default ToDoItem;

// src/components/ToDoItem.jsx
import React from 'react';

function ToDoItem({ task, toggleTaskCompletion, removeTask }) {
  return (
    <div className="flex items-center justify-between w-full p-2 bg-white rounded mb-2 shadow">
      <div>
        <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
          {task.text}
        </p>
        <small className={`text-sm ${task.completed ? 'text-green-500' : 'text-yellow-500'}`}>
          {task.completed ? 'Completed' : 'In Progress'}
        </small>
      </div>
      <div>
        <button
          className={`mr-2 px-3 py-1 text-sm rounded ${
            task.completed ? 'bg-green-500' : 'bg-yellow-500'
          } text-white`}
          onClick={() => toggleTaskCompletion(task.id)}
        >
          {task.completed ? 'Mark as In Progress' : 'Mark as Completed'}
        </button>
        <button
          className="px-3 py-1 bg-red-500 text-white text-sm rounded"
          onClick={() => removeTask(task.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;





