import { Trash2 } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { useTodo, type Todo } from '@/context/TodoContext';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo } = useTodo();

  return (
    <div className="flex items-center justify-between p-4 bg-card rounded-lg shadow-sm border border-border/50 group animate-in fade-in-0 zoom-in-95 duration-200">
      <div className="flex items-center space-x-3 flex-1">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          className="transition-all data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={cn(
            "flex-1 cursor-pointer transition-all duration-200",
            todo.completed && "text-muted-foreground line-through"
          )}
        >
          {todo.text}
        </label>
      </div>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Trash2 size={16} />
            <span className="sr-only">Delete task</span>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete this task.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteTodo(todo.id)}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}