import React, { useState, useEffect } from "react"
import "./Todo.css"
import Button from "./button/button.jsx"

function Todo() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
    });
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    function handleChange(event) {
        setNewTask(event.target.value)
    }

    function add() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask.trim()]);
            setNewTask("");
        }
    }

    function remove(index) {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    function up(index) {
        if (index > 0) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
                return updatedTasks;
            });
        }
    }

    function down(index) {
        if (index < tasks.length - 1) {
            setTasks(prevTasks => {
                const updatedTasks = [...prevTasks];
                [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
                return updatedTasks;
            });
        }
    }

    function deleteAll() {
        setTasks([]);
    }

    return (
        <div id="todo">
            <h1>Todo</h1>
            <form onSubmit={(e) => { e.preventDefault(); add(); }}>
                <input type="text" placeholder="Add a new task" value={newTask} onChange={handleChange}/>  
                <Button text="Add" buttonText="Add" onClick={add}/>
            </form>
            <Button text="Delete All" buttonText="Delete All" onClick={deleteAll} className="delete-all"/>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span id="tasktext">{task}</span>
                        <button className="remove" onClick={() => remove(index)}>🗑️</button>
                        <button className="up" onClick={() => up(index)}>⬆️</button>
                        <button className="down" onClick={() => down(index)}>⬇️</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Todo;