function TaskItem({ task, deleteTask, toggleCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => toggleCheck(task.taskName)}
      />
      <span>{task.taskName}</span>
      <button onClick={() => deleteTask(task.taskName)}>Delete</button>
    </li>
  );
}

export default TaskItem;