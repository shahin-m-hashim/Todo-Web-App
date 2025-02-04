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

    localStorage.setItem(
      "todos",
      JSON.stringify([...JSON.parse(localStorage.getItem("todos")), todo])
    );

    setTrashedTodos(
      trashedTodos.filter((trashedTodo) => trashedTodo.id !== todo.id)
    );

    dispatch({ type: "RESTORE_TODO", payload: todo });
  };

  return (
    <button type="button" className="flex items-center px-3 bg-blue-400">
      <img
        onClick={restoreTodo}
        alt="restore-trashed-todo"
        className="size-4 xs:size-6"
        src="assets/icons/restore.png"
      />
    </button>
  );
}
