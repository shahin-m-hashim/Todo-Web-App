/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cn } from "../../utils/cn";
import DoneTodoBtn from "./Todo/DoneTodoBtn";
import EditTodoBtn from "./Todo/EditTodoBtn";
import ExpandTodoBtn from "./Todo/ExpandTodoBtn";
import DeleteTodoBtn from "./Todo/DeleteTodoBtn";
import UserInterfaceContext from "../../providers/UserInterfaceProvider";

export default function Todo({ todo }) {
  const { expandedTodo } = useContext(UserInterfaceContext);

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
          <ExpandTodoBtn todoId={todo.id} />
        </div>

        <div
          className={cn(
            "flex items-center px-3",
            todo.completed ? "bg-gray-300" : "bg-green-400"
          )}
        >
          {expandedTodo === todo.id && !todo.completed ? (
            <EditTodoBtn completed={todo.completed} todoId={todo.id} />
          ) : (
            <DoneTodoBtn completed={todo.completed} todoId={todo.id} />
          )}
        </div>

        <DeleteTodoBtn todoId={todo.id} />
      </div>
    </div>
  );
}
