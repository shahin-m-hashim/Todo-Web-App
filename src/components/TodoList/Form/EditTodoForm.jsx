export default function EditTodoForm() {
  return (
    <form className="flex flex-col">
      <input
        type="text"
        placeholder="Enter New Name"
        className="p-2 mb-3 border-2 rounded-md"
      />
      <textarea
        rows={3}
        placeholder="Enter New Description"
        className="p-2 mb-3 border-2 rounded-md"
      ></textarea>
      <input type="date" className="p-2 mb-3 border-2 rounded-md" />
      <div className="flex gap-3">
        <button className="text-white btn bg-btn hover:bg-btn-hover">
          Update
        </button>
        <button
          onClick={() => setEditTodo({ id: null, isEditing: false })}
          className="text-white bg-btn btn hover:bg-btn-hover"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
