/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";
import { cn } from "../../../utils/cn";

export default function DeleteTodoBtn({ todoId, isEditing }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <button
      type="button"
      disabled={isEditing}
      onClick={() => deleteTodo(todoId)}
      className={cn(
        "flex items-center px-3 bg-red-400",
        isEditing && "cursor-not-allowed"
      )}
    >
      <img className="h-6" alt="delete-todo" src="assets/icons/delete.svg" />
    </button>
  );
}
