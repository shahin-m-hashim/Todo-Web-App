/* eslint-disable react/prop-types */
import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function EditTodoBtn({ completed, todoId }) {
  const { toggleEdit } = useContext(TodoContext);

  return (
    <button disabled={completed} onClick={() => toggleEdit(todoId)}>
      <img alt="edit-todo" className="h-6" src="assets/icons/edit.svg" />
    </button>
  );
}
