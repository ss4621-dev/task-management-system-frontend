// src/components/TaskList.js
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onDelete, onComplete, onSelect }) => {
  return (
    <div>
      {tasks.length > 0 && (
        <h2>Task List</h2>
      )}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <span>{task.title} - {task.status}</span>
            <div>
              <button onClick={() => onDelete(task.id)} className="delete">
                Delete
              </button>
              <button onClick={() => onComplete(task.id)}
                className={`complete ${task.status === 'complete' ? 'completed' : ''}`}
              >
                {task.status === 'complete' ? 'Completed' : 'Complete'}
              </button>
              <button onClick={() => onSelect(task)}>Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
