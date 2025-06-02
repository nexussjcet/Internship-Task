import { TodoList } from '@/components/todo/TodoList';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <TodoList />
      </main>
    </div>
  );
}
