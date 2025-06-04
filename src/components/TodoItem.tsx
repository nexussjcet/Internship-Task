import { Check, Trash2 } from 'lucide-react';
import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

export function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white border-2 border-black rounded-md transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`w-5 h-5 flex items-center justify-center border-2 border-black rounded-md transition-all ${
            todo.completed ? 'bg-black text-white' : 'bg-white'
          }`}
        >
          {todo.completed && <Check size={12} />}
        </button>
        <span 
          className={`transition-all ${
            todo.completed ? 'line-through text-gray-500' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="p-1.5 text-sm bg-white border-2 border-black rounded-md hover:bg-red-50 active:bg-red-100 active:translate-y-[1px] transition-all text-red-600"
        title="Delete task"
      >
        <Trash2 size={14} />
      </button>
    </div>
  );
}
