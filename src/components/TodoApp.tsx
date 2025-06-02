import { useTodos } from '@/hooks/useTodos';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { ThemeToggle } from './ThemeToggle';

export function TodoApp() {
  const {
    todos,
    filter,
    stats,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="container max-w-2xl mx-auto px-4 py-8 md:py-16 flex-1">
        <header className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Task Master
          </h1>
          <ThemeToggle />
        </header>

        <main>
          <TodoForm onAddTodo={addTodo} />
          <TodoList
            todos={todos}
            filter={filter}
            stats={stats}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onFilterChange={setFilter}
            onClearCompleted={clearCompleted}
          />
        </main>

        <footer className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Drag tasks to reorder • Double-click to edit
          </p>
        </footer>
      </div>
    </div>
  );
}