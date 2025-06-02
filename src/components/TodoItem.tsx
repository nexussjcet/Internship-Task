import { useState } from 'react';
import { Todo } from '@/types';
import { Trash2, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, 
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, 
  AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Checkbox } from '@/components/ui/checkbox';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group flex items-center justify-between p-4 rounded-lg transition-all duration-200",
        "border border-border hover:border-primary/20 mb-2",
        "bg-card hover:bg-card/80"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="todo-item"
    >
      <div className="flex items-center gap-3 flex-1">
        <Checkbox 
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="transition-transform duration-200 data-[state=checked]:bg-primary"
        />
        
        <span 
          className={cn(
            "text-foreground flex-1 transition-all duration-200",
            todo.completed && "text-muted-foreground line-through"
          )}
        >
          {todo.text}
        </span>
      </div>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon"
            className={cn(
              "text-muted-foreground hover:text-destructive transition-opacity",
              !isHovered && "opacity-0 md:opacity-0 group-hover:opacity-100"
            )}
            aria-label="Delete task"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete the task "{todo.text}".
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              className="bg-destructive hover:bg-destructive/90"
              onClick={() => onDelete(todo.id)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}