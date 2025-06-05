import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Trash2, Loader2, Pencil, Save, X } from 'lucide-react';
import { Todo } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  onEdit?: (id: string, newText: string) => Promise<void>;
  className?: string;
}

export function TodoItem({ todo, onToggle, onDelete, onEdit, className }: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when editing starts
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleToggle = async () => {
    if (isToggling || isEditing) return;
    setIsToggling(true);
    try {
      await onToggle(todo.id);
    } catch (error) {
      console.error('Failed to toggle todo:', error);
    } finally {
      setIsToggling(false);
    }
  };

  const handleDelete = async () => {
    if (isDeleting) return;
    setIsDeleting(true);
    try {
      await onDelete(todo.id);
    } catch (error) {
      console.error('Failed to delete todo:', error);
      setShowDeleteConfirm(false);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = () => {
    if (isEditing || !onEdit) return;
    setEditText(todo.text);
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    if (!onEdit || !editText.trim() || isSaving) return;
    
    const newText = editText.trim();
    if (newText === todo.text) {
      setIsEditing(false);
      return;
    }
    
    setIsSaving(true);
    try {
      await onEdit(todo.id, newText);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save todo:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      handleCancelEdit();
    }
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.2 }}
      className={cn('overflow-hidden', className)}
    >
      <div 
        className={cn(
          'px-4 py-3 hover:bg-muted/50 transition-colors flex items-center gap-3',
          todo.completed && 'opacity-80'
        )}
      >
        {/* Toggle complete button */}
        <button
          type="button"
          onClick={handleToggle}
          disabled={isToggling || isEditing}
          className={cn(
            'w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors',
            todo.completed
              ? 'bg-primary border-primary text-primary-foreground'
              : 'border-border hover:border-primary',
            (isToggling || isEditing) && 'opacity-50',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'
          )}
          aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
        >
          {isToggling ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : todo.completed ? (
            <Check className="w-3 h-3" />
          ) : null}
        </button>

        {/* Todo text or edit input */}
        {isEditing ? (
          <div className="flex-1 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isSaving}
              className="flex-1 bg-background border-b border-foreground/20 px-1 py-1 text-sm focus:outline-none focus:border-primary"
              aria-label="Edit todo"
            />
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleSaveEdit}
                disabled={isSaving || !editText.trim()}
                className="p-1 text-foreground/70 hover:text-primary transition-colors disabled:opacity-50"
                aria-label="Save changes"
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Save className="w-4 h-4" />
                )}
              </button>
              <button
                type="button"
                onClick={handleCancelEdit}
                disabled={isSaving}
                className="p-1 text-foreground/70 hover:text-destructive transition-colors"
                aria-label="Cancel editing"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <span
              className={cn(
                'flex-1 text-sm transition-colors break-words',
                todo.completed ? 'text-muted-foreground line-through' : 'text-foreground',
                'py-1' // Add padding for better tap target on mobile
              )}
              onClick={handleToggle}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleToggle()}
              aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.text}
            </span>
            
            <div className="flex items-center gap-1">
              {onEdit && (
                <button
                  type="button"
                  onClick={handleEdit}
                  disabled={isDeleting || isToggling}
                  className={cn(
                    'p-1.5 rounded-md text-muted-foreground hover:text-primary transition-colors',
                    (isDeleting || isToggling) && 'opacity-50',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'
                  )}
                  aria-label="Edit todo"
                >
                  <Pencil className="w-4 h-4" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(true)}
                disabled={isDeleting || isToggling || isEditing}
                className={cn(
                  'p-1.5 rounded-md text-muted-foreground hover:text-destructive transition-colors',
                  (isDeleting || isToggling || isEditing) && 'opacity-50',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-destructive/50'
                )}
                aria-label="Delete todo"
              >
                {isDeleting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Delete confirmation */}
      <AnimatePresence>
        {showDeleteConfirm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-destructive/5 px-4 py-2 flex flex-wrap items-center justify-between gap-2"
          >
            <span className="text-sm text-destructive">
              Are you sure you want to delete this todo?
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowDeleteConfirm(false)}
                className="text-xs px-3 py-1.5 rounded border border-border hover:bg-muted transition-colors"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-xs px-3 py-1.5 rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors flex items-center gap-1.5"
              >
                {isDeleting ? (
                  <Loader2 className="w-3 h-3 animate-spin" />
                ) : (
                  <Trash2 className="w-3 h-3" />
                )}
                <span>Delete</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}
