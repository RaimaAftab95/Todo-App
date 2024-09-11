import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleTaskCompletion, removeTask }) => {
  return (
    <ul className="w-full max-w-lg">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          removeTask={removeTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;