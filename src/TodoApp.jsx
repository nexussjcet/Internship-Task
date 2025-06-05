import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const FILTERS = {
  all: (todos) => todos,
  active: (todos) => todos.filter((t) => !t.completed),
  completed: (todos) => todos.filter((t) => t.completed),
};

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const newTodoRef = useRef(null);

  // Load todos from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Theme 
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Add new todo
  function handleAdd(e) {
    e.preventDefault();
    const value = newTodoRef.current.value.trim();
    if (!value) return;
    setTodos([
      ...todos,
      { id: Date.now(), text: value, completed: false }
    ]);
    newTodoRef.current.value = "";
  }

  // Toggle 
  function toggleTodo(id) {
    setTodos((tds) =>
      tds.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Delete 
  function deleteTodo(id) {
    setTodos((tds) => tds.filter((todo) => todo.id !== id));
  }

  // Editing
  function startEditing(id, text) {
    setEditingId(id);
    setEditText(text);
  }

  // Save 
  function saveEdit(e) {
    e.preventDefault();
    setTodos((tds) =>
      tds.map((todo) =>
        todo.id === editingId ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  }

  const filteredTodos = FILTERS[filter](todos);

  return (
    <div className="container">
      <div className="todo-card">
        <div className="header">
          <h1>Todo List</h1>
          <button
            id="theme-toggle"
            className="theme-toggle"
            title="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <span className="theme-toggle-icon">
              {theme === "dark" ? "☀︎" : "🌚"}
            </span>
          </button>
        </div>

        <form
          id="todo-form"
          className="add-todo-form"
          onSubmit={handleAdd}
          autoComplete="off"
        >
          <input
            type="text"
            id="new-todo"
            placeholder="Add a new todo..."
            ref={newTodoRef}
            autoComplete="off"
          />
          <button type="submit">
            <span className="icon">+</span>
            Add
          </button>
        </form>

        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              type="button"
              style={{
                background: filter === type ? "var(--primary)" : "var(--item-bg)",
                color: filter === type ? "#fff" : "var(--text-primary)",
                border: "1px solid var(--border-color)",
              }}
              onClick={() => setFilter(type)}
            >
              {type[0].toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        <div id="todo-list" className="todo-list">
          {filteredTodos.length === 0 ? (
            <p className="empty-state">No todos yet. Add one above!</p>
          ) : (
            filteredTodos.map((todo) => (
              <div className="todo-item" key={todo.id}>
                <div
                  className={
                    "todo-checkbox" + (todo.completed ? " completed" : "")
                  }
                  tabIndex={0}
                  role="checkbox"
                  aria-checked={todo.completed}
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? "✓" : ""}
                </div>
                {editingId === todo.id ? (
                  <form className="edit-form" onSubmit={saveEdit}>
                    <input
                      className="edit-input"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="action-button save-button"
                      title="Save"
                    >
                      ✓
                    </button>
                    <button
                      type="button"
                      className="action-button cancel-button"
                      title="Cancel"
                      onClick={() => setEditingId(null)}
                    >
                      ✕
                    </button>
                  </form>
                ) : (
                  <>
                    <div
                      className={
                        "todo-text" + (todo.completed ? " completed" : "")
                      }
                    >
                      {todo.text}
                    </div>
                    <div className="todo-actions">
                      <button
                        className="action-button edit-button"
                        title="Edit"
                        onClick={() => startEditing(todo.id, todo.text)}
                      >
                        ✎
                      </button>
                      <button
                        className="action-button delete-button"
                        title="Delete"
                        onClick={() => deleteTodo(todo.id)}
                      >
                        ×
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}