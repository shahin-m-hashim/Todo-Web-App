import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function FilterTodosByCompletedBtn() {
  const { filterByCompleted } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={filterByCompleted}
      className="text-xs text-white btn bg-btn hover:bg-btn-hover"
    >
      Completed
    </button>
  );
}
