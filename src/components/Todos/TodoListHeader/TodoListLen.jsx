import { useContext } from "react";
import TodoContext from "../../../providers/TodosProvider";

export default function TodoListLen() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="text-sm md:text-base">
      <span>{todos.filter((todo) => todo.completed).length}/</span>
      <span>{todos.length}</span>
      <span>&nbsp;completed</span>
    </div>
  );
}
