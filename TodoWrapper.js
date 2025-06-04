import React, { useState } from 'react';
import { TodoForm } from './Todolist1';
import { Todo } from './Todolist1';
import { EditTodoForm } from './EditTodolist1';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    setTodos([...todos, { id: Date.now(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isEditing: true } : todo
    ));
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, task, isEditing: false } : todo
    ));
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};
