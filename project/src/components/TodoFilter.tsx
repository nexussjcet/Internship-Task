import { FilterStatus } from '@/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TodoFilterProps {
  filter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onClearCompleted: () => void;
}

export function TodoFilter({ filter, onFilterChange, stats, onClearCompleted }: TodoFilterProps) {
  const filters: { value: FilterStatus; label: string }[] = [
    { value: 'all', label: `All (${stats.total})` },
    { value: 'active', label: `Active (${stats.active})` },
    { value: 'completed', label: `Completed (${stats.completed})` },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
      <div className="flex gap-2">
        {filters.map((f) => (
          <Button
            key={f.value}
            variant={filter === f.value ? "default" : "outline"}
            size="sm"
            onClick={() => onFilterChange(f.value)}
            className={cn(
              "transition-all duration-200",
              filter === f.value && "font-medium"
            )}
          >
            {f.label}
          </Button>
        ))}
      </div>

      {stats.completed > 0 && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearCompleted}
          className="text-muted-foreground hover:text-destructive"
        >
          Clear completed
        </Button>
      )}
    </div>
  );
}