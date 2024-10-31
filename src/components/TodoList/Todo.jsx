/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import TodoCollapsed from "./TodoCollapsed";
import UpdateTodoForm from "./Form/UpdateTodoForm";
import TodoDetails from "./TodoCollapsed/TodoDetails";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanding = () => {
    if (isEditing) {
      alert("Please cancel or complete pending edits first !!!");
      return;
    }
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isEditing) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isEditing]);

  return (
    <div>
      <TodoCollapsed
        todo={todo}
        isEditing={isEditing}
        isExpanded={isExpanded}
        setIsEditing={setIsEditing}
        toggleExpanding={() => toggleExpanding(todo.id)}
      />

      {isEditing ? (
        <div className="p-5 overflow-hidden border-b-2 bg-slate-300">
          <UpdateTodoForm todo={todo} setIsEditing={setIsEditing} />
        </div>
      ) : (
        <TodoDetails isExpanded={isExpanded} todo={todo} />
      )}
    </div>
  );
}
