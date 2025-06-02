import React from 'react'

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      </label>
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>&times;</button>
    </li>
  )
}

export default TodoItem
