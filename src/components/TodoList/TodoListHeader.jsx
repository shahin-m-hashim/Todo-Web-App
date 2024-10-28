import { useContext } from "react";
import ThemeBtn from "../ThemeBtn";
import ThemeContext from "../../providers/ThemeContext";
import TodoContext from "../../providers/TodosProvider";

export default function TodoListHeader() {
  const { setTheme } = useContext(ThemeContext);
  const { todos, todoUIStates, setTodoUIStates } = useContext(TodoContext);

  return (
    <div className="flex justify-between md:grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
      <div className="flex items-center gap-3">
        <span className="hidden md:inline">Switch Themes ?</span>
        <ThemeBtn
          setTheme={setTheme}
          theme="light"
          backgroundColor="hsl(32, 67%, 82%)"
        />
        <ThemeBtn
          setTheme={setTheme}
          theme="dark"
          backgroundColor="hsl(207, 26%, 17%)"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          className="ml-2 mr-auto"
          onClick={() =>
            setTodoUIStates({
              ...todoUIStates,
              showTodoListOptions: !todoUIStates.showTodoListOptions,
            })
          }
        >
          <img
            alt="settings"
            className="h-6"
            src="assets/icons/hamburger.png"
          />
        </button>

        <button
          className="md:hidden"
          onClick={() =>
            setTodoUIStates({ ...todoUIStates, showAddTodoForm: true })
          }
        >
          <img
            className="h-8"
            alt="show-add-todo-form"
            src="assets/icons/add.png"
          />
        </button>

        <div className="text-sm md:text-base">
          <span>{todos.filter((todo) => todo.completed).length}/</span>
          <span>{todos.length}</span>
          <span>&nbsp;completed</span>
        </div>
      </div>
    </div>
  );
}
