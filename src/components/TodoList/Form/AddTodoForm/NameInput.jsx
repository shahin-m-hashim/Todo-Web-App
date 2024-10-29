import { useContext } from "react";
import { cn } from "../../../../utils/cn";
import UserInterfaceContext from "../../../../providers/UserInterfaceProvider";

export default function NameInput() {
  const { UIStates, handleAddTodoFormInputChange } =
    useContext(UserInterfaceContext);

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        className={cn(
          "p-2 border-2 rounded-md",
          UIStates.addTodoFormInputs.name.error && "border-red-500"
        )}
        value={UIStates.addTodoFormInputs.name.value}
        onChange={(e) => handleAddTodoFormInputChange("name", e.target.value)}
      />
      <p className="px-1 mb-3 text-red-500">
        {UIStates.addTodoFormInputs.name.error}
      </p>
    </>
  );
}
