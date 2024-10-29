import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function ShowAddTodoFormBtn() {
  const { showAddTodoForm } = useContext(UserInterfaceContext);

  return (
    <button type="button" className="md:hidden" onClick={showAddTodoForm}>
      <img
        className="h-8"
        alt="show-add-todo-form"
        src="assets/icons/add.png"
      />
    </button>
  );
}
