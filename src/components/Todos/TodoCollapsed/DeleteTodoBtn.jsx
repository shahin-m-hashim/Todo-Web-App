/* eslint-disable react/prop-types */

import { useContext } from "react";
import { cn } from "../../../utils/cn";
import TodoContext from "../../../providers/TodosProvider";

export default function DeleteTodoBtn({ todoId, isEditing }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <button
      type="button"
      disabled={isEditing}
      onClick={() => deleteTodo(todoId)}
      className={cn(
        "flex items-center px-1.5 xs:px-3 bg-red-400",
        isEditing && "cursor-not-allowed"
      )}
    >
      <img
        alt="delete-todo"
        className="size-4 xs:size-6"
        src="assets/icons/delete.svg"
      />
    </button>
  );
}
