export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date; // Optional field for tracking when a todo was last updated
}

export type FilterType = 'all' | 'active' | 'completed';

// Type guard to check if an object is a valid Todo
export function isTodo(todo: unknown): todo is Todo {
  return (
    typeof todo === 'object' &&
    todo !== null &&
    'id' in todo &&
    'text' in todo &&
    'completed' in todo &&
    'createdAt' in todo &&
    typeof (todo as Todo).id === 'string' &&
    typeof (todo as Todo).text === 'string' &&
    typeof (todo as Todo).completed === 'boolean' &&
    (todo as Todo).createdAt instanceof Date
  );
}
