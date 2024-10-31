/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import TodoCollapsed from "./TodoCollapsed";
import UpdateTodoForm from "./Form/UpdateTodoForm";
import TodoDetails from "./TodoCollapsed/TodoDetails";

export default function Todo({ todo, addEditingTodo, removeEditingTodo }) {
  console.log("Todo rendered: " + todo.id);

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
    if (isEditing) {
      addEditingTodo(todo.id);
    } else {
      removeEditingTodo(todo.id);
    }
  }, [isEditing]);

  return (
    <div className="todo">
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
