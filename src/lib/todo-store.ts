import { create } from 'zustand';
import { Todo } from './types';

// Load todos from localStorage
const loadTodos = (): Todo[] => {
  const storedTodos = localStorage.getItem('todos');
  if (storedTodos) {
    try {
      return JSON.parse(storedTodos, (key, value) => {
        if (key === 'createdAt') {
          return new Date(value);
        }
        return value;
      });
    } catch (error) {
      console.error('Failed to parse todos from localStorage:', error);
      return [];
    }
  }
  return [];
};

// Save todos to localStorage
const saveTodos = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Create a Zustand store
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  setActiveTask: (id: string) => void;
  clearActiveTask: () => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
  todos: loadTodos(),
  
  addTodo: (text: string) => 
    set((state) => {
      const newTodos = [
        {
          id: crypto.randomUUID(),
          text,
          completed: false,
          createdAt: new Date(),
          isCurrentlyActive: false,
        },
        ...state.todos,
      ];
      saveTodos(newTodos);
      return { todos: newTodos };
    }),

  toggleTodo: (id: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodos(newTodos);
      return { todos: newTodos };
    }),

  deleteTodo: (id: string) =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => todo.id !== id);
      saveTodos(newTodos);
      return { todos: newTodos };
    }),

  editTodo: (id: string, newText: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      );
      saveTodos(newTodos);
      return { todos: newTodos };
    }),

  setActiveTask: (id: string) =>
    set((state) => {
      const newTodos = state.todos.map((todo) => ({
        ...todo,
        isCurrentlyActive: todo.id === id,
      }));
      saveTodos(newTodos);
      return { todos: newTodos };
    }),

  clearActiveTask: () =>
    set((state) => {
      const newTodos = state.todos.map((todo) => ({
        ...todo,
        isCurrentlyActive: false,
      }));
      saveTodos(newTodos);
      return { todos: newTodos };
    }),
}));