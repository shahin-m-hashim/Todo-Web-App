import { useContext } from "react";
import { cn } from "../../../utils/cn";
import TodoContext from "../../../providers/TodosProvider";

export default function FilterTodosByPendingBtn() {
  const { options, filterByPending } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={filterByPending}
      disabled={options.currentFilter === "pending"}
      className={cn(
        "text-xs text-white btn",
        options.currentFilter === "pending"
          ? "bg-gray-500 hover:bg-gray-500"
          : "bg-btn hover:bg-btn-hover"
      )}
    >
      Pending
    </button>
  );
}
