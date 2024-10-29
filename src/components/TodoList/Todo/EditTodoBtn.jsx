/* eslint-disable react/prop-types */
import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function EditTodoBtn({ completed, todoId }) {
  const { toggleEdit } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      disabled={completed}
      onClick={() => toggleEdit(todoId)}
    >
      <img alt="edit-todo" className="h-6" src="assets/icons/edit.svg" />
    </button>
  );
}
