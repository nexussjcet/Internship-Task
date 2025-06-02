import { FilterType } from '@/lib/types';
import { useCallback } from 'react';

interface TodoFiltersProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => Promise<void> | void;
  isLoading?: boolean;
}

const filters: { id: FilterType; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
];

export function TodoFilters({
  filter,
  setFilter,
  activeCount,
  hasCompleted,
  onClearCompleted,
  isLoading = false,
}: TodoFiltersProps) {
  const handleClearCompleted = useCallback(async () => {
    try {
      await onClearCompleted();
    } catch (error) {
      console.error('Failed to clear completed todos:', error);
    }
  }, [onClearCompleted]);

  const itemsText = activeCount === 1 ? 'item left' : 'items left';

  return (
    <div 
      className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 text-sm text-muted-foreground border-t"
      aria-label="Todo filters"
    >
      <span className="text-sm" aria-live="polite">
        {activeCount} {itemsText}
      </span>
      
      <div 
        className="flex items-center gap-1 bg-background rounded-md p-1 border"
        role="tablist"
        aria-label="Filter todos"
      >
        {filters.map((f) => {
          const isActive = filter === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${f.id}-tab`}
              onClick={() => setFilter(f.id)}
              className={cn(
                'px-3 py-1.5 text-sm rounded-md transition-colors',
                'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50',
                isActive 
                  ? 'bg-primary/10 text-primary font-medium' 
                  : 'hover:bg-accent/50 hover:text-foreground/80',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                isLoading ? 'opacity-70' : ''
              )}
              disabled={isLoading}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      
      {hasCompleted && (
        <button
          onClick={handleClearCompleted}
          disabled={isLoading}
          className={cn(
            'text-sm hover:text-foreground/80 transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50 rounded-md',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            isLoading ? 'opacity-70' : ''
          )}
          aria-label="Clear completed todos"
        >
          Clear completed
        </button>
      )}
    </div>
  );
}

// Helper function to handle class name concatenation
function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
