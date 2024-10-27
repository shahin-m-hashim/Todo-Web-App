import { useRef } from "react";
import AddTodoBtn from "./AddTodoBtn";

export default function AddTodoForm() {
  const nameInputRef = useRef();
  const descInputRef = useRef();

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
          <AddTodoBtn
            nameInputRef={nameInputRef}
            descInputRef={descInputRef}
            styles="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          />
        </div>
      </div>
    </>
  );
}
