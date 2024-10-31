/* eslint-disable react/prop-types */

export default function EditTodoBtn({ completed, setIsEditing }) {
  return (
    <button
      type="button"
      disabled={completed}
      onClick={() => setIsEditing(true)}
    >
      <img alt="edit-todo" className="h-6" src="assets/icons/edit.svg" />
    </button>
  );
}
