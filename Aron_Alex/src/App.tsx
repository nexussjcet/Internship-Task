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

  // Load tasks from memory on component mount
  useEffect(() => {
    try {
      const savedTasks = JSON.parse(localStorage?.getItem('todoTasks') || '[]') as Task[];
      if (savedTasks.length > 0) {
        setTasks(savedTasks);
      }
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
    }
  }, []);

  // Save tasks to memory whenever tasks change
  useEffect(() => {
    try {
      if (typeof Storage !== 'undefined') {
        localStorage?.setItem('todoTasks', JSON.stringify(tasks));
      }
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }, [tasks]);

  const addTask = (): void => {
    if (inputValue.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false,
        createdAt: new Date().toLocaleDateString()
      };
      setTasks([newTask, ...tasks]);
      setInputValue('');
    }
  };

  const toggleTask = (id: number): void => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const active = tasks.filter(task => !task.completed).length;
    const completed = tasks.filter(task => task.completed).length;
    return { total, active, completed };
  };

  const stats = getTaskStats();

  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    },
    wrapper: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '0 16px'
    },
    header: {
      textAlign: 'center',
      marginBottom: '30px',
      color: 'white'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontSize: '1.1rem',
      opacity: 0.9,
      margin: 0
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '16px',
      marginBottom: '24px'
    },
    statCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      border: 'none'
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: 'bold',
      margin: '0 0 4px 0'
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#6b7280',
      margin: 0
    },
    inputSection: {
      background: 'white',
      borderRadius: '12px',
      padding: '24px',
      marginBottom: '24px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    inputContainer: {
      display: 'flex',
      gap: '12px',
      alignItems: 'stretch'
    },
    input: {
      flex: 1,
      padding: '16px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'border-color 0.2s'
    },
    addButton: {
      background: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '16px 24px',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'background-color 0.2s',
      minWidth: '100px'
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '24px'
    },
    filterWrapper: {
      background: 'white',
      borderRadius: '8px',
      padding: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      display: 'flex'
    },
    filterButton: {
      padding: '8px 16px',
      border: 'none',
      background: 'transparent',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '0.875rem',
      fontWeight: '500',
      transition: 'all 0.2s',
      textTransform: 'capitalize'
    },
    filterButtonActive: {
      background: '#3b82f6',
      color: 'white'
    },
    filterButtonInactive: {
      color: '#6b7280',
      background: 'transparent'
    },
    tasksContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    },
    emptyIcon: {
      fontSize: '4rem',
      marginBottom: '16px'
    },
    emptyTitle: {
      fontSize: '1.25rem',
      fontWeight: '500',
      color: '#4b5563',
      margin: '0 0 8px 0'
    },
    emptyText: {
      color: '#9ca3af',
      margin: 0
    },
    taskCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      border: '2px solid transparent',
      transition: 'all 0.2s'
    },
    taskCardCompleted: {
      borderColor: '#10b981',
      background: '#f0fdf4'
    },
    taskContent: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px'
    },
    checkButton: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: '2px solid #d1d5db',
      background: 'transparent',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s',
      flexShrink: 0
    },
    checkButtonCompleted: {
      background: '#10b981',
      borderColor: '#10b981',
      color: 'white'
    },
    taskDetails: {
      flex: 1,
      minWidth: 0
    },
    taskText: {
      fontSize: '1.125rem',
      margin: '0 0 4px 0',
      wordBreak: 'break-word',
      transition: 'all 0.2s'
    },
    taskTextCompleted: {
      textDecoration: 'line-through',
      color: '#6b7280'
    },
    taskDate: {
      fontSize: '0.875rem',
      color: '#9ca3af',
      margin: 0
    },
    deleteButton: {
      padding: '8px',
      border: 'none',
      background: 'transparent',
      color: '#9ca3af',
      cursor: 'pointer',
      borderRadius: '8px',
      transition: 'all 0.2s',
      flexShrink: 0
    },
    footer: {
      textAlign: 'center',
      marginTop: '32px',
      color: 'white',
      fontSize: '0.875rem'
    }
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.style.borderColor = '#3b82f6';
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    e.target.style.borderColor = '#e5e7eb';
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#2563eb';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.backgroundColor = '#3b82f6';
  };

  const handleTaskHover = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
  };

  const handleTaskLeave = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  const handleDeleteHover = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.color = '#ef4444';
    e.currentTarget.style.backgroundColor = '#fef2f2';
  };

  const handleDeleteLeave = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.style.color = '#9ca3af';
    e.currentTarget.style.backgroundColor = 'transparent';
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>✅ ToDo App</h1>
          <p style={styles.subtitle}>Stay organized and get things done!</p>
        </div>

        {/* Stats */}
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={{...styles.statNumber, color: '#3b82f6'}}>{stats.total}</div>
            <div style={styles.statLabel}>Total</div>
          </div>
          <div style={styles.statCard}>
            <div style={{...styles.statNumber, color: '#f59e0b'}}>{stats.active}</div>
            <div style={styles.statLabel}>Active</div>
          </div>
          <div style={styles.statCard}>
            <div style={{...styles.statNumber, color: '#10b981'}}>{stats.completed}</div>
            <div style={styles.statLabel}>Done</div>
          </div>
        </div>

        {/* Add Task */}
        <div style={styles.inputSection}>
          <div style={styles.inputContainer}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What needs to be done?"
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <button
              onClick={addTask}
              style={styles.addButton}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
            >
              <Plus size={20} />
              Add
            </button>
          </div>
        </div>

        {/* Filters */}
        <div style={styles.filterContainer}>
          <div style={styles.filterWrapper}>
            {(['all', 'active', 'completed'] as FilterType[]).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                style={{
                  ...styles.filterButton,
                  ...(filter === filterType ? styles.filterButtonActive : styles.filterButtonInactive)
                }}
              >
                {filterType}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div style={styles.tasksContainer}>
          {filteredTasks.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📝</div>
              <h3 style={styles.emptyTitle}>
                {filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
              </h3>
              <p style={styles.emptyText}>
                {filter === 'all' 
                  ? 'Add your first task to get started!'
                  : `Switch to "All" to see your other tasks`
                }
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <div
                key={task.id}
                style={{
                  ...styles.taskCard,
                  ...(task.completed ? styles.taskCardCompleted : {})
                }}
                onMouseEnter={handleTaskHover}
                onMouseLeave={handleTaskLeave}
              >
                <div style={styles.taskContent}>
                  <button
                    onClick={() => toggleTask(task.id)}
                    style={{
                      ...styles.checkButton,
                      ...(task.completed ? styles.checkButtonCompleted : {})
                    }}
                  >
                    {task.completed && <Check size={16} />}
                  </button>
                  
                  <div style={styles.taskDetails}>
                    <div
                      style={{
                        ...styles.taskText,
                        ...(task.completed ? styles.taskTextCompleted : {})
                      }}
                    >
                      {task.text}
                    </div>
                    <div style={styles.taskDate}>
                      Added on {task.createdAt}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => deleteTask(task.id)}
                    style={styles.deleteButton}
                    onMouseEnter={handleDeleteHover}
                    onMouseLeave={handleDeleteLeave}
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {tasks.length > 0 && (
          <div style={styles.footer}>
            {stats.completed > 0 && (
              <p>🎉 Great job! You've completed {stats.completed} task{stats.completed !== 1 ? 's' : ''}!</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoApp;