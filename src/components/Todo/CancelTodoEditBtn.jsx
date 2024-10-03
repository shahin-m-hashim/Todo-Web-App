/* eslint-disable react/prop-types */

import cancelIcon from "../../assets/icons/cancel.svg";

export default function CancelTodoEditBtn({ setIsEditing, todoErrorRef }) {
  return (
    <button
      onClick={() => {
        setIsEditing(false);
        todoErrorRef.current.classList.add("hidden");
      }}
      className="flex justify-center p-2 bg-red-500 border-2 border-red-700 cursor-pointer"
    >
      <img src={cancelIcon} alt="cancel-todo" className="size-5" />
    </button>
  );
}
