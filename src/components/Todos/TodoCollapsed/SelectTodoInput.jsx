/* eslint-disable react/prop-types */
import { useContext, useEffect, useRef } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SelectTodoInput({ id }) {
  const ref = useRef();
  const { options, handleSelect } = useContext(TodoContext);

  useEffect(() => {
    if (ref.current && !options.isSelecting) {
      ref.current.checked = false;
    }
  }, [options.isSelecting]);

  return (
    <div className="flex items-center h-full px-3 bg-[#85d6f0]">
      <input
        ref={ref}
        type="checkbox"
        className="size-5"
        id={"checkbox" + id}
        onChange={() => handleSelect(id)}
      />
    </div>
  );
}
