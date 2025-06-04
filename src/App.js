import './App.css';
import { useState } from 'react';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const addTodo = () => {
    if (toDo.trim()) {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleStatus = (id) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setToDos([]);
  };

  const getDateInfo = () => {
    const now = new Date();
    const days = [
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const day = days[now.getDay()];
    const date = now.toLocaleDateString();
    return `${day}, ${date}`;
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Today is {getDateInfo()} 🌞</h2>
      </div>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i className="fas fa-plus" onClick={addTodo}></i>
      </div>

      {toDos.length > 0 && (
        <div className="clearAll">
          <button onClick={clearAll}>🧹 Clear All</button>
        </div>
      )}

      <div className="todos">
        {toDos.map((todo) => (
          <div className="todo fade-in" key={todo.id}>
            <div className="left">
              <input
                type="checkbox"
                checked={todo.status}
                onChange={() => toggleStatus(todo.id)}
              />
              <p style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>
                {todo.text}
              </p>
            </div>
            <div className="right">
              <i className="fas fa-trash" onClick={() => deleteTodo(todo.id)}></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
