import { useContext } from "react";
import UserInterfaceContext from "../../../providers/UserInterfaceProvider";

export default function ShowAddTodoFormBtn() {
  const { setShowAddTodoForm } = useContext(UserInterfaceContext);

  return (
    <button
      type="button"
      className="md:hidden"
      onClick={() => setShowAddTodoForm(true)}
    >
      <img
        className="h-8"
        alt="show-add-todo-form"
        src="assets/icons/add.png"
      />
    </button>
  );
}
