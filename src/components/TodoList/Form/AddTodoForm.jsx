import { cn } from "../../../utils/cn";
import { validateField } from "../../../utils/todo";
import TodoContext from "../../../providers/TodosProvider";
import { useContext, useEffect, useRef, useState } from "react";

const initialAddTodoForm = {
  name: {
    value: "",
    error: null,
  },
  description: {
    value: "",
    error: null,
  },
  dueDate: {
    value: "",
    error: null,
  },
};

export default function AddTodoForm() {
  const disableAdding = useRef(true);
  const { todoUIStates, setTodoUIStates, addTodo } = useContext(TodoContext);
  const [addTodoFormInputs, setAddTodoFormInputs] =
    useState(initialAddTodoForm);

  const handleChange = (field, value) => {
    const error = validateField(field, value);

    setAddTodoFormInputs((prevInputs) => ({
      ...prevInputs,
      [field]: { value, error },
    }));
  };

  useEffect(() => {
    disableAdding.current = !Object.values(addTodoFormInputs).every(
      (input) => input.error === null && input.value != ""
    );
  }, [addTodoFormInputs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!disableAdding.current) {
      const newTodo = {
        id: Date.now(),
        completed: false,
        createdOn: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }),
        name: addTodoFormInputs.name.value,
        description: addTodoFormInputs.description.value,
        dueDate: addTodoFormInputs.dueDate.value.split("-").reverse().join("/"),
      };

      setAddTodoFormInputs(initialAddTodoForm);

      addTodo(newTodo);
    }
  };

  return (
    <form
      className={cn(
        "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
        todoUIStates.showAddTodoForm
          ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
          : "hidden md:flex"
      )}
      onSubmit={handleSubmit}
    >
      <div className="relative flex flex-col">
        <button
          type="button"
          onClick={() =>
            setTodoUIStates({
              ...todoUIStates,
              showAddTodoForm: false,
            })
          }
          className="absolute top-0 right-0 z-40 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
        >
          <img alt="close" className="h-5" src="assets/icons/close.svg" />
        </button>

        <h1 className="mb-3 text-lg">Add a todo</h1>
        <input
          type="text"
          placeholder="Name"
          className={cn(
            "p-2 border-2 rounded-md",
            addTodoFormInputs.name.error && "border-red-500"
          )}
          value={addTodoFormInputs.name.value}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <p className="px-1 mb-3 text-red-500">{addTodoFormInputs.name.error}</p>
        <textarea
          rows={3}
          placeholder="Description"
          className={cn(
            "p-2 border-2 rounded-md",
            addTodoFormInputs.description.error && "border-red-500"
          )}
          value={addTodoFormInputs.description.value}
          onChange={(e) => handleChange("description", e.target.value)}
        />
        <p className="px-1 mb-3 text-red-500">
          {addTodoFormInputs.description.error}
        </p>
        <input
          type="date"
          className={cn(
            "p-2 border-2 rounded-md",
            addTodoFormInputs.dueDate.error && "border-red-500"
          )}
          value={addTodoFormInputs.dueDate.value}
          onChange={(e) => handleChange("dueDate", e.target.value)}
        />
        <p className="px-1 mb-3 text-red-500">
          {addTodoFormInputs.dueDate.error}
        </p>
        <button
          type="submit"
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Add
        </button>
      </div>
      <button
        type="reset"
        onClick={() => setAddTodoFormInputs(initialAddTodoForm)}
        className="text-white btn bg-btn-hover hover:bg-btn"
      >
        Reset
      </button>
    </form>
  );
}
