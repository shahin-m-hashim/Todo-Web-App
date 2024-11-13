/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cn } from "../../../utils/cn";
import TodoContext from "../../../providers/TodosProvider";

export default function ClearSelectionBtn({ bg, bgHover, color }) {
  const { clearSelection } = useContext(TodoContext);

  return (
    <button
      type="button"
      onClick={clearSelection}
      className={cn(
        "p-2  lg:px-4 lg:py-2",
        bg ? bg : "bg-red-600",
        color ? color : "text-white",
        bgHover ? bgHover : "hover:bg-red-500"
      )}
    >
      Clear Selection
    </button>
  );
}
