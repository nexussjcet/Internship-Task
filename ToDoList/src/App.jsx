import { useState } from "react"

function ToDolist(){
  const [tasks, setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()){
      setTasks([...tasks, {text: newTask, completed: false}]);
      setNewTask('');
    }
  }
const toggleTaskCompletion = (index) => {
  const updatedTask = tasks.map((task, i) => 
    i=== index ? { ...task, completed: !task.completed} :task);
  setTasks(updatedTask);
}
const deleteTask = (index) => {
  const updatedTask = tasks.filter((_, i) => i !== index);
  setTasks(updatedTask)
}
 return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg"style={{ background: "#f5e9da" }}>
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button
          onClick={addTask}
          className="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span
              className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
              style={{ cursor: "pointer" }}
            >
              {task.text}
            </span> <button
        onClick={() => toggleTaskCompletion(index)}
        className={`ml-2 p-1 rounded ${task.completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
      >
        {task.completed ? "Mark Incomplete" : "Complete"}
      </button>

              <button
              onClick={() => deleteTask(index)}
              className="ml-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDolist; 