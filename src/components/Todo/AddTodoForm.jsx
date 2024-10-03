import { useContext } from "react";
import useTodo from "../../hooks/useTodo";
import TodoContext from "../../contexts/TodoProvider";

export default function AddTodoForm() {
  const { handleAddTodo } = useTodo();

  const { nameInputRef, descInputRef, addBtnDisabled } =
    useContext(TodoContext);

  return (
    <>
      <div className="flex items-center justify-center p-2">
        <div className="flex items-center justify-center gap-2 p-2 lg:w-1/2 bg-zinc-500">
          <input
            type="text"
            ref={nameInputRef}
            placeholder="Enter todo name"
            className="flex-1 p-2 border-2 border-blue-500 rounded"
          />
          <input
            type="text"
            ref={descInputRef}
            placeholder="Enter todo description"
            className="flex-1 p-2 border-2 border-blue-500 rounded"
          />
          <button
            disabled={addBtnDisabled}
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
