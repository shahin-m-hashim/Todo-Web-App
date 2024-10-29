import { useContext } from "react";
import { cn } from "../../../utils/cn";
import NameInput from "./AddTodoForm/NameInput";
import DueDateInput from "./AddTodoForm/DueDateInput";
import DescriptionInput from "./AddTodoForm/DescriptionInput";
import CloseAddTodoFormBtn from "./AddTodoForm/CloseAddTodoFormBtn";
import ResetAddTodoFormBtn from "./AddTodoForm/ResetAddTodoFormBtn";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function AddTodoForm() {
  const { UIStates, handleAddTodo } = useContext(UserInterfaceContext);

  return (
    <form
      className={cn(
        "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
        UIStates.showAddTodoForm
          ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
          : "hidden md:flex"
      )}
      onSubmit={handleAddTodo}
    >
      <div className="relative flex flex-col">
        <CloseAddTodoFormBtn />

        <h1 className="mb-3 text-lg">Add a todo</h1>
        <NameInput />
        <DescriptionInput />
        <DueDateInput />
        <button
          type="submit"
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Add
        </button>
      </div>
      <ResetAddTodoFormBtn />
    </form>
  );
}
