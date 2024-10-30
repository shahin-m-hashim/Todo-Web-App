import { useContext } from "react";
import UserInterfaceContext from "../../../../providers/UserInterfaceProvider";

export default function ResetAddTodoFormBtn() {
  const { resetAddTodoForm } = useContext(UserInterfaceContext);

  return (
    <button
      type="reset"
      onClick={resetAddTodoForm}
      className="text-white btn bg-btn-hover hover:bg-btn"
    >
      Reset
    </button>
  );
}
