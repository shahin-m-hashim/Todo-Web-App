import "./index.css";

import TodoList from "./components/Todo/TodoList";
import { TodoProvider } from "./contexts/TodoProvider";
import AddTodoForm from "./components/Todo/AddTodoForm";
import LoadingSpinner from "./components/LoadingSpinner";
import TodoInputsError from "./components/Todo/TodoInputsError";

function App() {
  return (
    <LoadingSpinner>
      <div className="p-2">
        <h1 className="text-center">Todo Web App</h1>
        <TodoProvider>
          <TodoList />
          <AddTodoForm />
          <TodoInputsError />
        </TodoProvider>
      </div>
    </LoadingSpinner>
  );
}

export default App;
