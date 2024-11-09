/* eslint-disable react/prop-types */

export default function DeleteTrashedTodo({
  todoId,
  trashedTodos,
  setTrashedTodos,
}) {
  const deleteTrashedTodo = (id) => {
    localStorage.setItem(
      "trashedTodos",
      JSON.stringify(trashedTodos.filter((todo) => todo.id !== id))
    );

    setTrashedTodos(trashedTodos.filter((todo) => todo.id !== id));
  };

  return (
    <button
      type="button"
      onClick={() => deleteTrashedTodo(todoId)}
      className="flex items-center px-3 bg-red-400"
    >
      <img className="h-6" alt="delete-todo" src="assets/icons/delete.svg" />
    </button>
  );
}
