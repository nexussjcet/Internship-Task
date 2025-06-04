import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import TodoApp from '@/components/todo/TodoApp';

function App() {
  // Update the document title
  useEffect(() => {
    document.title = 'TaskTrack - Simple Task Manager';
    
    // Find the favicon link element
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      // Update the favicon
      favicon.setAttribute('href', 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%234f46e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>');
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="tasktrack-theme">
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <TodoApp />
      </div>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;