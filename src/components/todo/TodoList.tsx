import React from 'react';
import { useTodo } from '@/context/TodoContext';
import { TodoItem } from './TodoItem';
import { ClipboardList } from 'lucide-react';

export function TodoList() {
  const { filteredTodos } = useTodo();

  if (filteredTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-3 text-muted-foreground">
        <ClipboardList className="h-12 w-12 opacity-50" />
        <p>No tasks found</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}