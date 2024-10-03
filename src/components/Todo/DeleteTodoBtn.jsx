/* eslint-disable react/prop-types */
import useTodo from "../../hooks/useTodo";
import deleteIcon from "../../assets/icons/delete.svg";

export default function DeleteTodoBtn({ id }) {
  const { handleDeleteTodo } = useTodo();

  return (
    <button
      onClick={() => handleDeleteTodo(id)}
      className="flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
    >
      <img src={deleteIcon} alt="delete-todo" className="size-5" />
    </button>
  );
}
