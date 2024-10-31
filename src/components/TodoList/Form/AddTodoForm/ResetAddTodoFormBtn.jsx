/* eslint-disable react/prop-types */

export default function ResetAddTodoFormBtn({ resetAddTodoForm }) {
  return (
    <button
      type="reset"
      onClick={resetAddTodoForm}
      className="text-white btn bg-btn-hover hover:bg-btn"
    >
      Reset
    </button>
  );
}
