// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onAddTask, onUpdateTask, selectedTask }) => {
  const [title, setTitle] = useState(selectedTask ? selectedTask.title : '');

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedTask) {
      onUpdateTask({ ...selectedTask, title });
    } else {
      onAddTask({ title });
    }
    setTitle('');
  };

  return (
    <div>
      <h2>{selectedTask ? 'Update Task' : 'Add Task'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Task Title:    
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <button type="submit">{selectedTask ? 'Update Task' : 'Add Task'}</button>
      </form>
    </div>
  );
};

export default TaskForm;
