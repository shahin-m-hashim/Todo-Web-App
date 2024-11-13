import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function DeleteSelectedTodos() {
  const { options, deleteSelectedTodos } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={deleteSelectedTodos}
      disabled={!options.isSelecting}
      className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500"
    >
      Delete Selected
    </button>
  );
}
