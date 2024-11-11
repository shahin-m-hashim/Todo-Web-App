import Todo from "./Todo";
import { cn } from "../../utils/cn";
import { memo, useContext } from "react";
import TodoContext from "../../providers/TodosProvider";

const TodosList = memo(function TodosList() {
  const { todos, addEditingTodo, removeEditingTodo } = useContext(TodoContext);

  return (
    <div
      id="todos"
      className={cn(
        "h-full overflow-auto",
        todos.length === 0 && "flex justify-center items-center"
      )}
    >
      {todos.length > 0 ? (
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
  );
});

export default TodosList;
