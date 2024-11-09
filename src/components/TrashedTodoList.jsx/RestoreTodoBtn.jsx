import { useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

/* eslint-disable react/prop-types */
export default function RestoreTodoBtn({
  todo,
  trashedTodos,
  setTrashedTodos,
}) {
  const { dispatch } = useContext(TodoContext);

  const restoreTodo = () => {
    localStorage.setItem(
      "trashedTodos",
      JSON.stringify(
        trashedTodos.filter((trashedTodo) => trashedTodo.id !== todo.id)
      )
    );

    setTrashedTodos(
      trashedTodos.filter((trashedTodo) => trashedTodo.id !== todo.id)
    );

    dispatch({ type: "RESTORE_TODO", payload: todo });
  };

  return (
    <button type="button" className="flex items-center px-3 bg-blue-400">
      <img
        className="h-6"
        alt="delete-todo"
        onClick={restoreTodo}
        src="assets/icons/restore.png"
      />
    </button>
  );
}
