/* eslint-disable react/prop-types */
import { memo } from "react";
import TodoListLen from "./Header/TodoListLen";
import ThemeSwitcher from "./Header/ThemeSwitcher";
import ShowAddTodoFormBtn from "./Header/ShowAddTodoFormBtn";
import ToggleTodoListOptionsBtn from "./Header/ToggleTodoListOptionsBtn";

const TodoListHeader = memo(function TodoListHeader({
  setShowAddTodoForm,
  toggleTodoListOptions,
}) {
  return (
    <div className="flex justify-between md:grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
      <ThemeSwitcher />
      <div className="flex items-center gap-3">
        <ToggleTodoListOptionsBtn
          toggleShowTodoListOptions={toggleTodoListOptions}
        />
        <ShowAddTodoFormBtn setShowAddTodoForm={setShowAddTodoForm} />
        <TodoListLen />
      </div>
    </div>
  );
});

export default TodoListHeader;
