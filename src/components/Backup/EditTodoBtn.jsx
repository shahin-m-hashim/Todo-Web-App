/* eslint-disable react/prop-types */
import editIcon from "../../assets/icons/edit.svg";

export default function EditTodoBtn({ setIsEditing }) {
  return (
    <button
      onClick={() => setIsEditing(true)}
      className="flex justify-center p-2 bg-blue-500 border-2 border-red-700 cursor-pointer"
    >
      <img src={editIcon} alt="edit-todo" className="size-5" />
    </button>
  );
}
