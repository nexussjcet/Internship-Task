import React, { useState, useEffect } from "react";
import { Trash2, Check, Edit3, Save, X } from "lucide-react";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTask, ...todos]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim() === "") return;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText.trim() } : todo
      )
    );
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const handleEditKeyPress = (e, id) => {
    if (e.key === "Enter") {
      saveEdit(id);
    } else if (e.key === "Escape") {
      cancelEdit();
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const completedCount = todos.filter(todo => todo.completed).length;
  const activeCount = todos.length - completedCount;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
             ToDo Master
          </h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-100">
          <div className="flex md:flex-row flex-col gap-3">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="What needs to be done?"
              className="flex-1 border-2 border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
            />
            <button
              onClick={addTask}
              disabled={task.trim() === ""}
              className="md:w-24 h-12 flex-col flex item-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-1 py-1 text-sm rounded-lg hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 font- shadow-md hover:shadow-lg w-full"
            >
              Add
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-4 mb-6 border border-gray-100">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-6 text-sm text-gray-600">
              <span className="font-medium">Total: {todos.length}</span>
              <span className="font-medium text-blue-600">Active: {activeCount}</span>
              <span className="font-medium text-green-600">Done: {completedCount}</span>
            </div>
            <div className="flex gap-2">
              {["all", "active", "completed"].map((filterType) => (
                <button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-all duration-200 ${
                    filter === filterType
                      ? "bg-blue-500 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </button>
              ))}
              {completedCount > 0 && (
                <button
                  onClick={clearCompleted}
                  className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors duration-200"
                >
                  Clear Completed
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {filteredTodos.length === 0 ? (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100">
              <div className="text-6xl mb-4">
                {filter === "completed" ? "🎉" : "📝"}
              </div>
              <p className="text-gray-500 text-lg">
                {filter === "completed"
                  ? "No completed tasks yet"
                  : filter === "active"
                  ? "No active tasks"
                  : "Your todo list is empty"}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {filter === "all" && "Add a task above to get started!"}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div
                key={todo.id}
                className={`bg-white rounded-xl shadow-md border border-gray-100 p-4 transition-all duration-300 hover:shadow-lg ${
                  todo.completed ? "opacity-75" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${
                      todo.completed
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-300 hover:border-green-400"
                    }`}
                  >
                    {todo.completed ? <Check size={16} /> : null}
                  </button>

                  {editingId === todo.id ? (
                    <div className="flex-1 flex gap-2">
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyPress={(e) => handleEditKeyPress(e, todo.id)}
                        className="flex-1 border border-gray-300 px-3 py-1 rounded focus:outline-none focus:border-blue-500"
                        autoFocus
                      />
                      <button
                        onClick={() => saveEdit(todo.id)}
                        className="text-green-500 hover:text-green-700 p-1"
                      >
                        <Save size={16} />
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="text-gray-500 hover:text-gray-700 p-1"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <span
                        className={`flex-1 cursor-pointer transition-all duration-200 ${
                          todo.completed
                            ? "line-through text-gray-400"
                            : "text-gray-800 hover:text-blue-600"
                        }`}
                        onClick={() => toggleComplete(todo.id)}
                      >
                        {todo.text}
                      </span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => startEditing(todo.id, todo.text)}
                          className="text-blue-500 hover:text-blue-700 p-1 rounded transition-colors duration-200"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => deleteTask(todo.id)}
                          className="text-red-500 hover:text-red-700 p-1 rounded transition-colors duration-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
