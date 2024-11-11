/* eslint-disable react/prop-types */
import { useRef, useEffect, useReducer, createContext, useState } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
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
    case "RESTORE_TODO":
      return [...state, action.payload];
    case "RESTORE_ALL_TODOS":
      return [...state, ...action.payload];
    case "SORT_BY_NAME_ASC":
      return [...state].sort((a, b) => a.name.localeCompare(b.name));
    case "SORT_BY_NAME_DESC":
      return [...state].sort((a, b) => b.name.localeCompare(a.name));
    case "SORT_BY_DUE_DATE_ASC":
      return [...state].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    case "SORT_BY_DUE_DATE_DESC":
      return [...state].sort((a, b) => b.dueDate.localeCompare(a.dueDate));
    case "FILTER_BY_COMPLETED":
      return (JSON.parse(localStorage.getItem("todos")) || []).filter(
        (todo) => todo.completed
      );
    case "FILTER_BY_PENDING":
      return (JSON.parse(localStorage.getItem("todos")) || []).filter(
        (todo) => !todo.completed
      );
    case "CLEAR_FILTERS":
      return JSON.parse(localStorage.getItem("todos")) || [];
    default:
      return state || [];
  }
};

export const TodosProvider = ({ children }) => {
  const editingTodos = useRef(new Set());
  const [isFiltering, setIsFiltering] = useState(false);

  const getLocalTodos = () => {
    try {
      return JSON.parse(localStorage.getItem("todos")) || [];
    } catch (error) {
      console.error("Error retrieving todos from local storage:", error);
      return [];
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, getLocalTodos());

  const addTodo = (todo) => {
    localStorage.setItem("todos", JSON.stringify([...getLocalTodos(), todo]));
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const doneTodo = (id) => {
    localStorage.setItem(
      "todos",
      JSON.stringify(
        getLocalTodos().map((todo) =>
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
        getLocalTodos().map((todo) =>
          todo.id === updatedTodo.id ? { ...updatedTodo } : todo
        )
      )
    );
    dispatch({ type: "UPDATE_TODO", payload: updatedTodo });
  };

  const moveToTrash = (todo) => {
    const trashedTodos = JSON.parse(localStorage.getItem("trashedTodos")) || [];
    localStorage.setItem(
      "trashedTodos",
      JSON.stringify([...trashedTodos, todo])
    );
  };

  const deleteTodo = (id) => {
    moveToTrash(todos.find((todo) => todo.id === id));
    localStorage.setItem(
      "todos",
      JSON.stringify(getLocalTodos().filter((todo) => todo.id !== id))
    );
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const deleteAllTodos = () => {
    if (editingTodos.current.size > 0) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (confirm("All Todos will be moved to trash, OK ?")) {
      getLocalTodos().forEach((todo) => moveToTrash(todo));
      localStorage.setItem("todos", JSON.stringify([]));
      dispatch({ type: "DELETE_ALL_TODOS" });
    }
  };

  const addEditingTodo = (id) => editingTodos.current.add(id);

  const removeEditingTodo = (id) => editingTodos.current.delete(id);

  const filterByCompleted = () => {
    setIsFiltering(true);
    dispatch({ type: "FILTER_BY_COMPLETED" });
  };

  const filterByPending = () => {
    setIsFiltering(true);
    dispatch({ type: "FILTER_BY_PENDING" });
  };

  const clearFilters = () => {
    setIsFiltering(false);
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
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
        dispatch,
        updateTodo,
        deleteTodo,
        isFiltering,
        editingTodos,
        clearFilters,
        addEditingTodo,
        deleteAllTodos,
        filterByPending,
        filterByCompleted,
        removeEditingTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
