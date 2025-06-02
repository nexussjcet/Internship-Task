import { TodoItem } from './TodoItem';
import { TodoForm } from './TodoForm';
import { TodoFilters } from './TodoFilters';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTodos } from '@/hooks/useTodos';
import { Todo } from '@/lib/types';
import { AlertCircle, Plus } from 'lucide-react';

export function TodoList() {
  const {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
    filter,
    setFilter,
    activeCount,
    completedCount,
    isLoading,
    error,
  } = useTodos();

  const handleAddTodo = (text: string) => {
    try {
      addTodo(text);
    } catch (error) {
      console.error('Failed to add todo:', error);
      // Error is already handled in the useTodos hook
    }
  };

  const [isProcessing, setIsProcessing] = useState(false);

  const handleToggleTodo = async (id: string) => {
    if (isProcessing) return;
    
    try {
      setIsProcessing(true);
      await toggleTodo(id);
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    if (isProcessing) return;
    
    try {
      setIsProcessing(true);
      await deleteTodo(id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClearCompleted = async () => {
    if (isProcessing) return;
    
    try {
      setIsProcessing(true);
      await clearCompleted();
    } catch (error) {
      console.error('Failed to clear completed todos:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Show loading state
  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-12 px-4 flex flex-col items-center justify-center py-12">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 rounded-full bg-muted mb-4"></div>
          <div className="h-4 w-48 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto mt-12 px-4">
        <div className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-lg flex items-start gap-3">
          <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
          <div>
            <h2 className="font-medium">Something went wrong</h2>
            <p className="text-sm">{error.message || 'Failed to load todos. Please try refreshing the page.'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        Todo App
      </h1>
      
      <div className="bg-card rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="p-4 border-b">
          <TodoForm onSubmit={handleAddTodo} />
        </div>
        
        {todos.length > 0 ? (
          <>
            <motion.ul 
              className="divide-y divide-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <AnimatePresence>
                {todos.map((todo: Todo) => (
                  <motion.li 
                    key={todo.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    layout
                  >
                    <TodoItem
                      todo={todo}
                      onToggle={handleToggleTodo}
                      onDelete={handleDeleteTodo}
                    />
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <TodoFilters
                filter={filter}
                setFilter={setFilter}
                activeCount={activeCount}
                hasCompleted={completedCount > 0}
                onClearCompleted={handleClearCompleted}
                isLoading={isProcessing}
              />
            </motion.div>
          </>
        ) : (
          <motion.div 
            className="py-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto w-20 h-20 bg-muted/30 rounded-full flex items-center justify-center mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="text-muted-foreground"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No tasks yet</h3>
            <p className="text-muted-foreground mb-6">
              {filter === 'all' 
                ? 'Add your first task to get started' 
                : filter === 'active' 
                  ? 'No active tasks. Add a new one above!' 
                  : 'No completed tasks yet. Keep going!'}
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                  input?.focus();
                }}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Task
              </button>
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4"
                >
                  View All Tasks
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
      
      <p className="text-center text-sm text-muted-foreground">
        Drag and drop to reorder list
      </p>
    </div>
  );
}
