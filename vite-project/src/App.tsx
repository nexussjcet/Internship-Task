
import  { useState, useEffect, type JSX } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoApp(): JSX.Element {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  
  useEffect(() => {
    const storedTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (): void => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input.trim(), completed: false }]);
    setInput("");
  };

  const toggleTask = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks: Task[] = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-blue-300">
    <div className="flex flex-col align-items-center justify-center w-md h-screen mx-auto p-4 ">
      <h1 className="text-2xl font-bold text-center mb-4"> My Routine</h1>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Add new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <Button variant="ghost" onClick={addTask}>Add</Button>
      </div>
      <Tabs defaultValue="all" onValueChange={setFilter} value={filter}>
        <TabsList className="m-auto grid grid-cols-3 mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value={filter}>
          <div className="space-y-2">
            {filteredTasks.map((task) => (
              <Card key={task.id} className="flex items-center justify-between p-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                  />
                  <span className={task.completed ? "line-through text-black" : ""}>
                    {task.text}
                  </span>
                </div>
                <Button variant="outline" size="sm" onClick={() => deleteTask(task.id)}>
                  Delete
                </Button>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
    </div>
  );
}

