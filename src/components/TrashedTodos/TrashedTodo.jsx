/* eslint-disable react/prop-types */

import RestoreTodoBtn from "./RestoreTodoBtn";
import DeleteTrashedTodoBtn from "./DeleteTrashedTodoBtn";

export default function TrashedTodo({ todo, trashedTodos, setTrashedTodos }) {
  return (
    <div className="flex items-center justify-between flex-1 h-10 border-b-2 xs:h-12">
      <span className="py-3 text-sm xs:pl-5 md:text-base">{todo.name}</span>
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
