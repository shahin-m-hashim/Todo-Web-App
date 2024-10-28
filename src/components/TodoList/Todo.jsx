/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cn } from "../../utils/cn";
import TodoContext from "../../providers/TodosProvider";

export default function Todo({ todo }) {
  const { todoUIStates, toggleExpand, doneTodo, toggleEdit, deleteTodo } =
    useContext(TodoContext);

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
          <button onClick={() => toggleExpand(todo.id)}>
            <img
              className="h-6"
              alt="expand-todo"
              src="assets/icons/expand-up.png"
              style={{
                transform:
                  todoUIStates.expandedTodo === todo.id
                    ? "rotate(180deg)"
                    : "rotate(0)",
                transition: "transform 0.3s linear 0.1s",
              }}
            />
          </button>
        </div>

        <div
          className={cn(
            "flex items-center px-3",
            todo.completed ? "bg-gray-300" : "bg-green-400"
          )}
        >
          {todoUIStates.expandedTodo === todo.id && !todo.completed ? (
            <button
              disabled={todo.completed}
              onClick={() => toggleEdit(todo.id)}
            >
              <img
                alt="edit-todo"
                className="h-6"
                src="assets/icons/edit.svg"
              />
            </button>
          ) : (
            <button disabled={todo.completed} onClick={() => doneTodo(todo.id)}>
              <img
                alt="done-todo"
                className="h-6"
                src="assets/icons/done.png"
              />
            </button>
          )}
        </div>

        <button
          onClick={() => deleteTodo(todo.id)}
          className="flex items-center px-3 bg-red-400"
        >
          <img
            className="h-6"
            alt="delete-todo"
            src="assets/icons/delete.svg"
          />
        </button>
      </div>
    </div>
  );
}
