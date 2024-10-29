import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function DeleteAllTodosBtn() {
  const { todos } = useContext(TodoContext);
  const { handleDeleteAllTodos } = useContext(UserInterfaceContext);

  return (
    todos && (
      <button
        type="button"
        disabled={!todos.length}
        onClick={handleDeleteAllTodos}
        className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500"
      >
        Delete All
      </button>
    )
  );
}
