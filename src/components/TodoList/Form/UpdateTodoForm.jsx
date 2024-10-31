/* eslint-disable react/prop-types */
import { cn } from "../../../utils/cn";
import { validateField } from "../../../utils/todo";
import TodoContext from "../../../providers/TodosProvider";
import { useContext, useEffect, useMemo, useRef, useState } from "react";

export default function UpdateTodoForm({ todo, setIsEditing }) {
  const disableUpdating = useRef(true);
  const { updateTodo } = useContext(TodoContext);

  const initialUpdateTodoForm = useMemo(
    () => ({
      name: {
        value: todo.name,
        error: null,
      },
      description: {
        value: todo.description,
        error: null,
      },
      dueDate: {
        value: todo.dueDate.split("/").reverse().join("-"),
        error: null,
      },
    }),
    [todo]
  );

  const [updateTodoFormInputs, setUpdateTodoFormInputs] = useState(
    initialUpdateTodoForm
  );

  const handleChange = (field, value) => {
    const error = validateField(field, value);

    setUpdateTodoFormInputs((prevInputs) => ({
      ...prevInputs,
      [field]: { value, error },
    }));
  };

  useEffect(() => {
    disableUpdating.current = !Object.values(updateTodoFormInputs).every(
      (input) => input.error === null && input.value != ""
    );
  }, [updateTodoFormInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disableUpdating.current) {
      const updatedTodo = {
        ...todo,
        name: updateTodoFormInputs.name.value,
        description: updateTodoFormInputs.description.value,
        dueDate: updateTodoFormInputs.dueDate.value
          .split("-")
          .reverse()
          .join("/"),
      };

      setUpdateTodoFormInputs(initialUpdateTodoForm);
      updateTodo(updatedTodo);
      setIsEditing(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter New Name"
        className={cn(
          "p-2 border-2 rounded-md",
          updateTodoFormInputs.name.error && "border-red-500"
        )}
        value={updateTodoFormInputs.name.value}
        onChange={(e) => handleChange("name", e.target.value)}
      />
      <p className="px-1 mb-3 text-red-500">
        {updateTodoFormInputs.name.error}
      </p>
      <textarea
        rows={3}
        placeholder="Description"
        className={cn(
          "p-2 border-2 rounded-md",
          updateTodoFormInputs.description.error && "border-red-500"
        )}
        value={updateTodoFormInputs.description.value}
        onChange={(e) => handleChange("description", e.target.value)}
      ></textarea>
      <p className="px-1 mb-3 text-red-500">
        {updateTodoFormInputs.description.error}
      </p>
      <input
        type="date"
        value={updateTodoFormInputs.dueDate.value}
        className={cn(
          "p-2 border-2 rounded-md",
          updateTodoFormInputs.dueDate.error && "border-red-500"
        )}
        onChange={(e) => handleChange("dueDate", e.target.value)}
      />
      <p className="px-1 mb-3 text-red-500">
        {updateTodoFormInputs.dueDate.error}
      </p>
      <div className="flex gap-3">
        <button
          type="submit"
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Update
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="text-white bg-btn btn hover:bg-btn-hover"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
