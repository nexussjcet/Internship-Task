import React, { useState } from 'react';
import TaskInput from './components/TaskInput'; 
import TaskItem from './components/TaskItem';
import Stats from './components/Stats'; // Assuming Stats is in the components folder

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'

  // Filtered tasks based on the selected filter
  const filteredTasks = toDoList.filter((task) => {
    if (filter === 'active') return !task.checked;
    if (filter === 'completed') return task.checked;
    return true;
  });

  const addTask = (task) => {
    const newTask = { taskName: task, checked: false };
    setToDoList([...toDoList, newTask]);
  };

  function deleteTask(deleteTaskName) {
    setToDoList(toDoList.filter((task) => task.taskName !== deleteTaskName));
  }

  function toggleCheck(taskName) {
    setToDoList((prevToDoList) =>
      prevToDoList.map((task) => 
        task.taskName === taskName ? { ...task, checked: !task.checked } : task
      )
    );
  }

  return (
    <>
      <div className="container">
        <h1>ToDo List</h1>

        <TaskInput addTask={addTask} />

        {/* Filter Buttons */}
        <div className="filters">
          <button type="button" className="filter-button" onClick={() => setFilter('all')}>All</button>
          <button type="button" className="filter-button" onClick={() => setFilter('active')}>Active</button>
          <button type="button" className="filter-button" onClick={() => setFilter('completed')}>Completed</button>
        </div>

        <div className="toDoList">
          <span>To do</span>
          <ul className="list-items">
            {filteredTasks.map((task, key) => (
              <TaskItem 
                task={task} 
                key={key} 
                deleteTask={deleteTask} 
                toggleCheck={toggleCheck} 
              />
            ))}
          </ul>

          {toDoList.length === 0 ? (
            <p className="notify">You are done!</p>
          ) : null}
        </div>
      </div>
      <Stats toDoList={toDoList} />
    </>
  );
}

export default App;