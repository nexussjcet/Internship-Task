import React, { useState } from 'react';
import { useTodo } from '@/context/TodoContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

export function TodoInput() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mb-6">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1"
        maxLength={100}
      />
      <Button type="submit" disabled={!text.trim()}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add
      </Button>
    </form>
  );
}