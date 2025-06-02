import React, { useState, useEffect } from 'react';

export default function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem('todos');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [filter, setFilter] = useState('all');
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 16,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: 280,       // fixed narrow width like mobile
          border: '1px solid black',
          borderRadius: 8,
          padding: 16,
          boxShadow: '0 0 8px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        <h1
          style={{
            fontSize: 16,
            fontWeight: '700',
            textAlign: 'center',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: 2,
          }}
        >
          TODO LIST
        </h1>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', gap: 8 }}
          aria-label="Add todo form"
        >
          <input
            type="text"
            placeholder="Add task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              flexGrow: 1,
              fontSize: 14,
              padding: '8px 10px',
              border: '1px solid black',
              borderRadius: 6,
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              fontSize: 14,
              padding: '8px 14px',
              border: '1px solid black',
              borderRadius: 6,
              backgroundColor: 'black',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Add
          </button>
        </form>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            fontSize: 12,
          }}
          role="group"
          aria-label="Filter todos"
        >
          {['all', 'active', 'completed'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 10px',
                borderRadius: 6,
                border: '1px solid black',
                backgroundColor: filter === f ? 'black' : 'white',
                color: filter === f ? 'white' : 'black',
                cursor: 'pointer',
                fontWeight: '600',
                textTransform: 'capitalize',
                userSelect: 'none',
              }}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>

        <ul
          style={{
            maxHeight: 300,
            overflowY: 'auto',
            paddingLeft: 0,
            margin: 0,
            listStyle: 'none',
            fontSize: 14,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 8px',
                border: '1px solid #000',
                borderRadius: 6,
                userSelect: 'none',
              }}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  flexGrow: 1,
                  cursor: 'pointer',
                  color: todo.completed ? '#666' : 'black',
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
                title={todo.text}
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  aria-label={`Mark ${todo.text} as completed`}
                />
                {todo.text}
              </label>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'black',
                  fontSize: 18,
                  lineHeight: 1,
                  cursor: 'pointer',
                  padding: 0,
                  marginLeft: 8,
                }}
                aria-label={`Delete task: ${todo.text}`}
              >
                &times;
              </button>
            </li>
          ))}
        </ul>

        {filteredTodos.length === 0 && (
          <p
            style={{
              textAlign: 'center',
              color: '#888',
              fontSize: 14,
              marginTop: 8,
              userSelect: 'none',
            }}
          >
            No tasks.
          </p>
        )}
      </div>
    </div>
  );
}
