/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function DeleteTodoBtn({ todoId }) {
  const { deleteTodo } = useContext(TodoContext);

  return (
    <button
      onClick={() => deleteTodo(todoId)}
      className="flex items-center px-3 bg-red-400"
    >
      <img className="h-6" alt="delete-todo" src="assets/icons/delete.svg" />
    </button>
  );
}
