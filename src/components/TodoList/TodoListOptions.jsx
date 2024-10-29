import { useContext } from "react";
import { cn } from "../../utils/cn";
import ViewTrashBtn from "./TodoListOptions/ViewTrashBtn";
import SearchTodosInput from "./TodoListOptions/SearchTodosInput";
import DeleteAllTodosBtn from "./TodoListOptions/DeleteAllTodosBtn";
import SortTodosByNameBtn from "./TodoListOptions/SortTodosByNameBtn";
import SortTodosByDatesBtn from "./TodoListOptions/SortTodosByDatesBtn";
import UserInterfaceContext from "../../providers/UserInterfaceProvider";
import FilterTodosByPendingBtn from "./TodoListOptions/FilterTodosByPendingBtn";
import FilterTodosByCompletedBtn from "./TodoListOptions/FilterTodosByCompletedBtn";

export default function TodoListOptions() {
  const { UIStates } = useContext(UserInterfaceContext);

  return (
    <div
      className={cn(
        "flex flex-col flex-shrink-0 gap-3 overflow-hidden transition-all border-b-2 bg-slate-300",
        UIStates.showTodoListOptions
          ? "p-5 h-[200px] lg:h-[158px]"
          : "px-5 py-0 h-0"
      )}
    >
      <SearchTodosInput />

      <div className="flex flex-col justify-between gap-3 lg:flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>Sort By:</div>
            <div className="flex gap-3">
              <SortTodosByNameBtn />
              <SortTodosByDatesBtn />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>Filter By:</div>
            <div className="flex gap-3">
              <FilterTodosByCompletedBtn />
              <FilterTodosByPendingBtn />
            </div>
          </div>
        </div>

        <div className="flex gap-3 text-xs lg:text-sm">
          <div>
            <DeleteAllTodosBtn />
          </div>
          <div>
            <ViewTrashBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
