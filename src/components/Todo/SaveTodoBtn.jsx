/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { putTodo } from "../../backend/todo";
import { SpinnerContext } from "../LoadingSpinner";
import TodoContext from "../../providers/TodosProvider";
import validateTodoInputs from "../../utils/todoValidator";

export default function SaveTodoBtn({ id, newName, newDesc, setIsEditing }) {
  const [isSaving, setIsSaving] = useState(false);
  const setShowSpinner = useContext(SpinnerContext);
  const { updateTodo, handleError, todoErrorRef } = useContext(TodoContext);

  const handleUpdateTodo = async () => {
    try {
      if (validateTodoInputs(newName, newDesc)) {
        setIsSaving(true);
        setShowSpinner(true);

        await putTodo(id, newName, newDesc);
        updateTodo(id, newName, newDesc);
        setIsEditing(false);
        todoErrorRef.current.innerText = "";
      } else {
        todoErrorRef.current.innerText = "Invalid Inputs.";
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsSaving(false);
      setShowSpinner(false);
    }
  };

  return (
    <button
      disabled={isSaving}
      onClick={handleUpdateTodo}
      className="flex justify-center p-2 bg-green-500 border-2 border-red-700 cursor-pointer"
    >
      Save
    </button>
  );
}
