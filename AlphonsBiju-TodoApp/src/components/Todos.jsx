import Button from "./Button";
import { useState } from "react";

export default function Todos() {
  // Start with empty arrays instead of initial todos
  const [PendingTodos, changePendingTodos] = useState([]);
  const [CompletedTodos, changeCompletedTodos] = useState([]);
  const [todoText, changeTodoText] = useState('');
  const [error, changeError] = useState('');

  // Function to update todo text
  const handleInputChange = (event) => {
    if (event.target.value.length > 1) {
      changeError('');
    }
    changeTodoText(event.target.value);
  };

  // To add todo in pending todos
  const addTodo = () => {
    if (todoText.length > 2) {
      changePendingTodos([...PendingTodos, todoText]);
      changeTodoText('');
    } else {
      changeError('Todo Text Should be 3 characters');
    }
  };

  // Handle cancel button
  const handleCancel = () => {
    changeTodoText('');
  };

  // Clear todo sections
  const clearTodos = (section) => {
    if (section === 'pending') {
      changePendingTodos([]);
    } else {
      changeCompletedTodos([]);
    }
  };

  const completeTodo = (index) => {
    const element = PendingTodos[index];
    changeCompletedTodos([...CompletedTodos, element]);
    const currentPendingItems = [...PendingTodos];
    currentPendingItems.splice(index, 1);
    changePendingTodos(currentPendingItems);
  };

  const deleteTodo = (index, from) => {
    if (from === 'pending') {
      const currentPendingItems = [...PendingTodos];
      currentPendingItems.splice(index, 1);
      changePendingTodos(currentPendingItems);
    } else {
      const currentCompletedItems = [...CompletedTodos];
      currentCompletedItems.splice(index, 1);
      changeCompletedTodos(currentCompletedItems);
    }
  };

  return (
    <>
      <div className="todo-form">
        <h1>Add Todo</h1>
        <input
          type="text"
          placeholder="Enter Your Todo !"
          value={todoText}
          onChange={handleInputChange}
        />
        <span className="error">{error}</span>
        <div className="todo-form-buttons">
          <Button class="add-btn" handleClick={addTodo} btnText="Add Todo" />
          <Button class="cancel-btn" handleClick={handleCancel} btnText="Clear All" />
        </div>
      </div>

      <div className="todo-section">
        <div className="todo-left">
          <h1>
            Pending Todos ({PendingTodos.length}){' '}
            <Button class="add-btn" handleClick={() => clearTodos('pending')} btnText="clear" />
          </h1>
          {PendingTodos.map((todo, index) => (
            <div key={index} className="todo-item">
              <div className="todo-item-text">
                ({index + 1}) {todo}
              </div>
              <div className="todo-form-buttons">
                <Button class="complete-btn" btnText="Complete" handleClick={() => completeTodo(index)} />
                <Button class="delete-btn" btnText="Delete" handleClick={() => deleteTodo(index, 'pending')} />
              </div>
            </div>
          ))}
        </div>

        <div className="todo-right">
          <h1>
            Completed Todos ({CompletedTodos.length}){' '}
            <Button class="add-btn" handleClick={() => clearTodos('completed')} btnText="clear" />
          </h1>
          {CompletedTodos.map((todo, index) => (
            <div key={index} className="todo-item">
              <div className="todo-item-text">
                ({index + 1}) {todo}
              </div>
              <div className="todo-form-buttons">
                <Button class="delete-btn" btnText="Delete" handleClick={() => deleteTodo(index, 'completed')} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
