import { useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, X, Trash2, Pencil, Play, Pause } from 'lucide-react';
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
import { Todo } from '@/lib/types';
import { useTodoStore } from '@/lib/todo-store';
import { toast } from 'sonner';

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, editTodo, setActiveTask, clearActiveTask } = useTodoStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleToggle = () => {
    toggleTodo(todo.id);
    toast.info(todo.completed ? 'Task marked as active' : 'Task completed');
  };

  const handleDelete = () => {
    if (todo.isCurrentlyActive) {
      clearActiveTask();
    }
    deleteTodo(todo.id);
    toast.success('Task deleted');
    setIsOpen(false);
  };

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim()) {
        editTodo(todo.id, editText.trim());
        toast.success('Task updated');
      }
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleActiveToggle = () => {
    if (todo.isCurrentlyActive) {
      clearActiveTask();
      toast.info('Task no longer active');
    } else {
      setActiveTask(todo.id);
      toast.success('Task set as currently active');
    }
  };

  return (
    <div className={cn(
      "flex items-center justify-between p-4 rounded-lg border transition-all",
      "hover:shadow-sm group",
      todo.isCurrentlyActive && "border-primary/50 bg-primary/5",
      todo.completed ? "bg-muted/50 border-muted" : "bg-card border-border"
    )}>
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={handleToggle}
          id={`todo-${todo.id}`}
          className={cn(
            "transition-all",
            todo.completed && "animate-pulse-once"
          )}
        />
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1"
            autoFocus
          />
        ) : (
          <label 
            htmlFor={`todo-${todo.id}`}
            className={cn(
              "text-sm cursor-pointer flex-1 truncate",
              todo.completed && "text-muted-foreground line-through"
            )}
          >
            {todo.text}
          </label>
        )}
      </div>

      <div className="flex gap-2">
        {isEditing ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEdit}
              disabled={!editText.trim()}
            >
              <Check className="h-4 w-4 text-green-500" />
              <span className="sr-only">Save</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCancel}
            >
              <X className="h-4 w-4 text-red-500" />
              <span className="sr-only">Cancel</span>
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleActiveToggle}
              className={cn(
                "transition-opacity",
                todo.isCurrentlyActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
            >
              {todo.isCurrentlyActive ? (
                <Pause className="h-4 w-4 text-primary" />
              ) : (
                <Play className="h-4 w-4 text-primary" />
              )}
              <span className="sr-only">
                {todo.isCurrentlyActive ? 'Stop working' : 'Start working'}
              </span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsEditing(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Pencil className="h-4 w-4 text-blue-500" />
              <span className="sr-only">Edit</span>
            </Button>

            <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
              <AlertDialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Trash2 className="h-4 w-4 text-destructive" />
                  <span className="sr-only">Delete</span>
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Task</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this task? This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;