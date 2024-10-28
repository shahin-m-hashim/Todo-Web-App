import { cn } from "../../../utils/cn";
import { useContext, useState } from "react";
import TodoContext from "../../../providers/TodosProvider";

const initialAddTodoForm = {
  name: {
    value: "",
    error: "",
  },
  description: {
    value: "",
    error: "",
  },
  dueDate: "",
};

export default function AddTodoForm() {
  const [addTodoForm, setAddTodoForm] = useState(initialAddTodoForm);
  const { todoUIStates, addTodo } = useContext(TodoContext);

  return (
    <form
      className={cn(
        "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
        todoUIStates.showAddTodoForm
          ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
          : "hidden md:flex"
      )}
    >
      <div className="relative flex flex-col">
        <button
          onClick={() =>
            setAddTodoForm({ ...addTodoForm, showAddTodoForm: false })
          }
          className="absolute top-0 right-0 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
        >
          <img alt="close" className="h-5" src="assets/icons/close.svg" />
        </button>

        <h1 className="mb-3 text-lg">Add a todo</h1>
        <input
          type="text"
          placeholder="Name"
          value={addTodoForm.name.value}
          onChange={(e) =>
            setAddTodoForm({
              ...addTodoForm,
              name: { value: e.target.value, error: "" },
            })
          }
          className="p-2 mb-3 border-2 rounded-md"
        />
        <p className="text-red-500">{addTodoForm.name.error}</p>
        <textarea
          rows={3}
          placeholder="Description"
          onChange={(e) =>
            setAddTodoForm({
              ...addTodoForm,
              description: { value: e.target.value, error: "" },
            })
          }
          value={addTodoForm.description.value}
          className="p-2 mb-3 border-2 rounded-md"
        />
        <input type="date" className="p-2 mb-3 border-2 rounded-md" />
        <button
          onClick={() =>
            addTodo({
              name: addTodoForm.name.value,
              description: addTodoForm.description.value,
              dueDate: addTodoForm.dueDate,
            })
          }
          className="text-white btn bg-btn hover:bg-btn-hover"
        >
          Add
        </button>
      </div>
      <button
        onClick={() => setAddTodoForm(initialAddTodoForm)}
        className="text-white btn bg-btn-hover hover:bg-btn"
      >
        Reset
      </button>
    </form>
  );
}
