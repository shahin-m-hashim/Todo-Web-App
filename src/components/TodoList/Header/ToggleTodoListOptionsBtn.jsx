import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function ToggleTodoListOptionsBtn() {
  const { toggleTodoListOptions } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      className="ml-2 mr-auto"
      onClick={toggleTodoListOptions}
    >
      <img alt="settings" className="h-6" src="assets/icons/hamburger.png" />
    </button>
  );
}
