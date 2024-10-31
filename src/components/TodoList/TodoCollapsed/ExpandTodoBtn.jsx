/* eslint-disable react/prop-types */

export default function ExpandTodoBtn({ isExpanded, toggleExpanding }) {
  return (
    <button type="button" onClick={toggleExpanding}>
      <img
        className="h-6"
        alt="expand-todo"
        src="assets/icons/expand-up.png"
        style={{
          transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
          transition: "transform 0.3s linear 0.1s",
        }}
      />
    </button>
  );
}
