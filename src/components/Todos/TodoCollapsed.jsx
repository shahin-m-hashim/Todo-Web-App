/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";
import DoneTodoBtn from "./TodoCollapsed/DoneTodoBtn";
import EditTodoBtn from "./TodoCollapsed/EditTodoBtn";
import ExpandTodoBtn from "./TodoCollapsed/ExpandTodoBtn";
import DeleteTodoBtn from "./TodoCollapsed/DeleteTodoBtn";
import SelectTodoInput from "./TodoCollapsed/SelectTodoInput";

export default function TodoCollapsed({
  todo,
  isEditing,
  isExpanded,
  setIsEditing,
  toggleExpanding,
}) {
  return (
    <div className="relative flex items-center h-10 border-b-2 xs:h-12">
      <SelectTodoInput id={todo.id} />

      <div className="flex items-center gap-2 py-3 text-sm md:text-base">
        <span className="ml-3 text-sm xs:text-base">{todo.name}</span>
        {todo.completed ? (
          <div className="bg-green-400 rounded-full size-3" />
        ) : (
          <div className="bg-red-400 rounded-full size-3" />
        )}
      </div>

      <div className="flex h-full ml-auto">
        <div className="flex items-center px-1.5 bg-blue-400 xs:px-3">
          <ExpandTodoBtn
            isEditing={isEditing}
            isExpanded={isExpanded}
            toggleExpanding={toggleExpanding}
          />
        </div>

        <div
          className={cn(
            "flex items-center px-1.5 xs:px-3",
            todo.completed ? "bg-gray-300" : "bg-green-400"
          )}
        >
          {isExpanded && !todo.completed ? (
            <EditTodoBtn
              todoId={todo.id}
              isEditing={isEditing}
              completed={todo.completed}
              setIsEditing={setIsEditing}
            />
          ) : (
            <DoneTodoBtn completed={todo.completed} todoId={todo.id} />
          )}
        </div>

        <DeleteTodoBtn isEditing={isEditing} todoId={todo.id} />
      </div>
    </div>
  );
}
