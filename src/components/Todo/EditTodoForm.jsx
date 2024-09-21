/* eslint-disable react/prop-types */
export default function EditTodoForm({ newTodoNameRef, newTodoDescRef }) {
  return (
    <>
      <input
        type="text"
        ref={newTodoNameRef}
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        placeholder="Enter new name"
      />
      <input
        type="text"
        ref={newTodoDescRef}
        className="flex-1 p-2 border-2 border-blue-500 rounded"
        placeholder="Enter new description"
      />
    </>
  );
}
