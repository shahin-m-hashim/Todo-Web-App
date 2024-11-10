/* eslint-disable react/prop-types */

import { memo } from "react";
import TodoListLen from "./TodoListHeader/TodoListLen";
import ThemeSwitcher from "./TodoListHeader/ThemeSwitcher";

const TodoListHeader = memo(function TodoListHeader({
  setShowAddTodoForm,
  toggleShowTodoListOptions,
}) {
  console.log("TodoListHeader rendered");

  return (
    <div className="flex justify-between md:grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
      <ThemeSwitcher />
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="ml-2 mr-auto"
          onClick={toggleShowTodoListOptions}
        >
          <img
            alt="settings"
            className="h-6"
            src="assets/icons/hamburger.png"
          />
        </button>
        <button
          type="button"
          className="md:hidden"
          onClick={() => setShowAddTodoForm(true)}
        >
          <img
            className="h-8"
            alt="show-add-todo-form"
            src="assets/icons/add.png"
          />
        </button>
        <TodoListLen />
      </div>
    </div>
  );
});

export default TodoListHeader;
