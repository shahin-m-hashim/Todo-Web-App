import { useContext, useRef } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SortByDueDateBtn() {
  let sortOrder = useRef("ASC");
  const { dispatch } = useContext(TodoContext);

  const toggleSortingDueDate = () => {
    if (sortOrder.current === "ASC") {
      dispatch({ type: "SORT_BY_DUE_DATE_ASC" });
      sortOrder.current = "DESC";
    } else {
      dispatch({ type: "SORT_BY_DUE_DATE_DESC" });
      sortOrder.current = "ASC";
    }
  };

  return (
    <button
      type="button"
      onClick={toggleSortingDueDate}
      className="text-xs text-white btn bg-btn hover:bg-btn-hover"
    >
      Due Date
    </button>
  );
}
