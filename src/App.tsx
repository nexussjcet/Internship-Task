import { useState } from "react";
import type { FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./components/ui/button";
import { DialogContent, DialogHeader, DialogTrigger } from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
type ToDoList = {
  title: string;
  details: string;
};

function App() {
  const [lists, setLists] = useState<ToDoList[]>([]);

  const handleList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const newItem: ToDoList = {
      title: formData.get("title") as string,
      details: formData.get("details") as string,
    };

    setLists(prevList => [...prevList, newItem]);
    e.currentTarget.reset(); // optional: resets form fields
  };

  const deleteTask = (indexToDelete: number) => {
    setLists(prevList => prevList.filter((_, index) => index !== indexToDelete));
  };

  return (
    <main className="bg-pink-300 w-screen h-screen p-4">
      <Dialog.Root>
        <DialogTrigger asChild>
          <Button className="bg-emerald-100 text-pink-400 p-4">Add new</Button>
        </DialogTrigger>
        <DialogContent className="bg-emerald-100">
          <DialogHeader className="text-pink-400">New List +</DialogHeader>
          <form onSubmit={handleList}>
            <Input placeholder="List Name" name="title" />
            <Textarea placeholder="Enter your tasks" name="details" />
            <Button type="submit" className="bg-yellow-50 text-pink-400">
              Create List
            </Button>
          </form>
        </DialogContent>
      </Dialog.Root>

      <section className="mt-6 space-y-4">
        {lists.map((todo, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow flex justify-between items-start"
          >
            <div>
              <h1 className="font-bold text-lg text-pink-500">{todo.title}</h1>
              <p className="text-gray-700">{todo.details}</p>
            </div>
            <Button
              className="bg-red-200 text-red-700 ml-4"
              onClick={() => deleteTask(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
