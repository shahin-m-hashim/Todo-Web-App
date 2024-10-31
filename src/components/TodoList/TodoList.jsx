import Todo from "./Todo";
import { useContext } from "react";
import { cn } from "../../utils/cn";
import TodoContext from "../../providers/TodosProvider";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    todos && (
      <div
        id="todos"
        className={cn(
          "overflow-auto",
          !todos.length && "h-full flex justify-center items-center"
        )}
      >
        {todos.length ? (
          todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        ) : (
          <div className="text-3xl text-gray-500">No Todos Found</div>
        )}
      </div>
    )
  );
}
