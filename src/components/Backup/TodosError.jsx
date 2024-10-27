import { useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

export default function TodosError() {
  const { todoErrorRef } = useContext(TodoContext);

  return (
    <p
      ref={todoErrorRef}
      className="text-2xl font-semibold text-center text-red-500"
    ></p>
  );
}
