import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function ShowAddTodoFormBtn() {
  const { todoUIStates, setTodoUIStates } = useContext(TodoContext);

  return (
    <button
      className="md:hidden"
      onClick={() =>
        setTodoUIStates({ ...todoUIStates, showAddTodoForm: true })
      }
    >
      <img
        className="h-8"
        alt="show-add-todo-form"
        src="assets/icons/add.png"
      />
    </button>
  );
}
