import Todo from "./Todo";
import { cn } from "../../utils/cn";
import { memo, useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

const TodoList = memo(function TodoList() {
  const { todos, addEditingTodo, removeEditingTodo } = useContext(TodoContext);

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
            <Todo
              todo={todo}
              key={todo.id}
              addEditingTodo={addEditingTodo}
              removeEditingTodo={removeEditingTodo}
            />
          ))
        ) : (
          <div className="text-3xl text-gray-500">No Todos Found</div>
        )}
      </div>
    )
  );
});

export default TodoList;
