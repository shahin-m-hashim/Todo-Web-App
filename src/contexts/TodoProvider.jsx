/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { SpinnerContext } from "../components/LoadingSpinner";
import { deleteTodo, getTodos, postTodo, putTodo } from "../backend/todo";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const todoErrorRef = useRef(null);
  const setShowSpinner = useContext(SpinnerContext);

  const [todos, setTodos] = useState({
    data: null,
    error: null,
  });

  const handleError = (error) =>
    setTodos((prev) => ({ ...prev, error: error.message }));

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner("hidden");
    }
  };

  const addTodo = async (newTodo) => {
    try {
      setShowSpinner("flex");
      const res = await postTodo(newTodo);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner("hidden");
    }
  };

  const updateTodo = async (id, new_name, new_desc) => {
    try {
      setShowSpinner("flex");
      const res = await putTodo(id, new_name, new_desc);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner("hidden");
    }
  };

  const removeTodo = async (id) => {
    try {
      setShowSpinner("flex");
      const res = await deleteTodo(id);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner("hidden");
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        removeTodo,
        todoErrorRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
