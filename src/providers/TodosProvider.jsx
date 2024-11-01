/* eslint-disable react/prop-types */
import {
  useEffect,
  useReducer,
  createContext,
  useRef,
  useCallback,
} from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...action.payload } : todo
      );
    case "SET_TODO_COMPLETED":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: action.payload.completed }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "DELETE_ALL_TODOS":
      return [];
    default:
      return state || [];
  }
};

export const TodosProvider = ({ children }) => {
  const editingTodos = useRef(new Set());
  const [todos, dispatch] = useReducer(todoReducer, null);

  const isEditsPending = useCallback(() => {
    if (editingTodos.current.size > 0) {
      alert("Please cancel or complete pending edits first !!!");
      return true;
    }
    return false;
  }, []);

  const addTodo = (todo) => {
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const doneTodo = (id) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: true } : todo
        )
      )
    );
    dispatch({ type: "SET_TODO_COMPLETED", payload: { id, completed: true } });
  };

  const updateTodo = (updatedTodo) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        todos.map((todo) =>
          todo.id === updatedTodo.id ? { ...updatedTodo } : todo
        )
      )
    );
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
  };

  const deleteTodo = (id) => {
    if (!isEditsPending()) {
      localStorage.setItem(
        "todos",
        JSON.stringify(todos.filter((todo) => todo.id !== id))
      );
      dispatch({ type: "DELETE_TODO", payload: id });
    }
  };

  const deleteAllTodos = () => {
    if (!isEditsPending()) {
      if (confirm("All Todos will be moved to trash, OK ?")) {
        localStorage.setItem("todos", []);
        dispatch({ type: "DELETE_ALL_TODOS" });
      }
    }
  };

  const addEditingTodo = (id) => editingTodos.current.add(id);

  const removeEditingTodo = (id) => editingTodos.current.delete(id);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(localTodos) });
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
      dispatch({ type: "SET_TODOS", payload: [] });
    }

    const handleBeforeUnload = (e) => {
      if (editingTodos.current.size > 0) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        doneTodo,
        updateTodo,
        deleteTodo,
        addEditingTodo,
        deleteAllTodos,
        removeEditingTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
