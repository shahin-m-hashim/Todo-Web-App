/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import TodoCollapsed from "./TodoCollapsed";
import UpdateTodoForm from "./Form/UpdateTodoForm";
import TodoDetails from "./TodoCollapsed/TodoDetails";
import { useCallback, useEffect, useState } from "react";

export default function Todo({ todo, addEditingTodo, removeEditingTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanding = useCallback(() => {
    if (isEditing) {
      alert("Please cancel or complete pending edits first !!!");
    } else {
      setIsExpanded((prev) => !prev);
    }
  }, [isEditing]);

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
        toggleExpanding={toggleExpanding}
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
