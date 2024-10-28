import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function TodoDetails() {
  const { todoUIStates, todo } = useContext(TodoContext);

  return (
    <div
      className="overflow-hidden border-b-2 bg-slate-300"
      style={{
        maxHeight: todoUIStates.expandedTodo === todo.id ? "2000px" : "0",
        padding:
          todoUIStates.expandedTodo === todo.id
            ? "1.25rem"
            : "0 1.25rem 0 1.25rem",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col justify-between gap-3 mb-3 md:flex-row">
        <h4 className="text-lg font-semibold ">{todo.name}</h4>
        <div>
          <p>
            <span className="font-semibold text-blue-500">Created:&nbsp;</span>
            <span>{todo.created}</span>
          </p>
          {!todo.completed && (
            <p>
              <span className="font-semibold text-red-500">Due:&nbsp;</span>
              <span>{todo.due}</span>
            </p>
          )}
        </div>
      </div>
      <h5 className="mb-1 text-lg font-bold underline underline-offset-4">
        Description
      </h5>
      <p>{todo.description}</p>
    </div>
  );
}
