/* eslint-disable react/prop-types */
export default function EditTodoForm({
  newTodoNameInputRef,
  newTodoDescInputRef,
}) {
  return (
    <>
      <input
        type="text"
        ref={newTodoNameInputRef}
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        placeholder="Enter new name"
      />
      <input
        type="text"
        ref={newTodoDescInputRef}
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        placeholder="Enter new description"
      />
    </>
  );
}
