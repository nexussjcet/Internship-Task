import React, { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Card, CardContent } from "./components/ui/card";
import { Checkbox } from "./components/ui/checkbox";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setTasks(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask() {
    if (input.trim() === "") return;
  
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
  
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setInput(""); // clear input
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-6 flex justify-center items-start">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">📝 ToDo App</h1>
  
        <div className="flex gap-2 mb-4">
          <Input
            type="text"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={handleAddTask}>Add</Button>
        </div>
  
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center italic">No tasks yet.</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className="flex justify-between items-center bg-gray-50 border border-gray-300 rounded px-4 py-2"
              >
                <div className="flex items-center gap-3">
                  <Checkbox
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span
                    className={`text-base ${
                      task.completed ? "line-through text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  className="text-sm bg-red-100 text-red-600 hover:bg-red-200"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );  
}
