import { useContext } from "react";
import { cn } from "../../../../utils/cn";
import UserInterfaceContext from "../../../../providers/UserInterfaceProvider";

export default function DescriptionInput() {
  const { addTodoFormInputs, handleAddTodoFormInputChange } =
    useContext(UserInterfaceContext);

  return (
    <>
      <textarea
        rows={3}
        placeholder="Description"
        className={cn(
          "p-2 border-2 rounded-md",
          addTodoFormInputs.description.error && "border-red-500"
        )}
        value={addTodoFormInputs.description.value}
        onChange={(e) =>
          handleAddTodoFormInputChange("description", e.target.value)
        }
      />
      <p className="px-1 mb-3 text-red-500">
        {addTodoFormInputs.description.error}
      </p>
    </>
  );
}
