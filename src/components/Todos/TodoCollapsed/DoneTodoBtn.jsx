import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

/* eslint-disable react/prop-types */
export default function DoneTodoBtn({ completed, todoId }) {
  const { doneTodo } = useContext(TodoContext);

  return (
    <button type="button" disabled={completed} onClick={() => doneTodo(todoId)}>
      <img
        alt="done-todo"
        src="assets/icons/done.png"
        className="size-4 xs:size-6"
      />
    </button>
  );
}
