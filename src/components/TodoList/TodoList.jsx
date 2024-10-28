import Todo from "./Todo";
import { useContext } from "react";
import { cn } from "../../utils/cn";
import TodoDetails from "./Todo/TodoDetails";
import EditTodoForm from "./Form/EditTodoForm";
import TodoContext from "../../providers/TodosProvider";

export default function TodoList() {
  const { todos, todoUIStates } = useContext(TodoContext);

  return (
    <div
      id="todos"
      className={cn(
        "overflow-auto",
        !todos?.length && "h-full flex justify-center items-center"
      )}
    >
      {todos?.length ? (
        todos.map((todo) => (
          <div id={todo.id} key={todo.id}>
            <Todo />

            {todoUIStates.editingTodo === todo.id ? (
              <div className="p-5 overflow-hidden border-b-2 bg-slate-300">
                <EditTodoForm />
              </div>
            ) : (
              <TodoDetails />
            )}
          </div>
        ))
      ) : (
        <div className="text-3xl text-gray-500">No Todos Found</div>
      )}
    </div>
  );
}
