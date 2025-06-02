import { useTodo, type FilterType } from '@/context/TodoContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function TodoFilter() {
  const { filter, setFilter, todos, clearCompleted } = useTodo();
  
  const completedCount = todos.filter(todo => todo.completed).length;
  const hasCompleted = completedCount > 0;
  
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center pt-4 border-t mt-6">
      <div className="text-sm text-muted-foreground">
        {todos.length - completedCount} items left
      </div>
      
      <div className="flex space-x-1 my-3 sm:my-0">
        {filters.map((item) => (
          <Button
            key={item.value}
            variant="ghost"
            size="sm"
            onClick={() => setFilter(item.value)}
            className={cn(
              filter === item.value && "bg-secondary"
            )}
          >
            {item.label}
          </Button>
        ))}
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={clearCompleted}
        disabled={!hasCompleted}
        className={cn(
          !hasCompleted && "opacity-50 cursor-not-allowed"
        )}
      >
        Clear completed
      </Button>
    </div>
  );
}