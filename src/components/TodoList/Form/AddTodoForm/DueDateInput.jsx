import { useContext } from "react";
import { cn } from "../../../../utils/cn";
import UserInterfaceContext from "../../../../providers/UserInterfaceProvider";

export default function DueDateInput() {
  const { addTodoFormInputs, handleAddTodoFormInputChange } =
    useContext(UserInterfaceContext);

  return (
    <>
      <input
        type="date"
        className={cn(
          "p-2 border-2 rounded-md",
          addTodoFormInputs.dueDate.error && "border-red-500"
        )}
        value={addTodoFormInputs.dueDate.value}
        onChange={(e) =>
          handleAddTodoFormInputChange("dueDate", e.target.value)
        }
      />
      <p className="px-1 mb-3 text-red-500">
        {addTodoFormInputs.dueDate.error}
      </p>
    </>
  );
}
