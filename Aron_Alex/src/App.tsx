import React, { useState, useEffect } from 'react';
import { Trash2, Plus, Check } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
}

type FilterType = 'all' | 'active' | 'completed';

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [filter, setFilter] = useState<FilterType>('all');

  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage?.getItem('todoTasks') || '[]') as Task[];
      if (savedTasks.length > 0) setTasks(savedTasks);
    } catch (error) {
      console.error('Failed to load tasks:', error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage?.setItem('todoTasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Failed to save tasks:', error);
    }
  }, [tasks]);

  const addTask = (): void => {
    if (inputValue.trim()) {
      const newTask: Task = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString(),
      };
      setTasks([newTask, ...tasks]);
      setInputValue('');
    }
  };

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask();
  };

  const stats = {
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1 className="title">✅ ToDo App</h1>
        <p className="subtitle">Stay organized and get things done!</p>

        <div className="stats">
          <div className="stat"><span>{stats.total}</span>Total</div>
          <div className="stat"><span>{stats.active}</span>Active</div>
          <div className="stat"><span>{stats.completed}</span>Done</div>
        </div>

        <div className="input-group">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What needs to be done?"
          />
          <button onClick={addTask}><Plus size={20} /> Add</button>
        </div>

        <div className="filters">
          {(['all', 'active', 'completed'] as FilterType[]).map(ft => (
            <button
              key={ft}
              onClick={() => setFilter(ft)}
              className={filter === ft ? 'active' : ''}
            >
              {ft}
            </button>
          ))}
        </div>

        <div className="tasks">
          {filteredTasks.length === 0 ? (
            <div className="empty">
              <div>📝</div>
              <h3>{filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}</h3>
              <p>{filter === 'all' ? 'Add a task to begin' : 'Switch to All to see others'}</p>
            </div>
          ) : (
            filteredTasks.map(task => (
              <div
                key={task.id}
                className={`task ${task.completed ? 'completed' : ''}`}
              >
                <button onClick={() => toggleTask(task.id)} className="check">
                  {task.completed && <Check size={16} />}
                </button>
                <div className="details">
                  <div className="text">{task.text}</div>
                  <div className="date">Added on {task.createdAt}</div>
                </div>
                <button onClick={() => deleteTask(task.id)} className="delete">
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {stats.completed > 0 && (
          <div className="footer">
            🎉 You completed {stats.completed} task{stats.completed !== 1 ? 's' : ''}!
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
