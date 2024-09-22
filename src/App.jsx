import "./index.css";
import TodoList from "./components/Todo/TodoList";
import AddTodoForm from "./components/Todo/AddTodoForm";
import { TodoProvider } from "./contexts/TodoProvider";
import TodoError from "./components/Todo/TodoError";

function App() {
  return (
    <div className="p-2">
      <h1 className="text-center">Todo Web App</h1>
      <TodoProvider>
        <TodoList />
        <AddTodoForm />
        <TodoError />
      </TodoProvider>
    </div>
  );
}

export default App;
