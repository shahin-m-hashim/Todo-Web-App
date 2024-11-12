import { useContext } from "react";
import { cn } from "../../../utils/cn";
import TodoContext from "../../../providers/TodosProvider";

export default function SortTodosByNameBtn() {
  const { options, toggleNameSort } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={toggleNameSort}
      style={{
        paddingRight: options.currentSort.type === "name" && 0,
      }}
      className={cn(
        "text-xs text-white btn",
        options.currentSort.type === "name"
          ? "bg-gray-500 hover:bg-gray-500"
          : "bg-btn hover:bg-btn-hover"
      )}
    >
      <span>Name</span>

      {options.currentSort.type === "name" &&
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
