import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FilterType, Todo } from '@/lib/types';

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  todos: Todo[];
}

function TodoFilter({ filter, setFilter, todos }: TodoFilterProps) {
  // Count todos by status
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="flex justify-between items-center border-b pb-2">
      <div className="flex gap-1">
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
          count={todos.length}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'active'} 
          onClick={() => setFilter('active')}
          count={activeTodos}
        >
          Active
        </FilterButton>
        <FilterButton 
          active={filter === 'completed'} 
          onClick={() => setFilter('completed')}
          count={completedTodos}
        >
          Completed
        </FilterButton>
      </div>
    </div>
  );
}

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  count: number;
}

function FilterButton({ children, active, onClick, count }: FilterButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className={cn(
        "h-8 text-xs",
        active ? "bg-primary/10 hover:bg-primary/20" : "hover:bg-primary/5"
      )}
    >
      {children} <span className="ml-1 text-muted-foreground">({count})</span>
    </Button>
  );
}

export default TodoFilter;