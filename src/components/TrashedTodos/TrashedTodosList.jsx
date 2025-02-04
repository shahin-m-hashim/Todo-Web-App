/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import TrashedTodo from "./TrashedTodo";
import TodoContext from "../../providers/TodosProvider";
import { memo, useContext, useEffect, useState } from "react";

const TrashedTodosList = memo(function TrashedTodosList({
  setShowTrashedTodos,
}) {
  const { dispatch, clearAllOptions } = useContext(TodoContext);

  const [trashedTodos, setTrashedTodos] = useState(
    JSON.parse(localStorage.getItem("trashedTodos")) || []
  );

  const restoreAllTodos = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    localStorage.setItem("todos", JSON.stringify([...todos, ...trashedTodos]));
    localStorage.setItem("trashedTodos", JSON.stringify([]));

    dispatch({ type: "RESTORE_ALL_TODOS", payload: trashedTodos });
    setTrashedTodos([]);
  };

  const deleteAllTrashedTodos = () => {
    if (confirm("All Todos will be permanently deleted, OK ?")) {
      localStorage.setItem("trashedTodos", JSON.stringify([]));
      setTrashedTodos([]);
    }
  };

  useEffect(() => clearAllOptions(), []);

  return (
    <>
      <div className="flex flex-wrap gap-2 px-5 py-3 text-xs border-b-2 xs:text-base bg-slate-400 ">
        <button
          type="button"
          onClick={restoreAllTodos}
          disabled={trashedTodos.length === 0}
          className="flex-1 p-1 bg-blue-300 hover:bg-blue-400"
        >
          Restore All
        </button>
        <button
          type="button"
          onClick={deleteAllTrashedTodos}
          disabled={trashedTodos.length === 0}
          className="flex-1 p-1 bg-red-400 hover:bg-red-500"
        >
          Delete All
        </button>
        <button
          type="button"
          onClick={() => setShowTrashedTodos(false)}
          className="flex-1 p-1 bg-yellow-300 hover:bg-yellow-400"
        >
          Go Back
        </button>
      </div>

      {trashedTodos && (
        <div
          id="trashedTodos"
          className={cn(
            "h-full overflow-auto",
            trashedTodos.length === 0 && "flex justify-center items-center"
          )}
        >
          {trashedTodos.length > 0 ? (
            trashedTodos.map((todo) => (
              <TrashedTodo
                todo={todo}
                key={todo.id}
                trashedTodos={trashedTodos}
                setTrashedTodos={setTrashedTodos}
              />
            ))
          ) : (
            <div className="text-2xl text-gray-500">
              No todos are trashed !!!
            </div>
          )}
        </div>
      )}
    </>
  );
});

export default TrashedTodosList;
