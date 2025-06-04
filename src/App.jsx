// App.jsx
import React, { useState } from 'react';
import { Input } from './components/ui/Input';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { Checkbox } from "./components/ui/Checkbox";
import { Trash2 } from 'lucide-react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">📝 ToDo App</h1>
      <div className="flex gap-2 mb-6 w-full max-w-md">
        <Input
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="w-full max-w-md space-y-4">
        {tasks.map(task => (
          <Card key={task.id} className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />
              <span className={task.completed ? "line-through text-gray-400" : ""}>
                {task.text}
              </span>
            </div>
            <Button className="bg-black text-white" variant="ghost" onClick={() => deleteTask(task.id)} size="icon">
              <Trash2 className="h-5 w-5 text-red-500" />
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
