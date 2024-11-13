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
    <input
      ref={ref}
      type="checkbox"
      id={"checkbox" + id}
      onChange={() => handleSelect(id)}
      className="absolute transform scale-150 top-5"
    />
  );
}
