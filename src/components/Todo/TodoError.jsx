import { useContext } from "react";
import TodoContext from "../../contexts/TodoProvider";

export default function TodoError() {
  const { todoErrorRef } = useContext(TodoContext);

  return (
    <p
      ref={todoErrorRef}
      className="hidden text-2xl font-semibold text-center text-red-500"
    >
      Invalid Inputs
    </p>
  );
}
