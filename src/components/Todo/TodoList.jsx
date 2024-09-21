import TodoRow from "./TodoRow";
import { useContext } from "react";
import TodoContext from "../../contexts/TodoProvider";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  return (
    <div className="w-1/2 h-auto p-2 mx-auto my-4 bg-red-300 rounded-md">
      <div className="flex">
        <div className="flex-1 p-1 text-center bg-green-300 border-2 border-r-0 border-red-500">
          Name
        </div>
        <div className="flex-1 p-1 text-center bg-green-300 border-2 border-red-500">
          Description
        </div>
      </div>
      {todos.length ? (
        todos.map((todo) => <TodoRow key={todo.id} {...todo} />)
      ) : (
        <div className="flex items-center justify-center h-40 text-2xl place-items-center">
          <p>Currently, there are no todos to display.</p>
        </div>
      )}
    </div>
  );
}
