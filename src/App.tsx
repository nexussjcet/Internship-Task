import React, { useState, useEffect } from "react";
import './App.css';

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

type Filter = "all" | "active" | "completed";

const getInitialTasks = (): Task[] => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
};

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), completed: false },
    ]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">ToDo App</h1>
        <form onSubmit={addTask} className="flex mb-4 gap-2">
          <input
            className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
        <div className="flex justify-center gap-2 mb-4">
          <button
            className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <ul className="space-y-2">
          {filteredTasks.length === 0 && (
            <li className="text-center text-gray-400">No tasks</li>
          )}
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between bg-gray-50 rounded px-3 py-2 shadow-sm"
            >
              <label className="flex items-center gap-2 cursor-pointer flex-1">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="accent-blue-500"
                />
                <span className={
                  `flex-1 ${task.completed ? "line-through text-gray-400" : ""}`
                }>
                  {task.text}
                </span>
              </label>
              <button
                onClick={() => deleteTask(task.id)}
                className="ml-2 text-red-500 hover:text-red-700"
                aria-label="Delete task"
              >
                &#10005;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
