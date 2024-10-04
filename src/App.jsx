import "./index.css";

import TodoList from "./components/Todo/TodoList";
import TodosError from "./components/Todo/TodosError";
import AddTodoForm from "./components/Todo/AddTodoForm";
import LoadingSpinner from "./components/LoadingSpinner";
import { TodoProvider } from "./providers/TodosProvider";

function App() {
  return (
    <LoadingSpinner>
      <div className="p-2">
        <h1 className="text-center">Todo Web App</h1>
        <TodoProvider>
          <TodoList />
          <AddTodoForm />
          <TodosError />
        </TodoProvider>
      </div>
    </LoadingSpinner>
  );
}

export default App;
