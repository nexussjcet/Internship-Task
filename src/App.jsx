import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

const quotes = [
  "The only way to do great work is to love what you do. – Steve Jobs",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
  "It does not matter how slowly you go as long as you do not stop. – Confucius",
  "You miss 100% of the shots you don’t take. – Wayne Gretzky",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. – Ralph Waldo Emerson"
];

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [quote, setQuote] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    generateQuote();
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const handleInputChange = (e) => setInput(e.target.value);

  const handleInputKeyPress = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      addTask(input.trim());
      setInput("");
    }
  };

  const addTask = (taskText) => {
    setTasks([
      ...tasks,
      {
        text: taskText,
        complete: false,
        priorityDate: "",
        id: Date.now()
      }
    ]);
  };

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const newText = prompt("Edit your task", task.text);
    if (newText && newText.trim() !== "") {
      setTasks(tasks.map((t) => (t.id === id ? { ...t, text: newText.trim() } : t)));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: !t.complete } : t)));
  };

  const setPriority = (id, date) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, priorityDate: date } : t)));
  };

  const getTaskStyle = (task) => {
    if (!task.priorityDate) return {};
    const today = new Date();
    today.setHours(0,0,0,0);
    const priorityDate = new Date(task.priorityDate);
    if (isNaN(priorityDate)) return {};
    if (priorityDate < today) {
      return { backgroundColor: "#f8d7da" }; // overdue
    } else {
      return { backgroundColor: "#d4edda" }; // upcoming
    }
  };

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  return (
    <>
      <div className="container">
        <h2 className="center">To-Do List</h2>
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            id="task-input"
            className="task-input"
            placeholder="Add a new task..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleInputKeyPress}
          />
          <button
            id="enter-button"
            className="enter-button"
            onClick={() => {
              if (input.trim() !== "") {
                addTask(input.trim());
                setInput("");
                inputRef.current.focus();
              }
            }}
          >
            ADD
          </button>
        </div>
        <ul id="task-list" className="task-list">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task${task.complete ? " complete" : ""}`}
              style={getTaskStyle(task)}
            >
              <span>{task.text}</span>
              <div className="task-actions">
                <button
                  className="edit-button"
                  onClick={() => editTask(task.id)}
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteTask(task.id)}
                  title="Delete"
                >
                  🗑
                </button>
                <button onClick={() => toggleComplete(task.id)} title="Complete">
                  ✔
                </button>
              </div>
              <input
                type="date"
                className="priority-date"
                value={task.priorityDate}
                onChange={(e) => setPriority(task.id, e.target.value)}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="quote-box">
        <p id="quote-text">{quote}</p>
        <button onClick={generateQuote}>Get New Quote</button>
      </div>

      <button
        id="dark-mode-toggle"
        className="dark-mode-toggle"
        onClick={handleDarkModeToggle}
        aria-label="Toggle dark mode"
      >
        <i className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`} id="dark-mode-icon"></i>
      </button>
    </>
  );
}

export default App;