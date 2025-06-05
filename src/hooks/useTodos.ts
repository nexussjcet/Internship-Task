import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { Todo, FilterType, isTodo } from '@/lib/types';

const STORAGE_KEY = 'todos';

// Helper function to validate and normalize todo data
const validateTodo = (data: unknown): Todo | null => {
  if (!data || typeof data !== 'object') return null;
  
  try {
    // Safely extract properties with type checking
    const todoData = data as Record<string, unknown>;
    
    // For partial updates or legacy data, construct a valid Todo
    const normalizedTodo: Todo = {
      id: typeof todoData.id === 'string' ? todoData.id : crypto.randomUUID(),
      text: (typeof todoData.text === 'string' && todoData.text.trim() !== '') 
        ? todoData.text.trim() 
        : '',
      completed: typeof todoData.completed === 'boolean' ? todoData.completed : false,
      createdAt: todoData.createdAt instanceof Date 
        ? todoData.createdAt 
        : new Date(todoData.createdAt as string || Date.now()),
      updatedAt: todoData.updatedAt instanceof Date 
        ? todoData.updatedAt 
        : todoData.updatedAt 
          ? new Date(todoData.updatedAt as string)
          : undefined,
    };
    
    // Text is required
    if (!normalizedTodo.text) {
      return null;
    }
    
    // Ensure the object passes the type guard after normalization
    if (!isTodo(normalizedTodo)) {
      console.warn('Failed to normalize todo:', data);
      return null;
    }
    
    return normalizedTodo;
  } catch (error) {
    console.error('Error validating todo:', error, data);
    return null;
  }
};

// Helper function to safely parse todos from localStorage
const getStoredTodos = (): Todo[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];
    
    // Validate and transform todos
    return parsed
      .map(item => {
        try {
          return validateTodo(item);
        } catch (error) {
          console.warn('Invalid todo item found in storage:', item);
          return null;
        }
      })
      .filter((todo): todo is Todo => todo !== null)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); // Sort by newest first
  } catch (error) {
    console.error('Failed to parse stored todos:', error);
    return [];
  }
};

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const isInitialMount = useRef(true);

  // Load todos on initial render
  useEffect(() => {
    const loadTodos = () => {
      try {
        const storedTodos = getStoredTodos();
        setTodos(storedTodos);
        setError(null);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load todos');
        setError(error);
        console.error('Error loading todos:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTodos();
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    // Skip the first render to prevent saving the initial empty array
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
      setError(null);
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to save todos');
      setError(error);
      console.error('Error saving todos:', error);
      
      // Revert to previous state if saving fails
      // This prevents the UI from getting out of sync with localStorage
      try {
        const storedTodos = getStoredTodos();
        if (JSON.stringify(storedTodos) !== JSON.stringify(todos)) {
          setTodos(storedTodos);
        }
      } catch (revertError) {
        console.error('Failed to revert todos after save error:', revertError);
      }
    }
  }, [todos]);

  const addTodo = useCallback(async (text: string): Promise<void> => {
    if (!text.trim()) {
      throw new Error('Todo text cannot be empty');
    }
    
    const newTodo: Todo = {
      id: crypto.randomUUID(), // More reliable than Date.now()
      text: text.trim(),
      completed: false,
      createdAt: new Date(),
    };
    
    setTodos(prev => [newTodo, ...prev]);
  }, []);

  const toggleTodo = useCallback(async (id: string): Promise<void> => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { 
          ...todo, 
          completed: !todo.completed,
          // Update the updatedAt timestamp if needed
          updatedAt: new Date() 
        } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback(async (id: string): Promise<void> => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const clearCompleted = useCallback(async (): Promise<void> => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []); 

  // Memoize the filtered todos to prevent unnecessary recalculations
  const filteredTodos = useCallback(() => {
    return todos.filter(todo => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    });
  }, [todos, filter]);

  // Memoize derived state to prevent unnecessary recalculations
  const { activeCount, completedCount } = useMemo(() => {
    const active = todos.filter(todo => !todo.completed).length;
    return {
      activeCount: active,
      completedCount: todos.length - active,
    };
  }, [todos]);

  // Calculate stats for the current filter
  const filteredTodosCount = useMemo(() => filteredTodos().length, [filteredTodos]);

  return {
    // Current todos based on filter
    todos: filteredTodos(),
    
    // Todo actions
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    
    // Filter state
    filter,
    setFilter,
    
    // Counts and stats
    activeCount,
    completedCount,
    total: todos.length,
    filteredCount: filteredTodosCount,
    
    // Loading and error states
    isLoading,
    error,
    
    // Raw todos (for debugging or advanced use cases)
    allTodos: todos,
  };
}
