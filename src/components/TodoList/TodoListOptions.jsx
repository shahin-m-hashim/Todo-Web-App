import { useContext } from "react";
import { cn } from "../../utils/cn";
import TodoContext from "../../providers/TodosProvider";

export default function TodoListOptions() {
  const { todoUIStates } = useContext(TodoContext);

  return (
    <div
      className={cn(
        "flex flex-col flex-shrink-0 gap-3 overflow-hidden transition-all border-b-2 bg-slate-300",
        todoUIStates.showTodoListOptions
          ? "p-5 h-[200px] lg:h-[158px]"
          : "px-5 py-0 h-0"
      )}
    >
      {/* Search Todos  */}
      <input
        type="text"
        placeholder="Search Todos"
        className="p-1 mb-1 border-2 rounded-md"
      />

      <div className="flex flex-col justify-between gap-3 lg:flex-row">
        <div className="flex flex-col gap-3">
          {/* Sort Todos */}
          <div className="flex items-center gap-3">
            <div>Sort By:</div>
            <div className="flex gap-3">
              <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                Name
              </button>
              <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                Date
              </button>
            </div>
          </div>

          {/* Filter Todos */}
          <div className="flex items-center gap-3">
            <div>Filter By:</div>
            <div className="flex gap-3">
              <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                Completed
              </button>
              <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                Pending
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 text-xs lg:text-sm">
          {/* Clear Todo List */}
          <div>
            <button className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500">
              Clear All
            </button>
          </div>

          {/* Check Trash */}
          <div>
            <button className="p-2 text-black bg-yellow-300 lg:px-4 lg:py-2 hover:bg-yellow-400">
              View Trash
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
