import { useContext, useRef } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function SortTodosByNameBtn() {
  let sortOrder = useRef("ASC");
  const { dispatch } = useContext(TodoContext);

  const toggleSortingName = () => {
    if (sortOrder.current === "ASC") {
      dispatch({ type: "SORT_BY_NAME_ASC" });
      sortOrder.current = "DESC";
    } else {
      dispatch({ type: "SORT_BY_NAME_DESC" });
      sortOrder.current = "ASC";
    }
  };

  return (
    <button
      type="button"
      onClick={toggleSortingName}
      className="text-xs text-white btn bg-btn hover:bg-btn-hover"
    >
      Name
    </button>
  );
}
