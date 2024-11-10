/* eslint-disable react/prop-types */

import RestoreTodoBtn from "./RestoreTodoBtn";
import DeleteTrashedTodoBtn from "./DeleteTrashedTodoBtn";

export default function TrashedTodo({ todo, trashedTodos, setTrashedTodos }) {
  return (
    <div className="flex items-center justify-between flex-1 h-12 pl-5 border-b-2">
      <div className="py-3 text-sm md:text-base">
        <span>{todo.name}</span>
        <span>&nbsp;&nbsp;</span>
        {todo.completed ? (
          <span className="px-2 text-xs text-white bg-green-400 rounded-full"></span>
        ) : (
          <span className="px-2 text-xs text-white bg-red-400 rounded-full"></span>
        )}
      </div>
      <div className="flex flex-shrink-0 h-full">
        <RestoreTodoBtn
          todo={todo}
          trashedTodos={trashedTodos}
          setTrashedTodos={setTrashedTodos}
        />
        <DeleteTrashedTodoBtn
          todoId={todo.id}
          trashedTodos={trashedTodos}
          setTrashedTodos={setTrashedTodos}
        />
      </div>
    </div>
  );
}
