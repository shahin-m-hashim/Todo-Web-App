import { useRef } from "react";
import useTodo from "../../hooks/useTodo";

export default function AddTodoForm() {
  const nameInputRef = useRef();
  const descInputRef = useRef();
  const { handleAddTodo } = useTodo();

  return (
    <>
      <div className="flex items-center justify-center p-2">
        <div className="flex items-center justify-center lg:w-1/2 gap-2 p-2 bg-zinc-500">
          <input
            type="text"
            ref={nameInputRef}
            className="flex-1 p-2 border-2 border-blue-500 rounded"
            placeholder="Enter todo name"
          />
          <input
            type="text"
            ref={descInputRef}
            className="flex-1 p-2 border-2 border-blue-500 rounded"
            placeholder="Enter todo description"
          />
          <button
            onClick={() => handleAddTodo(nameInputRef, descInputRef)}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}
