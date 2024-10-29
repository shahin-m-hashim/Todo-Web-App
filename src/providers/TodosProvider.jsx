/* eslint-disable react/prop-types */
import useMonitorWindow from "../hooks/useMonitorWindow";

import { useState, useEffect, useReducer, createContext } from "react";

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
  const [todos, dispatch] = useReducer(todoReducer, null);

  const [todoUIStates, setTodoUIStates] = useState({
    editingTodo: null,
    expandedTodo: null,
    showAddTodoForm: false,
    showTodoListOptions: true,
  });

  const isEditing = () => {
    if (todoUIStates.editingTodo) {
      alert("Please cancel or complete pending edits first !!!");
      return true;
    }
  };

  const toggleExpand = (id) => {
    if (isEditing()) return;

    setTodoUIStates({
      ...todoUIStates,
      expandedTodo: todoUIStates.expandedTodo === id ? null : id,
    });
  };

  const toggleEdit = (id) => {
    setTodoUIStates({
      ...todoUIStates,
      editingTodo: todoUIStates.editingTodo === id ? null : id,
    });
  };

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
    if (isEditing()) return;

    localStorage.setItem(
      "todos",
      JSON.stringify(todos.filter((todo) => todo.id !== id))
    );
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const deleteAllTodos = () => {
    if (isEditing()) return;

    const confirmed = confirm("All Todos will be moved to trash, OK ?");
    if (confirmed) {
      localStorage.setItem("todos", []);
      dispatch({ type: "DELETE_ALL_TODOS" });
    }
  };

  useMonitorWindow(todoUIStates.editingTodo);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      localStorage.setItem("todos", []);
      dispatch({ type: "SET_TODOS", payload: [] });
    } else {
      dispatch({ type: "SET_TODOS", payload: JSON.parse(localTodos) });
    }
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        doneTodo,
        updateTodo,
        deleteTodo,
        toggleEdit,
        todoUIStates,
        toggleExpand,
        deleteAllTodos,
        setTodoUIStates,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
