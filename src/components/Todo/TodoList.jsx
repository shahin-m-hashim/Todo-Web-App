import TodoRow from "./TodoRow";
import { useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

export default function TodoList() {
  const { todos } = useContext(TodoContext);

  if (todos) {
    return (
      <>
        <div className="w-1/2 p-2 mx-auto my-4 bg-red-300 rounded-md">
          <div className="grid grid-cols-[1fr,1fr,100px]">
            <div className="p-1 text-center bg-green-300 border-2 border-r-0 border-red-500">
              Name
            </div>
            <div className="p-1 text-center bg-green-300 border-2 border-r-0 border-red-500">
              Description
            </div>
            <div className="p-1 text-center bg-green-300 border-2 border-red-500">
              Actions
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
      </>
    );
  }
}
