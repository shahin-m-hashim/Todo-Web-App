/* eslint-disable react/prop-types */

export default function CloseAddTodoFormBtn({ setShowAddTodoForm }) {
  return (
    <button
      type="button"
      onClick={() => setShowAddTodoForm(false)}
      className="absolute top-0 right-0 z-40 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
    >
      <img alt="close" className="h-5" src="assets/icons/close.svg" />
    </button>
  );
}
