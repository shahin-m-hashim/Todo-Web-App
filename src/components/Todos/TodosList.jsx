import Todo from "./Todo";
import { cn } from "../../utils/cn";
import { useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

export default function TodosList() {
  const { todos } = useContext(TodoContext);

  return (
    <div
      id="todos"
      className={cn(
        "h-full overflow-auto",
        todos.length === 0 && "flex justify-center items-center"
      )}
    >
      {todos.length > 0 ? (
        todos.map((todo) => <Todo todo={todo} key={todo.id} />)
      ) : (
        <div className="text-3xl text-gray-500">No Todos Found</div>
      )}
    </div>
  );
}
