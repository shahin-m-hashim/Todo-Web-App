import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function FilterTodosByPendingBtn() {
  const { filterByPending } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={filterByPending}
      className="text-xs text-white btn bg-btn hover:bg-btn-hover"
    >
      Pending
    </button>
  );
}
