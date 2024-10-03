import { useContext } from "react";
import TodoContext from "../contexts/TodoProvider";

const useTodo = () => {
  const { addTodo, updateTodo, removeTodo, todoErrorRef } =
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

  const handleDeleteTodo = (id) => removeTodo(id);

  const handleUpdateTodo = (id, newTodoName, newTodoDesc) => {
    if (!newTodoName || !newTodoDesc) {
      todoErrorRef.current.classList.remove("hidden");
      return false;
    }
    updateTodo(id, newTodoName, newTodoDesc);
    todoErrorRef.current.classList.add("hidden");
    return true;
  };

  return {
    todoErrorRef,
    handleAddTodo,
    handleDeleteTodo,
    handleUpdateTodo,
  };
};

export default useTodo;
