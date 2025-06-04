import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import {FilterType } from '@/lib/types';
import { useTodoStore } from '@/lib/todo-store';
import { ThemeToggle } from '../theme-toggle';

function TodoApp() {
  const { todos} = useTodoStore();
  const [filter, setFilter] = useState<FilterType>('all');
  const [dateTime, setDateTime] = useState(new Date());

  // Update date/time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  // Apply filters
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Format date nicely
  const formattedDate = dateTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Card className="w-full max-w-md shadow-lg animate-fade-in">
      <CardHeader className="space-y-1 pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold">TaskTrack</CardTitle>
          <ThemeToggle />
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1" />
          {formattedDate}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <TodoForm />
        <TodoFilter filter={filter} setFilter={setFilter} todos={todos} />
        <TodoList todos={filteredTodos} />
      </CardContent>
    </Card>
  );
}

export default TodoApp;
