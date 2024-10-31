/* eslint-disable react/prop-types */
export default function ToggleTodoListOptionsBtn({
  toggleShowTodoListOptions,
}) {
  return (
    <button
      type="button"
      className="ml-2 mr-auto"
      onClick={toggleShowTodoListOptions}
    >
      <img alt="settings" className="h-6" src="assets/icons/hamburger.png" />
    </button>
  );
}
