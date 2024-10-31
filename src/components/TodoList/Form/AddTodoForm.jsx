/* eslint-disable react/prop-types */
import { cn } from "../../../utils/cn";
import NameInput from "./AddTodoForm/NameInput";
import { validateField } from "../../../utils/todo";
import DueDateInput from "./AddTodoForm/DueDateInput";
import TodoContext from "../../../providers/TodosProvider";
import DescriptionInput from "./AddTodoForm/DescriptionInput";
import CloseAddTodoFormBtn from "./AddTodoForm/CloseAddTodoFormBtn";
import ResetAddTodoFormBtn from "./AddTodoForm/ResetAddTodoFormBtn";

import {
  memo,
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

const initialAddTodoFormInputs = {
  name: { value: "", error: null },
  dueDate: { value: "", error: null },
  description: { value: "", error: null },
};

const AddTodoForm = memo(function AddTodoForm({
  showAddTodoForm,
  setShowAddTodoForm,
}) {
  const disableAdding = useRef(true);
  const { addTodo } = useContext(TodoContext);

  const [addTodoFormInputs, setAddTodoFormInputs] = useState(
    initialAddTodoFormInputs
  );

  const resetAddTodoForm = () => {
    setAddTodoFormInputs(initialAddTodoFormInputs);
  };

  const handleAddTodoFormInputChange = useCallback((field, value) => {
    const error = validateField(field, value);
    setAddTodoFormInputs((prevInputs) => ({
      ...prevInputs,
      [field]: { value, error },
    }));
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (disableAdding.current) return;

    const { name, description, dueDate } = addTodoFormInputs;
    const newTodo = {
      id: Date.now(),
      completed: false,
      createdOn: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
      name: name.value,
      description: description.value,
      dueDate: dueDate.value.split("-").reverse().join("/"),
    };

    addTodo(newTodo);
    resetAddTodoForm();
  };

  useEffect(() => {
    disableAdding.current = !Object.values(addTodoFormInputs).every(
      (input) => input.error === null && input.value !== ""
    );
  }, [addTodoFormInputs]);

  return (
    <form
      className={cn(
        "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
        showAddTodoForm
          ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
          : "hidden md:flex"
      )}
      onSubmit={handleAddTodo}
    >
      <div className="relative flex flex-col">
        <CloseAddTodoFormBtn setShowAddTodoForm={setShowAddTodoForm} />

        <h1 className="mb-3 text-lg">Add a todo</h1>
        <NameInput
          addTodoFormInputs={addTodoFormInputs}
          handleAddTodoFormInputChange={handleAddTodoFormInputChange}
        />
        <DescriptionInput
          addTodoFormInputs={addTodoFormInputs}
          handleAddTodoFormInputChange={handleAddTodoFormInputChange}
        />
        <DueDateInput
          addTodoFormInputs={addTodoFormInputs}
          handleAddTodoFormInputChange={handleAddTodoFormInputChange}
        />
        <button
          type="submit"
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Add
        </button>
      </div>
      <ResetAddTodoFormBtn resetAddTodoForm={resetAddTodoForm} />
    </form>
  );
});

export default AddTodoForm;
