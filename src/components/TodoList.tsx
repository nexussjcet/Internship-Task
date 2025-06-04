import React, { useState } from "react";
import TodoService from "../TodoService";
import TodoTypes from "../todo";
import TodoForm from "./TodoForm";
import "../CSS/TodoList.css";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getTodos());

  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id: number) => {
    TodoService.toggleTodoCompleted(id);
    setTodos(TodoService.getTodos());
  };

  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <div className="items" key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              className="checkbox-red"
            />
            <span className={todo.completed ? "line-through text-red-muted" : "text-red-primary"}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)} className="btn-red-delete">
              <RiDeleteBin5Fill />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
