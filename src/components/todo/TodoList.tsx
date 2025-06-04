import { AnimatePresence, motion } from 'framer-motion';
import TodoItem from './TodoItem';
import { Todo } from '@/lib/types';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TodoListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodoListProps) {
  if (todos.length === 0) {
    return (
      <div className="py-8 text-center text-muted-foreground">
        <p>No tasks here yet</p>
        <p className="text-sm">Add a task to get started</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[300px] pr-4">
      <AnimatePresence initial={false}>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <motion.li
              key={todo.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              transition={{ duration: 0.2 }}
            >
              <TodoItem todo={todo} />
            </motion.li>
          ))}
        </ul>
      </AnimatePresence>
    </ScrollArea>
  );
}

export default TodoList;