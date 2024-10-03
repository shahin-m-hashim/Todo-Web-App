/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { SpinnerContext } from "../components/LoadingSpinner";
import { deleteTodo, getTodos, postTodo, putTodo } from "../backend/todo";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const nameInputRef = useRef();
  const descInputRef = useRef();
  const todoErrorRef = useRef(null);

  const setShowSpinner = useContext(SpinnerContext);

  const [addBtnDisabled, setAddBtnDisabled] = useState(false);

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
      setShowSpinner(false);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      setShowSpinner(true);
      setAddBtnDisabled(true);
      const res = await postTodo(newTodo);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner(false);
      setAddBtnDisabled(false);
    }
  };

  const updateTodo = async (id, new_name, new_desc) => {
    try {
      setShowSpinner(true);
      const res = await putTodo(id, new_name, new_desc);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
      return true;
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner(false);
    }
  };

  const removeTodo = async (id) => {
    try {
      setShowSpinner(true);
      const res = await deleteTodo(id);
      setTodos((prev) => ({ ...prev, data: res.data, error: null }));
    } catch (e) {
      handleError(e);
    } finally {
      setShowSpinner(false);
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
        nameInputRef,
        descInputRef,
        addBtnDisabled,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
