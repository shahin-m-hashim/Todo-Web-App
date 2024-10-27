/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import { postTodo } from "../../backend/todo";
import { SpinnerContext } from "../LoadingSpinner";
import TodoContext from "../../providers/TodosProvider";
import validateTodoInputs from "../../utils/todoValidator";

export default function AddTodoBtn({ nameInputRef, descInputRef, styles }) {
  const [isAdding, setIsAdding] = useState(false);
  const setShowSpinner = useContext(SpinnerContext);
  const { setTodos, todoErrorRef, handleError } = useContext(TodoContext);

  const handleAddTodo = async () => {
    try {
      const name = nameInputRef.current.value;
      const description = descInputRef.current.value;

      if (validateTodoInputs(name, description)) {
        setIsAdding(true);
        setShowSpinner(true);

        const newTodo = { id: Date.now(), name, description };

        const { data } = await postTodo(newTodo);

        nameInputRef.current.value = "";
        descInputRef.current.value = "";
        todoErrorRef.current.innerText = "";

        setTodos(data);
      } else {
        todoErrorRef.current.innerText = "Invalid Inputs.";
      }
    } catch (e) {
      handleError(e);
    } finally {
      setIsAdding(false);
      setShowSpinner(false);
    }
  };

  return (
    <button className={styles} disabled={isAdding} onClick={handleAddTodo}>
      Add Todo
    </button>
  );
}
