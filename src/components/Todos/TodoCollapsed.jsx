/* eslint-disable react/prop-types */
import { cn } from "../../utils/cn";
import DoneTodoBtn from "./TodoCollapsed/DoneTodoBtn";
import EditTodoBtn from "./TodoCollapsed/EditTodoBtn";
import ExpandTodoBtn from "./TodoCollapsed/ExpandTodoBtn";
import DeleteTodoBtn from "./TodoCollapsed/DeleteTodoBtn";

export default function TodoCollapsed({
  todo,
  isEditing,
  isExpanded,
  setIsEditing,
  toggleExpanding,
}) {
  return (
    <div className="relative flex items-center justify-between h-12 pl-5 border-b-2">
      <div className="py-3 text-sm md:text-base">
        <span>{todo.name}</span>
        <span>&nbsp;&nbsp;</span>
        {todo.completed ? (
          <span className="px-2 text-xs text-white bg-green-400 rounded-full"></span>
        ) : (
          <span className="px-2 text-xs text-white bg-red-400 rounded-full"></span>
        )}
      </div>
      <div className="flex flex-shrink-0 h-full">
        <div className="flex items-center px-3 bg-blue-400">
          <ExpandTodoBtn
            isEditing={isEditing}
            isExpanded={isExpanded}
            toggleExpanding={toggleExpanding}
          />
        </div>

        <div
          className={cn(
            "flex items-center px-3",
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
