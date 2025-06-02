import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

export function TodoForm({ onAddTodo }: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-2 mb-6">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
        data-testid="new-todo-input"
      />
      <Button type="submit" size="default" disabled={!text.trim()}>
        <PlusCircle className="h-5 w-5 mr-1" />
        Add
      </Button>
    </form>
  );
}