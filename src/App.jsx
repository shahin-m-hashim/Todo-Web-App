import { useCallback, useContext, useState } from "react";
import ThemeContext from "./providers/ThemeProvider";
import TodosList from "./components/Todos/TodosList";
import AddTodoForm from "./components/Todos/Forms/AddTodoForm";
import TodoListHeader from "./components/Todos/TodoListHeader";
import TodoListOptions from "./components/Todos/TodoListOptions";
import TrashedTodosList from "./components/TrashedTodos/TrashedTodosList";

function App() {
  const { theme } = useContext(ThemeContext);

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showTrashedTodos, setShowTrashedTodos] = useState(false);
  const [showTodoListOptions, setShowTodoListOptions] = useState(true);

  const toggleShowTodoListOptions = useCallback(() => {
    if (!showTrashedTodos) {
      setShowTodoListOptions((prev) => !prev);
    }
  }, [showTrashedTodos]);

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
            toggleShowTodoListOptions={toggleShowTodoListOptions}
          />
          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] relative">
            <div className="flex flex-col md:border-r-2 border-r-gray-300 h-[75vh]">
              {showTrashedTodos ? (
                <TrashedTodosList setShowTrashedTodos={setShowTrashedTodos} />
              ) : (
                <>
                  <TodoListOptions
                    showTodoListOptions={showTodoListOptions}
                    setShowTrashedTodos={setShowTrashedTodos}
                  />
                  <TodosList />
                </>
              )}
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
