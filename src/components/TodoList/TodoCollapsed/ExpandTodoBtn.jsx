/* eslint-disable react/prop-types */

export default function ExpandTodoBtn({
  isEditing,
  isExpanded,
  toggleExpanding,
}) {
  return (
    <button
      type="button"
      disabled={isEditing}
      onClick={toggleExpanding}
      className={isEditing ? "cursor-not-allowed" : "cursor-pointer"}
    >
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
