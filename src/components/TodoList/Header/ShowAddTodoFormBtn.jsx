/* eslint-disable react/prop-types */
export default function ShowAddTodoFormBtn({ setShowAddTodoForm }) {
  return (
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
  );
}
