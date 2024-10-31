/* eslint-disable react/prop-types */
import { cn } from "../../../../utils/cn";

export default function NameInput({
  addTodoFormInputs,
  handleAddTodoFormInputChange,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className={cn(
          "p-2 border-2 rounded-md",
          addTodoFormInputs.name.error && "border-red-500"
        )}
        value={addTodoFormInputs.name.value}
        onChange={(e) => handleAddTodoFormInputChange("name", e.target.value)}
      />
      <p className="px-1 mb-3 text-red-500">{addTodoFormInputs.name.error}</p>
    </>
  );
}
