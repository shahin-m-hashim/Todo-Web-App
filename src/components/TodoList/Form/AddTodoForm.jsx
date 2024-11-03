/* eslint-disable react/prop-types */

import {
  validateName,
  validateDueDate,
  validateDescription,
} from "../../../utils/validator";

import { cn } from "../../../utils/cn";
import InputField from "../../InputField";
import TextAreaField from "../../TextAreaField";
import { memo, useContext, useRef } from "react";
import TodoContext from "../../../providers/TodosProvider";

const AddTodoForm = memo(function AddTodoForm({
  showAddTodoForm,
  setShowAddTodoForm,
}) {
  const form = useRef({});
  const inputRefs = useRef({});
  const { addTodo } = useContext(TodoContext);

  const handleReset = () => {
    Object.values(inputRefs.current).forEach((inputRef) => {
      inputRef.reset();
    });
  };

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
      handleReset();
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
          type="text"
          name="name"
          placeholder="Name"
          validate={validateName}
          ref={(el) => (inputRefs.current["name"] = el)}
        />
        <TextAreaField
          name="description"
          placeholder="Description"
          validate={validateDescription}
          ref={(el) => (inputRefs.current["description"] = el)}
        />
        <InputField
          type="date"
          name="dueDate"
          placeholder="Due Date"
          validate={validateDueDate}
          ref={(el) => (inputRefs.current["dueDate"] = el)}
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
        onClick={handleReset}
        className="text-white btn bg-btn-hover hover:bg-btn"
      >
        Reset
      </button>
    </form>
  );
});

export default AddTodoForm;
