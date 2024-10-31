/* eslint-disable react/prop-types */
import TodoListLen from "./Header/TodoListLen";
import ThemeSwitcher from "./Header/ThemeSwitcher";
import ShowAddTodoFormBtn from "./Header/ShowAddTodoFormBtn";
import ToggleTodoListOptionsBtn from "./Header/ToggleTodoListOptionsBtn";

export default function TodoListHeader({
  toggleAddTodoForm,
  toggleTodoListOptions,
}) {
  return (
    <div className="flex justify-between md:grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
      <ThemeSwitcher />
      <div className="flex items-center gap-3">
        <ToggleTodoListOptionsBtn
          toggleShowTodoListOptions={toggleTodoListOptions}
        />
        <ShowAddTodoFormBtn toggleShowAddTodoForm={toggleAddTodoForm} />
        <TodoListLen />
      </div>
    </div>
  );
}
