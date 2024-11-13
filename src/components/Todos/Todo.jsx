/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import TodoCollapsed from "./TodoCollapsed";
import UpdateTodoForm from "./Forms/UpdateTodoForm";
import TodoDetails from "./TodoCollapsed/TodoDetails";
import { useContext, useEffect, useState } from "react";
import TodoContext from "../../providers/TodosProvider";

export default function Todo({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { hasEditingTodo, hasExpandedTodo } = useContext(TodoContext);

  useEffect(() => {
    if (isExpanded && isEditing) {
      if (!hasEditingTodo.current) {
        hasEditingTodo.current = todo.id;
      }
    } else if (hasEditingTodo.current === todo.id) {
      hasEditingTodo.current = false;
    }
  }, [isEditing]);

  useEffect(() => {
    if (isExpanded) {
      if (!hasExpandedTodo.current) {
        hasExpandedTodo.current = todo.id;
      }
    } else if (hasExpandedTodo.current === todo.id) {
      hasExpandedTodo.current = false;
    }
  }, [isExpanded]);

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
