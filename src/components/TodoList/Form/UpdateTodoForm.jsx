/* eslint-disable react/prop-types */

import InputField from "../../InputField";
import { useContext, useRef } from "react";
import TextAreaField from "../../TextAreaField";
import TodoContext from "../../../providers/TodosProvider";

import {
  validateName,
  validateDueDate,
  validateDescription,
} from "../../../utils/validator";

export default function UpdateTodoForm({ todo, setIsEditing }) {
  const form = useRef({
    name: todo.name,
    dueDate: todo.dueDate.split("/").reverse().join("-"),
    description: todo.description,
  });
  const inputRefs = useRef({});
  const { updateTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let isFormValid = true;

    Object.entries(inputRefs.current).forEach(([key, inputRef]) => {
      if (inputRef.validate && !inputRef.validate()) {
        isFormValid = false;
      } else {
        form.current[key] = inputRef.getValue();
      }
    });

    if (isFormValid) {
      const { name, description, dueDate } = form.current;

      const updatedTodo = {
        ...todo,
        name,
        description,
        dueDate: dueDate.split("-").reverse().join("/"),
      };

      updateTodo(updatedTodo);
      setIsEditing(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="name"
        placeholder="Name"
        validate={validateName}
        defaultValue={form.current.name}
        ref={(el) => (inputRefs.current["name"] = el)}
      />
      <TextAreaField
        name="description"
        placeholder="Description"
        validate={validateDescription}
        defaultValue={form.current.description}
        ref={(el) => (inputRefs.current["description"] = el)}
      />
      <InputField
        type="date"
        name="dueDate"
        placeholder="Due Date"
        validate={validateDueDate}
        defaultValue={form.current.dueDate}
        ref={(el) => (inputRefs.current["dueDate"] = el)}
      />
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
