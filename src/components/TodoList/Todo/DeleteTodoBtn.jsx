/* eslint-disable react/prop-types */
import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function DeleteTodoBtn({ todoId }) {
  const { handleDeleteTodo } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      onClick={() => handleDeleteTodo(todoId)}
      className="flex items-center px-3 bg-red-400"
    >
      <img className="h-6" alt="delete-todo" src="assets/icons/delete.svg" />
    </button>
  );
}
