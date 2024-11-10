/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import TrashedTodo from "./TrashedTodo";
import { memo, useContext, useState } from "react";
import TodoContext from "../../providers/TodosProvider";

const TrashedTodosList = memo(function TrashedTodosList({
  setShowTrashedTodos,
}) {
  console.log("TrashedTodosList rendered");

  const { dispatch } = useContext(TodoContext);

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

  return (
    <>
      <div className="flex flex-wrap gap-2 px-5 py-3 border-b-2 bg-slate-400 ">
        <button
          type="button"
          onClick={restoreAllTodos}
          disabled={trashedTodos.length === 0}
          className="p-1 text-black bg-blue-300 min-w-[6.25em] hover:bg-blue-400"
        >
          Restore All
        </button>
        <button
          type="button"
          onClick={deleteAllTrashedTodos}
          disabled={trashedTodos.length === 0}
          className=" text-black bg-red-400  min-w-[6.25em] hover:bg-red-500"
        >
          Delete All
        </button>
        <button
          type="button"
          onClick={() => setShowTrashedTodos(false)}
          className="p-1 text-black bg-yellow-300 min-w-[6.25em] hover:bg-yellow-400"
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
