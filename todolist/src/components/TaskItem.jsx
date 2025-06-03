import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <label className={task.completed ? 'completed' : ''}>
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => onToggle(task.id)} 
        />
        {task.text}
      </label>
      <button onClick={() => onDelete(task.id)}>✖</button>
    </li>
  );
}

export default TaskItem;
