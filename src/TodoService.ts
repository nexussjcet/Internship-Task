
import TodoTypes from "./todo";


const LOCAL_STORAGE_KEY = 'todos';

const TodoService = {
  getTodos: (): TodoTypes[] => {
    const todosStr = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todosStr ? JSON.parse(todosStr) : [];
  },

  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = { id: todos.length + 1, text, completed: false };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return newTodo;
  },

   toggleTodoCompleted: (id: number): TodoTypes | undefined => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return updatedTodos.find((todo) => todo.id === id);
  },


  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;