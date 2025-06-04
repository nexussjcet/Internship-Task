import { useEffect, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { useTodos } from './hooks/useTodos';
import { Clock } from 'lucide-react';
import './index.css';

export function App() {
  const { todos, filter, setFilter, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    // Load Space Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      document.head.removeChild(link);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#f0e8d9] py-8" style={{ fontFamily: "'Space Mono', monospace" }}>
      <div className="container mx-auto max-w-lg px-4">
        {/* App Title */}
        <h1 className="text-3xl font-bold text-center mb-6 tracking-tight">
          {/* <span className="bg-black text-white px-2 py-1 rounded-md">Task</span>
          <span className="ml-1">App</span> */}
        </h1>
        
        {/* Window */}
        <div className="mb-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200 border-2 border-black rounded-t-lg">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
              <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
              <div className="w-3 h-3 bg-white border border-black rounded-full"></div>
            </div>
            <div className="text-sm font-bold bg-white px-2 py-0.5 border border-black rounded-sm">Todo.exe</div>
            <div className="text-xs border border-black bg-white px-1.5">?</div>
          </div>
          
          {/* Main Content */}
          <div className="p-6 bg-gradient-to-br from-[#b2e1e0] to-[#9fd4d3] border-x-2 border-b-2 border-black rounded-b-lg">
            <div className="px-4 py-3 bg-[#e9e3d4] border-2 border-black rounded-md mb-6">
              <TodoForm addTodo={addTodo} />
            </div>
            
            <div className="px-4 py-3 bg-[#e9e3d4] border-2 border-black rounded-md mb-6">
              <TodoFilter filter={filter} setFilter={setFilter} />
            </div>
            
            <div className="px-4 py-3 bg-[#e9e3d4] border-2 border-black rounded-md min-h-[220px]">
              <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            </div>
            
            <div className="mt-6 bg-black text-white text-sm text-center px-3 py-2 rounded-md border-2 border-black">
              <p>{todos.length} task(s) - {todos.filter(t => t.completed).length} completed</p>
            </div>
          </div>
        </div>
        
        {/* Status Bar */}
        <div className="flex justify-between bg-gray-200 px-4 py-2 border-2 border-black rounded-md text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 border border-black rounded-full mr-2"></div>
            System Ready
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
