import "./index.css";
import ThemeContext from "./providers/ThemeProvider";
import TodoList from "./components/TodoList/TodoList";
import { useCallback, useContext, useState } from "react";
import AddTodoForm from "./components/TodoList/Form/AddTodoForm";
import TodoListHeader from "./components/TodoList/TodoListHeader";
import TodoListOptions from "./components/TodoList/TodoListOptions";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showTodoListOptions, setShowTodoListOptions] = useState(true);

  const toggleTodoListOptions = useCallback(
    () => setShowTodoListOptions((prev) => !prev),
    []
  );

  return (
    <main className={`app theme-${theme} bg-color`}>
      <div className="absolute inset-0 z-10 hidden backdrop-blur-sm"></div>
      <section className="h-full p-5 md:mx-16">
        <header className="mb-5">
          <h1 className="text-4xl font-semibold text-center text-color">
            TODO WEB APP
          </h1>
        </header>
        <div className="bg-white border-2 border-gray-100 ">
          <TodoListHeader
            setShowAddTodoForm={setShowAddTodoForm}
            toggleTodoListOptions={toggleTodoListOptions}
          />
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] relative">
            <div className="flex flex-col md:border-r-2 border-r-gray-300 h-[75vh]">
              <TodoListOptions showTodoListOptions={showTodoListOptions} />
              <TodoList />
            </div>
            <AddTodoForm
              showAddTodoForm={showAddTodoForm}
              setShowAddTodoForm={setShowAddTodoForm}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
