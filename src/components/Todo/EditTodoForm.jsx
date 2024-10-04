/* eslint-disable react/prop-types */

import { useState } from "react";
import SaveTodoBtn from "./SaveTodoBtn";
import CancelTodoEditBtn from "./CancelTodoEditBtn";

export default function EditTodoForm({ id, name, description, setIsEditing }) {
  const [inputs, setInputs] = useState({
    newName: name,
    newDesc: description,
  });

  return (
    <>
      <input
        type="text"
        value={inputs.newName}
        placeholder="Enter todo name"
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        onChange={(e) => setInputs({ ...inputs, newName: e.target.value })}
      />
      <input
        type="text"
        value={inputs.newDesc}
        placeholder="Enter todo description"
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        onChange={(e) => setInputs({ ...inputs, newDesc: e.target.value })}
      />
      <SaveTodoBtn
        id={id}
        newName={inputs.newName}
        newDesc={inputs.newDesc}
        setIsEditing={setIsEditing}
      />

      <CancelTodoEditBtn setIsEditing={setIsEditing} />
    </>
  );
}
