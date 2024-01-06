import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskDetail from './components/TaskDetail';
import './components/TaskList.css';
import './components/TaskForm.css';


const App = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = newTask => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask, status: 'Incomplete' }]);
  };

  const handleUpdateTask = updatedTask => {
    const updatedTasks = tasks.map(task =>
      task.id === updatedTask.id ? { ...task, title: updatedTask.title } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleCompleteTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, status: 'Complete' } : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null);
  };

  const handleSelectTask = task => {
    setSelectedTask(task);
  };

  return (
    <div>
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onComplete={handleCompleteTask}
        onSelect={handleSelectTask}
      />
      <TaskForm
        onAddTask={handleAddTask}
        onUpdateTask={handleUpdateTask}
        selectedTask={selectedTask}
      />
      {selectedTask && <TaskDetail task={selectedTask} />}
    </div>
  );
};

export default App;