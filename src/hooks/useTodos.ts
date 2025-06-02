import { useState, useEffect } from 'react';
import { Todo, FilterStatus } from '@/types';

export function useTodos() {
  // Load todos from localStorage on initial render
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        // Parse stored JSON and ensure dates are converted back to Date objects
        return JSON.parse(savedTodos, (key, value) => 
          key === 'createdAt' ? new Date(value) : value
        );
      } catch (error) {
        console.error('Failed to parse todos:', error);
        return [];
      }
    }
    return [];
  });

  const [filter, setFilter] = useState<FilterStatus>('all');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Filter todos based on current filter status
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  // Add a new todo
  const addTodo = (text: string) => {
    if (text.trim() === '') return;
    
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Clear all completed todos
  const clearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  // Get statistics
  const stats = {
    total: todos.length,
    active: todos.filter(todo => !todo.completed).length,
    completed: todos.filter(todo => todo.completed).length
  };

  return {
    todos: filteredTodos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted
  };
}