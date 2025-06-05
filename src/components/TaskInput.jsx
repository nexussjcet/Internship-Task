import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className="inputField">
      <label className="input-label" htmlFor="task-input">
        Enter a task
      </label>
      <input
        id="task-input"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="e.g. Buy groceries"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default TaskInput;