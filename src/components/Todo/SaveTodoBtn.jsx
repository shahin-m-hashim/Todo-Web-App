/* eslint-disable react/prop-types */

export default function SaveTodoBtn({
  id,
  newName,
  newDesc,
  setIsEditing,
  handleUpdateTodo,
}) {
  return (
    <button
      onClick={() => {
        if (handleUpdateTodo(id, newName, newDesc)) {
          setIsEditing(false);
        }
      }}
      className="flex justify-center p-2 bg-green-500 border-2 border-red-700 cursor-pointer"
    >
      Save
    </button>
  );
}
