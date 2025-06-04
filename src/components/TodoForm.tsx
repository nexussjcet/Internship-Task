import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export function TodoForm({ addTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-3 py-2 bg-white border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-[#e9e3d4] transition-all"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-white border-2 border-black rounded-md hover:bg-gray-100 active:bg-gray-200 active:translate-y-[2px] transition-all flex items-center"
        >
          <Plus size={16} className="mr-1" /> Add
        </button>
      </div>
    </form>
  );
}
