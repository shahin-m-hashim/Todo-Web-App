/* eslint-disable react/prop-types */

export default function EditTodoBtn({ completed, isEditing, setIsEditing }) {
  return (
    <button
      type="button"
      disabled={isEditing || completed}
      className={
        isEditing || completed ? "cursor-not-allowed" : "cursor-pointer"
      }
      onClick={() => setIsEditing(true)}
    >
      <img alt="edit-todo" className="h-6" src="assets/icons/edit.svg" />
    </button>
  );
}
