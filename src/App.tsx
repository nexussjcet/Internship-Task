import TodoList from "./components/TodoList";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="logoside">
          <h1>What To Do</h1>
        </div>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
