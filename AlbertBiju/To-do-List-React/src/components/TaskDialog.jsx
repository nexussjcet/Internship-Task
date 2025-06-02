import React, { useState, useEffect, useRef } from 'react';
import './TaskDialog.css';

export default function TaskDialog({ onClose, onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [important, setImportant] = useState(false);
  const dialogRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = () => {
    if (taskText.trim()) {
      onAddTask({ text: taskText, important });
      setTaskText('');
      setImportant(false);
      onClose();
    }
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-box" ref={dialogRef}>
        <textarea
            ref={inputRef}
            placeholder="Enter your task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
            autoFocus
            rows={3} 
            style={{ resize: 'none' }} 
/>
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={important}
            onChange={(e) => setImportant(e.target.checked)}
          />
          Important
        </label>
        <button onClick={handleSubmit}>Add Task</button>
      </div>
    </div>
  );
}
