import { useContext } from "react";
import UserInterfaceContext from "../../../../providers/UserInterfaceProvider";

export default function CloseAddTodoFormBtn() {
  const { closeAddTodoForm } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      onClick={closeAddTodoForm}
      className="absolute top-0 right-0 z-40 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
    >
      <img alt="close" className="h-5" src="assets/icons/close.svg" />
    </button>
  );
}
