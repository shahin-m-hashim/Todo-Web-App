import { useContext } from "react";
import { cn } from "../../../utils/cn";
import TodoContext from "../../../providers/TodosProvider";

export default function FilterTodosByCompletedBtn() {
  const { options, filterByCompleted } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={filterByCompleted}
      disabled={options.currentFilter === "completed"}
      className={cn(
        "text-xs text-white btn",
        options.currentFilter === "completed"
          ? "bg-gray-500 hover:bg-gray-500"
          : "bg-btn hover:bg-btn-hover"
      )}
    >
      Completed
    </button>
  );
}
