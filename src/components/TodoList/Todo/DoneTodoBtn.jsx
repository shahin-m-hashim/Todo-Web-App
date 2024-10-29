import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

/* eslint-disable react/prop-types */
export default function DoneTodoBtn({ completed, todoId }) {
  const { doneTodo } = useContext(TodoContext);

  return (
    <button disabled={completed} onClick={() => doneTodo(todoId)}>
      <img alt="done-todo" className="h-6" src="assets/icons/done.png" />
    </button>
  );
}
