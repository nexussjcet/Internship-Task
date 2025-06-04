import { FileText } from 'lucide-react';
import { Todo } from '../types/todo';
import { TodoItem } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <FileText size={40} className="mb-3 text-gray-400" />
        <p className="text-gray-500">No tasks found</p>
        <p className="text-xs mt-1 text-gray-400">Add a new task to get started</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}
