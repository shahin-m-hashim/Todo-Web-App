/* eslint-disable react/prop-types */

import { cn } from "../../../../utils/cn";

export default function DueDateInput({
  addTodoFormInputs,
  handleAddTodoFormInputChange,
}) {
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
