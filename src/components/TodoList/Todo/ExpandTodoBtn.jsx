/* eslint-disable react/prop-types */

import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function ExpandTodoBtn({ todoId }) {
  const { expandedTodo, toggleExpand } = useContext(UserInterfaceContext);

  return (
    <button type="button" onClick={() => toggleExpand(todoId)}>
      <img
        className="h-6"
        alt="expand-todo"
        src="assets/icons/expand-up.png"
        style={{
          transform: expandedTodo === todoId ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.3s linear 0.1s",
        }}
      />
    </button>
  );
}
