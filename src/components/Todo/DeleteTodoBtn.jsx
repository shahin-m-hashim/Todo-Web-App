/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { deleteTodo } from "../../backend/todo";
import { SpinnerContext } from "../LoadingSpinner";
import deleteIcon from "../../assets/icons/delete.svg";
import TodoContext from "../../providers/TodosProvider";

export default function DeleteTodoBtn({ id }) {
  const setShowSpinner = useContext(SpinnerContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const { removeTodo, handleError } = useContext(TodoContext);

  const handleDeleteTodo = async () => {
    try {
      setIsDeleting(true);
      setShowSpinner(true);
      await deleteTodo(id);
      removeTodo(id);
    } catch (e) {
      handleError(e);
    } finally {
      setIsDeleting(false);
      setShowSpinner(false);
    }
  };

  return (
    <button
      disabled={isDeleting}
      onClick={handleDeleteTodo}
      className="flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
    >
      <img src={deleteIcon} alt="delete-todo" className="size-5" />
    </button>
  );
}
