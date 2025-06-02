import React, { createContext, useContext, useEffect, useState } from 'react';

// Define the Todo interface
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

// Define filter types
export type FilterType = 'all' | 'active' | 'completed';

// Define the context type
interface TodoContextType {
  todos: Todo[];
  filter: FilterType;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: FilterType) => void;
  filteredTodos: Todo[];
  clearCompleted: () => void;
}

// Create the context
const TodoContext = createContext<TodoContextType | undefined>(undefined);

// Create a provider component
export function TodoProvider({ children }: { children: React.ReactNode }) {
  // Load todos from localStorage if available
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
        console.error('Failed to parse todos from localStorage', error);
        return [];
      }
    }
    return [];
  };

  const [todos, setTodos] = useState<Todo[]>(loadTodos);
  const [filter, setFilter] = useState<FilterType>('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (text: string) => {
    const trimmedText = text.trim();
    if (trimmedText) {
      const newTodo: Todo = {
        id: crypto.randomUUID(),
        text: trimmedText,
        completed: false,
        createdAt: new Date(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Toggle a todo's completed status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Clear completed todos
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter todos based on the current filter
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });

  // Sort todos by creation date (newest first)
  filteredTodos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

  // Provide the context value
  const value = {
    todos,
    filter,
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    filteredTodos,
    clearCompleted,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

// Create a custom hook to use the context
export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}