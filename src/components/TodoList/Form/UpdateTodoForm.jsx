/* eslint-disable react/prop-types */

import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

import {
  validateName,
  validateDueDate,
  validateDescription,
} from "../../../utils/validator";

import { InputField, TextAreaField, useHybridForm } from "react-hybrid-form";

export default function UpdateTodoForm({ todo, setIsEditing }) {
  const { updateTodo } = useContext(TodoContext);

  const [register, getFormData, resetForm] = useHybridForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = getFormData();

    if (data) {
      const { name, description, dueDate } = data;

      const updatedTodo = {
        ...todo,
        name,
        description,
        dueDate: dueDate.split("-").reverse().join("/"),
      };

      updateTodo(updatedTodo);
      resetForm();
      setIsEditing(false);
    }
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <InputField
        name="name"
        fieldClass="mb-2"
        placeholder="Name"
        ref={register("name")}
        validate={validateName}
        defaultValue={todo.name}
        errorClass="px-1 text-red-500 text-sm"
        inputClass="p-2 border-2 rounded-md w-full"
      />
      <TextAreaField
        name="description"
        placeholder="Description"
        ref={register("description")}
        validate={validateDescription}
        defaultValue={todo.description}
        errorClass="px-1 text-red-500 text-sm"
        textareaClass="p-2 border-2 rounded-md w-full"
      />
      <InputField
        type="date"
        name="dueDate"
        fieldClass="mb-2"
        placeholder="Due Date"
        ref={register("dueDate")}
        validate={validateDueDate}
        errorClass="px-1 text-red-500 text-sm"
        inputClass="p-2 border-2 rounded-md w-full"
        defaultValue={todo.dueDate.split("/").reverse().join("-")}
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
