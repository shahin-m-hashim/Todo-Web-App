import { cn } from "../../../utils/cn";
import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SortByDueDateBtn() {
  const { options, toggleDueDateSort } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={toggleDueDateSort}
      style={{
        paddingRight: options.currentSort.type === "dueDate" && 0,
      }}
      className={cn(
        "text-xs text-white btn",
        options.currentSort.type === "dueDate"
          ? "bg-gray-500 hover:bg-gray-500"
          : "bg-btn hover:bg-btn-hover"
      )}
    >
      <span>Due Date</span>

      {options.currentSort.type === "dueDate" &&
        (options.currentSort.order === "ASC" ? (
          <span style={{ fontWeight: "bolder" }} className="mx-2 text-red-500">
            &uArr;
          </span>
        ) : (
          <span style={{ fontWeight: "bolder" }} className="mx-2 text-red-500">
            &dArr;
          </span>
        ))}
    </button>
  );
}
