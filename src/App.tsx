import { TodoList } from '@/components/todo/TodoList';
import { ThemeToggle } from './components/ui/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <TodoList />
      </div>
    </div>
  );
}
