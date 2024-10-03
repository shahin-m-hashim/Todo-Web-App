/* eslint-disable react/prop-types */

import { useState } from "react";
import SaveTodoBtn from "./SaveTodoBtn";
import useTodo from "../../hooks/useTodo";
import CancelTodoEditBtn from "./CancelTodoEditBtn";

export default function EditTodoForm({ id, name, description, setIsEditing }) {
  const { todoErrorRef, handleUpdateTodo } = useTodo();

  const [inputs, setInputs] = useState({
    name,
    description,
  });

  return (
    <>
      <input
        type="text"
        value={inputs.name}
        placeholder="Enter todo name"
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
      />
      <input
        type="text"
        value={inputs.description}
        placeholder="Enter todo description"
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        onChange={(e) => setInputs({ ...inputs, description: e.target.value })}
      />
      <SaveTodoBtn
        id={id}
        newName={inputs.name}
        setIsEditing={setIsEditing}
        newDesc={inputs.description}
        handleUpdateTodo={handleUpdateTodo}
      />

      <CancelTodoEditBtn
        setIsEditing={setIsEditing}
        todoErrorRef={todoErrorRef}
      />
    </>
  );
}
