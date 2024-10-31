import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function DeleteAllTodosBtn() {
  const { todos, deleteAllTodos } = useContext(TodoContext);

  return (
    todos && (
      <button
        type="button"
        disabled={!todos.length}
        onClick={deleteAllTodos}
        className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500"
      >
        Delete All
      </button>
    )
  );
}
