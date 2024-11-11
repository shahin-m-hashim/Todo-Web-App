/* eslint-disable react/prop-types */

import {
  validateName,
  validateDueDate,
  validateDescription,
} from "../../../utils/validator";

import { cn } from "../../../utils/cn";
import { memo, useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";
import { InputField, TextAreaField, useHybridForm } from "react-hybrid-form";

const AddTodoForm = memo(function AddTodoForm({
  showAddTodoForm,
  setShowAddTodoForm,
}) {
  const { addTodo } = useContext(TodoContext);

  const [register, getFormData, resetForm] = useHybridForm();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = getFormData();

    if (data) {
      const { name, description, dueDate } = data;

      const newTodo = {
        id: Date.now(),
        completed: false,
        createdOn: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }),
        name,
        description,
        dueDate: dueDate.split("-").reverse().join("/"),
      };

      addTodo(newTodo);
      resetForm();
    }
  };

  return (
    <form
      className={cn(
        "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
        showAddTodoForm
          ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
          : "hidden md:flex"
      )}
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col">
        <button
          type="button"
          onClick={() => setShowAddTodoForm(false)}
          className="absolute top-0 right-0 z-40 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
        >
          <img alt="close" className="h-5" src="assets/icons/close.svg" />
        </button>

        <h1 className="mb-3 text-lg">Add a todo</h1>
        <InputField
          name="name"
          fieldClass="mb-2"
          placeholder="Name"
          ref={register("name")}
          validate={validateName}
          errorClass="px-1 text-red-500 text-sm"
          inputClass="p-2 border-2 rounded-md w-full"
        />
        <TextAreaField
          fieldClass="mb-1"
          name="description"
          placeholder="Description"
          ref={register("description")}
          validate={validateDescription}
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
        />
        <button
          type="submit"
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Add
        </button>
      </div>
      <button
        type="reset"
        onClick={resetForm}
        className="text-white btn bg-btn-hover hover:bg-btn"
      >
        Reset
      </button>
    </form>
  );
});

export default AddTodoForm;
