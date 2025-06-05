import { Plus, Loader2, AlertCircle } from 'lucide-react';
import { useState, KeyboardEvent, useRef, useEffect } from 'react';

interface TodoFormProps {
  onSubmit: (text: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

export function TodoForm({ onSubmit, isLoading = false, error: externalError }: TodoFormProps) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (externalError) {
      setError(externalError);
    }
  }, [externalError]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError('Task cannot be empty');
      return;
    }
    
    setError(null);
    setIsSubmitting(true);
    
    try {
      await onSubmit(trimmedInput);
      setInput('');
    } catch (err) {
      setError('Failed to add task. Please try again.');
      console.error('Error submitting todo:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setInput('');
      setError(null);
      inputRef.current?.blur();
    } else if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError(null);
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="What needs to be done?"
            aria-label="Add a new task"
            aria-invalid={!!error}
            disabled={isSubmitting || isLoading}
            className={`w-full px-4 py-3 pl-12 pr-12 text-base rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
              error 
                ? 'border-destructive focus:ring-destructive/50' 
                : 'border-input focus:ring-primary/50 focus:border-transparent'
            }`}
          />
          <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={`absolute left-3 top-1/2 -translate-y-1/2 transition-colors ${
              isSubmitting || isLoading 
                ? 'text-muted-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
            aria-label={isSubmitting ? 'Adding task...' : 'Add task'}
          >
            {isSubmitting || isLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>
      
      {error && (
        <p className="mt-2 text-sm text-destructive flex items-center">
          <AlertCircle className="w-4 h-4 mr-1.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
