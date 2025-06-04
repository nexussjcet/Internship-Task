import { useEffect, useState } from 'react';
import { Check, Circle, CirclePlus, Filter, Terminal, Trash2 } from 'lucide-react';
import { nanoid } from 'nanoid';
import './index.css';
import { SparklesCore } from './components/SparklesCore';

// Todo type definition
type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
};

// Filter type
type FilterType = 'all' | 'active' | 'completed';

// Status message type
type StatusMessage = {
  id: string;
  text: string;
  type: 'success' | 'error' | 'info';
  isExiting?: boolean;
};

export function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [newTodoText, setNewTodoText] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [isLoading, setIsLoading] = useState(true);
  const [statusMessages, setStatusMessages] = useState<StatusMessage[]>([]);
  const [systemReady, setSystemReady] = useState(false);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Load Google Font
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Simulate loading for a smoother experience
    setTimeout(() => {
      addStatusMessage('VERIFYING CREDENTIALS...', 'info');
    }, 500);
    
    setTimeout(() => {
      addStatusMessage('INITIALIZING DATABASE...', 'info');
    }, 1200);
    
    setTimeout(() => {
      addStatusMessage('LOADING USER PROFILE...', 'info');
    }, 1900);
    
    setTimeout(() => {
      setSystemReady(true);
    }, 2600);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Add a status message with typing effect
  const addStatusMessage = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = nanoid();
    
    // Add the message with entrance animation class
    setStatusMessages(prev => [...prev, { id, text, type }]);
    
    // Remove the message after 3 seconds with exit animation
    setTimeout(() => {
      // Mark the message for removal animation
      setStatusMessages(prev => 
        prev.map(msg => msg.id === id ? { ...msg, isExiting: true } : msg)
      );
      
      // Actually remove after animation completes
      setTimeout(() => {
        setStatusMessages(prev => prev.filter(msg => msg.id !== id));
      }, 300);
    }, 3000);
  };

  // Add a new todo
  const addTodo = () => {
    if (newTodoText.trim() === '') return;
    
    const newTodo: Todo = {
      id: nanoid(),
      text: newTodoText.trim(),
      completed: false,
      createdAt: Date.now()
    };
    
    setTodos([...todos, newTodo]);
    setNewTodoText('');
    addStatusMessage('TASK ADDED SUCCESSFULLY', 'success');
  };

  // Toggle todo completion status
  const toggleTodo = (id: string) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          const newStatus = !todo.completed;
          addStatusMessage(newStatus ? 'TASK MARKED COMPLETE' : 'TASK MARKED ACTIVE', 'success');
          return { ...todo, completed: newStatus };
        }
        return todo;
      })
    );
  };

  // Delete a todo
  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
    addStatusMessage('TASK DELETED', 'info');
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo();
  };

  // Filter todos based on current filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true; // 'all' filter
  });
  
  // Get counts for the summary
  const totalCount = todos.length;
  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = totalCount - completedCount;

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex size-full flex-col items-center justify-center gap-4 p-8 text-center">
        <SparklesCore
          background="transparent"
          particleColor="#0f9"
          particleDensity={100}
          className="absolute inset-0"
        />
        <div className="terminal-frame p-8 border border-[#2a384a] bg-black bg-opacity-70 backdrop-blur-sm w-full max-w-md flex flex-col items-center relative z-10">
          <h1 className="text-4xl font-bold mb-8 text-white tracking-widest" style={{ fontFamily: 'Space Mono, monospace' }}>NOTION</h1>
          
          <div className="terminal-frame w-full p-px border border-[#2a384a] mb-6">
            <div className="bg-[#0a0f16] p-3 text-left">
              <p className="text-[#888] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>INPUT: USERNAME + PASSCODE</p>
            </div>
          </div>
          
          <div className="flex w-full gap-3 mb-6">
            <div className="terminal-frame flex-1 p-px border border-[#2a384a]">
              <div className="bg-[#0a0f16] p-3 text-left">
                <p className="text-[#a259ff] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>AYCAI</p>
              </div>
            </div>
            <div className="terminal-frame flex-1 p-px border border-[#2a384a]">
              <div className="bg-[#0a0f16] p-3 text-left">
                <p className="text-[#a259ff] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>• • • • • • • • •</p>
              </div>
            </div>
          </div>
          
          {statusMessages.map((msg, index) => (
            <div key={msg.id} className="terminal-frame w-full p-px border border-[#2a384a] mb-3">
              <div className="bg-[#0a0f16] p-3 flex justify-between items-center">
                <p className="text-[#888] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>{msg.text}</p>
                {systemReady && <p className="text-[#0f9] text-sm" style={{ fontFamily: 'Space Mono, monospace' }}>OK</p>}
              </div>
            </div>
          ))}
          
          {!statusMessages.length && (
            <div className="animate-pulse">
              <Terminal className="w-10 h-10 text-[#0f9]" style={{ animation: 'pulse-glow 2s infinite' }}/>
              <p className="text-[#888] mt-2 cursor-blink" style={{ fontFamily: 'Space Mono, monospace' }}>SYSTEM BOOTING...</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10 px-4 relative" style={{ fontFamily: 'Space Mono, monospace' }}>
      <SparklesCore
        background="transparent"
        particleColor="#0f9"
        particleDensity={100}
        className="absolute inset-0"
      />
      <div className="w-full max-w-lg terminal-frame p-6 border border-[#2a384a] bg-black bg-opacity-70 backdrop-blur-sm relative z-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-white tracking-widest">NOTION</h1>
          <p className="text-[#888]">TASK MANAGEMENT PROTOCOL v1.0</p>
          
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-3 py-1 terminal-button transition-all ${filter === 'all' ? 'bg-[#0f9] text-black font-bold' : 'bg-[#0a0f16] border border-[#2a384a] text-[#888]'}`}
              >
                ALL/{totalCount}
              </button>
              <button 
                onClick={() => setFilter('active')} 
                className={`px-3 py-1 terminal-button transition-all ${filter === 'active' ? 'bg-[#0f9] text-black font-bold' : 'bg-[#0a0f16] border border-[#2a384a] text-[#888]'}`}
              >
                ACTIVE/{activeCount}
              </button>
              <button 
                onClick={() => setFilter('completed')} 
                className={`px-3 py-1 terminal-button transition-all ${filter === 'completed' ? 'bg-[#0f9] text-black font-bold' : 'bg-[#0a0f16] border border-[#2a384a] text-[#888]'}`}
              >
                COMPLETE/{completedCount}
              </button>
            </div>
            <Filter size={18} className="text-[#888]" />
          </div>
        </header>
        
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-6">
          <input
            type="text"
            value={newTodoText}
            onChange={e => setNewTodoText(e.target.value)}
            placeholder="INPUT NEW TASK"
            className="flex-1 bg-[#0a0f16] border border-[#2a384a] px-4 py-3 text-[#a259ff] focus:outline-none focus:border-[#0f9] transition-all placeholder-[#444] cursor-blink"
            style={{ transition: "all 0.3s ease" }}
          />
          <button
            type="submit"
            className="bg-[#0a0f16] hover:bg-[#0f9] hover:text-black border border-[#2a384a] text-[#0f9] p-3 transition-all flex items-center justify-center terminal-button relative overflow-hidden"
            style={{ transition: "all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67)" }}
          >
            <CirclePlus size={20} className="transition-transform duration-200 hover:rotate-90" />
          </button>
        </form>
        
        {statusMessages.length > 0 && (
          <div className="terminal-frame p-px border border-[#2a384a] mb-6">
            <div className="bg-[#0a0f16] p-3">
              {statusMessages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex justify-between items-center mb-1 ${msg.isExiting ? 'status-message-exit' : 'status-message-enter'}`}
                >
                  <p className="text-[#888] text-sm typing-effect">&gt; {msg.text}</p>
                  <p className="text-[#0f9] text-sm" style={{ animation: 'pulse-glow 1.5s infinite' }}>OK</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {filteredTodos.length === 0 ? (
          <div className="terminal-frame p-px border border-[#2a384a]">
            <div className="bg-[#0a0f16] p-4 text-center">
              <p className="text-[#888]">
                {filter === 'all' 
                  ? "NO TASKS FOUND IN DATABASE (NO DATABASE FOUND)" 
                  : filter === 'active' 
                    ? "NO ACTIVE TASKS DETECTED" 
                    : "NO COMPLETED TASKS IN RECORDS"}
              </p>
            </div>
          </div>
        ) : (
          <ul className="space-y-2">
            {filteredTodos.map(todo => (
              <li 
                key={todo.id}
                className="terminal-frame p-px border border-[#2a384a] group hover:border-[#0f9] transition-all task-item"
              >
                <div className="bg-[#0a0f16] p-4 flex items-center justify-between hover:bg-[#101822] transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="text-[#0f9] hover:text-[#a259ff] transition-colors"
                    >
                      {todo.completed ? (
                        <Check className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
                      ) : (
                        <Circle className="w-5 h-5 transition-transform duration-200 hover:scale-110 hover:rotate-12" />
                      )}
                    </button>
                    <span className={`transition-all ${todo.completed ? 'text-[#666] line-through' : 'text-white'}`}>
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-[#666] hover:text-[#ff5277] opacity-0 group-hover:opacity-100 transition-all hover:rotate-12"
                    style={{ transition: "all 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67)" }}
                  >
                    <Trash2 size={18} className="hover:scale-110 transition-transform duration-200" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        
        {todos.length > 0 && (
          <div className="mt-6 text-sm text-[#888] flex justify-between items-center">
            <p>{activeCount} TASKS PENDING</p>
            {completedCount > 0 && (
              <button 
                onClick={() => {
                  setTodos(todos.filter(todo => !todo.completed));
                  addStatusMessage('COMPLETED TASKS PURGED', 'info');
                }}
                className="text-[#888] hover:text-[#ff5277] transition-colors"
              >
                PURGE COMPLETED
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
