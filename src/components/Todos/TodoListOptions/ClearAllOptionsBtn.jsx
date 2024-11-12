import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function ClearAllOptionsBtn() {
  const { clearAllOptions } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={clearAllOptions}
      className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500"
    >
      Clear All
    </button>
  );
}
