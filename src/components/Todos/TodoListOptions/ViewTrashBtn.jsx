/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function ViewTrashBtn({ setShowTrashedTodos }) {
  const { editingTodos } = useContext(TodoContext);

  const handleClick = () => {
    if (editingTodos.current.size > 0) {
      alert("Please cancel or complete pending edits first !!!");
    } else {
      setShowTrashedTodos(true);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="p-2 text-black bg-yellow-300 lg:px-4 lg:py-2 hover:bg-yellow-400"
    >
      View Trash
    </button>
  );
}
