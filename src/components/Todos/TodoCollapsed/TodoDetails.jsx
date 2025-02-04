/* eslint-disable react/prop-types */

export default function TodoDetails({ todo, isExpanded }) {
  return (
    <div
      className="overflow-hidden border-b-2 bg-slate-300"
      style={{
        maxHeight: isExpanded ? "2000px" : "0",
        padding: isExpanded ? "1.25rem" : "0 1.25rem 0 1.25rem",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col justify-between gap-3 mb-3 md:flex-row">
        <h4 className="text-lg font-semibold ">Name: {todo.name}</h4>
        <div>
          <p>
            <span className="font-semibold text-blue-500">Created:&nbsp;</span>
            <span>{todo.createdOn}</span>
          </p>
          <p>
            <span className="font-semibold text-red-500">Due:&nbsp;</span>
            <span>{todo.dueDate}</span>
          </p>
        </div>
      </div>
      <h5 className="mb-1 text-lg font-bold underline underline-offset-4">
        Description
      </h5>
      <p>{todo.description}</p>
    </div>
  );
}
