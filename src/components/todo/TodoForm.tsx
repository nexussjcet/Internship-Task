import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle } from 'lucide-react';
import { useTodoStore } from '@/lib/todo-store';
import { toast } from 'sonner';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodoStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedText = text.trim();
    
    if (!trimmedText) {
      toast.error('Task cannot be empty');
      return;
    }
    
    addTodo(trimmedText);
    setText('');
    toast.success('Task added');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
        autoComplete="off"
      />
      <Button type="submit" size="icon" disabled={!text.trim()}>
        <PlusCircle className="h-5 w-5" />
        <span className="sr-only">Add task</span>
      </Button>
    </form>
  );
}

export default TodoForm;