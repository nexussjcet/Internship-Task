import { useState, useEffect } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [filter, setFilter] = useState('all'); // all | active | completed
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('reflectify-tasks')) || [];
    setTasks(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('reflectify-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(),
        text: taskInput.trim(),
        completed: false,
      };
      setTasks([newTask, ...tasks]);
      setTaskInput('');
    }
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id
      ? { ...task, completed: !task.completed }
      : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const startEditing = (id, currentText) => {
    setEditingId(id);
    setEditingText(currentText);
  };

  const saveEdit = (id) => {
    setTasks(tasks.map(task => task.id === id
      ? { ...task, text: editingText }
      : task
    ));
    setEditingId(null);
    setEditingText('');
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'active' ? !task.completed :
    filter === 'completed' ? task.completed :
    true
  );

  return (
    <div className="p-4 max-w-3xl mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">📝 My To-Do List</h1>

      {/* Task Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          onClick={addTask}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-6">
        {['all', 'active', 'completed'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              filter === f ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-400">No tasks found.</p>
        ) : (
          filteredTasks.map(task => (
            <div
              key={task.id}
              className="flex items-center justify-between bg-white shadow p-3 rounded-lg"
            >
              <div className="flex items-center gap-3 w-full">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="h-5 w-5 accent-indigo-600"
                />

                {/* Task Text or Edit Input */}
                {editingId === task.id ? (
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    onBlur={() => saveEdit(task.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') saveEdit(task.id);
                    }}
                    autoFocus
                    className="flex-1 px-2 py-1 border rounded focus:outline-indigo-400"
                  />
                ) : (
                  <span
                    className={`flex-1 cursor-pointer ${
                      task.completed ? 'line-through text-gray-400' : ''
                    }`}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() =>
                    editingId === task.id ? saveEdit(task.id) : startEditing(task.id, task.text)
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  ✏️
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ToDoList;
