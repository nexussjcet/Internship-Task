import { Todo, FilterStatus } from '@/types';
import { TodoItem } from './TodoItem';
import { TodoFilter } from './TodoFilter';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TodoListProps {
  todos: Todo[];
  filter: FilterStatus;
  stats: {
    total: number;
    active: number;
    completed: number;
  };
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onFilterChange: (filter: FilterStatus) => void;
  onClearCompleted: () => void;
}

export function TodoList({
  todos,
  filter,
  stats,
  onToggle,
  onDelete,
  onFilterChange,
  onClearCompleted,
}: TodoListProps) {
  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        {todos.length > 0 ? (
          <div className="space-y-2">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <p className="text-muted-foreground mb-2">No tasks found</p>
            <p className="text-sm text-muted-foreground">
              {filter === 'all'
                ? 'Add a new task to get started!'
                : filter === 'active'
                ? 'No active tasks. Good job!'
                : 'No completed tasks yet.'}
            </p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t border-border pt-4 pb-3 px-6">
        <TodoFilter
          filter={filter}
          onFilterChange={onFilterChange}
          stats={stats}
          onClearCompleted={onClearCompleted}
        />
      </CardFooter>
    </Card>
  );
}