/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import TodoCollapsed from "./TodoCollapsed";
import UpdateTodoForm from "./Form/UpdateTodoForm";
import TodoDetails from "./TodoCollapsed/TodoDetails";
import { useEffect, useState } from "react";

export default function Todo({ todo, addEditingTodo, removeEditingTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

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
        toggleExpanding={() => setIsExpanded((prev) => !prev)}
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
