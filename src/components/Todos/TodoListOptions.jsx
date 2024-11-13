/* eslint-disable react/prop-types */

import { cn } from "../../utils/cn";
import { memo, useContext } from "react";
import TodoContext from "../../providers/TodosProvider";
import ViewTrashBtn from "./TodoListOptions/ViewTrashBtn";
import SortByNameBtn from "./TodoListOptions/SortByNameBtn";
import SortByDueDateBtn from "./TodoListOptions/SortByDueDateBtn";
import SearchTodosInput from "./TodoListOptions/SearchTodosInput";
import ClearSelectionBtn from "./TodoListOptions/ClearSelectionBtn";
import DeleteAllTodosBtn from "./TodoListOptions/DeleteAllTodosBtn";
import FilterByPendingBtn from "./TodoListOptions/FilterByPendingBtn";
import ClearAllOptionsBtn from "./TodoListOptions/ClearAllOptionsBtn";
import DeleteSelectedTodos from "./TodoListOptions/DeleteSelectedTodos";
import FilterByCompletedBtn from "./TodoListOptions/FilterByCompletedBtn";

const TodoListOptions = memo(function TodoListOptions({
  showTodoListOptions,
  setShowTrashedTodos,
}) {
  const { options } = useContext(TodoContext);

  return (
    <div
      className={cn(
        "flex flex-col flex-shrink-0 overflow-hidden transition-all border-b-2 bg-slate-300",
        showTodoListOptions ? "p-5 h-[215px] lg:h-[180px]" : "px-5 py-0 h-0"
      )}
    >
      <SearchTodosInput />

      <div className="flex flex-col justify-between gap-5 lg:flex-row">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>Sort By:</div>
            <div className="flex gap-3">
              <SortByNameBtn />
              <SortByDueDateBtn />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div>Filter By:</div>
            <div className="flex gap-3">
              <FilterByCompletedBtn />
              <FilterByPendingBtn />
            </div>
          </div>
        </div>

        <div className="flex gap-3 text-xs lg:text-sm">
          {options.isSelecting ? (
            <>
              <div>
                <DeleteSelectedTodos />
              </div>
              <div>
                <ClearSelectionBtn
                  bg={"bg-yellow-300"}
                  color={"text-black"}
                  bgHover={"hover:bg-yellow-400"}
                />
              </div>
            </>
          ) : (
            <>
              {options.searchQuery ||
              options.currentFilter ||
              Object.values(options.currentSort).some((sort) => sort) ? (
                <div>
                  <ClearAllOptionsBtn />
                </div>
              ) : (
                <div>
                  <DeleteAllTodosBtn />
                </div>
              )}
              <div>
                <ViewTrashBtn setShowTrashedTodos={setShowTrashedTodos} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
});

export default TodoListOptions;
