import Todo from "./Todo";
import { useContext } from "react";
import { cn } from "../../utils/cn";
import TodoDetails from "./Todo/TodoDetails";
import UpdateTodoForm from "./Form/UpdateTodoForm";
import TodoContext from "../../providers/TodosProvider";
import UserInterfaceContext from "../../providers/UserInterfaceProvider";

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  const { editingTodo } = useContext(UserInterfaceContext);

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
          todos.map((todo) => (
            <div key={todo.id}>
              <Todo todo={todo} />

              {editingTodo === todo.id ? (
                <div className="p-5 overflow-hidden border-b-2 bg-slate-300">
                  <UpdateTodoForm todo={todo} />
                </div>
              ) : (
                <TodoDetails todo={todo} />
              )}
            </div>
          ))
        ) : (
          <div className="text-3xl text-gray-500">No Todos Found</div>
        )}
      </div>
    )
  );
}
