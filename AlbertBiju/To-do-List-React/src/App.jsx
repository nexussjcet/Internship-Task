import { useState } from 'react';
import TaskDialog from './components/TaskDialog';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]); // add completed property
  };

  // Toggle completed state of a task by index
  const toggleCompleted = (index) => {
    setTasks(tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    ));
  };

  // Remove task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <>
      <header>
        <h1>TO-DO LIST</h1>
      </header>
    
      <div className="main-wrapper">
        <div className="app">
          <div className="task-container">
            {tasks.map((task, index) => (
              <div
                key={index}
                className={`task ${task.important ? 'important' : ''} ${task.completed ? 'completed' : ''}`}
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => toggleCompleted(index)} 
                  style={{ marginRight: '10px' }}
                />
                <span style={{ flexGrow: 1 }}>{task.text}</span>
                <button 
                  onClick={() => removeTask(index)} 
                  style={{
                    marginLeft: '10px',
                    background: 'transparent',
                    border: 'none',
                    color: 'red',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '16px',
                    lineHeight: '1'
                  }}
                  aria-label="Delete task"
                  title="Delete task"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <button className="new-task-button" onClick={() => setDialogOpen(true)}>
            New Task
          </button>

          {dialogOpen && (
            <TaskDialog onAddTask={addTask} onClose={() => setDialogOpen(false)} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
