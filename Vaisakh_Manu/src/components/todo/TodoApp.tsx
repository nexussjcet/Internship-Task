import { TodoProvider } from '@/context/TodoContext';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { TodoFilter } from './TodoFilter';
import { CheckCircle } from 'lucide-react';

export function TodoApp() {
  return (
    <TodoProvider>
      <div className="w-full max-w-2xl mx-auto p-4 md:p-6">
        <header className="flex items-center justify-center mb-8">
          <CheckCircle className="h-8 w-8 mr-2 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Todo App</h1>
        </header>
        
        <div className="bg-card shadow-lg rounded-xl p-6 border">
          <TodoInput />
          <TodoList />
          <TodoFilter />
        </div>
        
        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>Click to toggle • Double-click to edit • Drag to reorder</p>
        </footer>
      </div>
    </TodoProvider>
  );
}