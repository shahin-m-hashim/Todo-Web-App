import { useContext } from "react";
import TodoContext from "../contexts/TodoProvider";

const useTodo = () => {
  const { addTodo, deleteTodo, updateTodo, todoErrorRef } =
    useContext(TodoContext);

  const handleAddTodo = (nameInputRef, descInputRef) => {
    {
      if (!nameInputRef.current.value || !descInputRef.current.value) {
        todoErrorRef.current.classList.remove("hidden");
        return;
      }

      const newTodo = {
        id: Date.now(),
        name: nameInputRef.current.value,
        description: descInputRef.current.value,
      };
      addTodo(newTodo);
      nameInputRef.current.value = "";
      descInputRef.current.value = "";

      todoErrorRef.current.classList.add("hidden");
    }
  };

  const handleDeleteTodo = (id) => deleteTodo(id);

  const handleUpdateTodo = (id, newTodoNameRef, newTodoDescRef) => {
    const newName = newTodoNameRef.current.value;
    const newDesc = newTodoDescRef.current.value;

    if (!newName || !newDesc) {
      todoErrorRef.current.classList.remove("hidden");
      return false;
    }

    updateTodo(id, newName, newDesc);
    newTodoNameRef.current.value = "";
    newTodoDescRef.current.value = "";
    todoErrorRef.current.classList.add("hidden");
    return true;
  };

  return { handleAddTodo, handleDeleteTodo, handleUpdateTodo };
};

export default useTodo;
