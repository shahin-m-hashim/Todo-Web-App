/* eslint-disable react/prop-types */

import { useContext } from "react";
import cancelIcon from "../../assets/icons/cancel.svg";
import TodoContext from "../../providers/TodosProvider";

export default function CancelTodoEditBtn({ setIsEditing }) {
  const { todoErrorRef } = useContext(TodoContext);

  return (
    <button
      onClick={() => {
        setIsEditing(false);
        todoErrorRef.current.innerText = "";
      }}
      className="flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
    >
      <img src={cancelIcon} alt="cancel-todo" className="size-5" />
    </button>
  );
}
