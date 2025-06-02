import { ThemeProvider } from '@/components/ui/theme-provider';
import { TodoApp } from '@/components/todo/TodoApp';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="todo-theme">
      <TodoApp />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;