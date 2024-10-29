import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function ToggleTodoListOptionsBtn() {
  const { todoUIStates, setTodoUIStates } = useContext(TodoContext);

  return (
    <button
      type="button"
      className="ml-2 mr-auto"
      onClick={() =>
        setTodoUIStates({
          ...todoUIStates,
          showTodoListOptions: !todoUIStates.showTodoListOptions,
        })
      }
    >
      <img alt="settings" className="h-6" src="assets/icons/hamburger.png" />
    </button>
  );
}
