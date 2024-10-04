/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { getTodos } from "../backend/todo";
import { SpinnerContext } from "../components/LoadingSpinner";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const todoErrorRef = useRef(null);
  const [todos, setTodos] = useState(null);
  const setShowSpinner = useContext(SpinnerContext);

  const handleError = (error) =>
    (todoErrorRef.current.innerText = error.message);

  const addTodo = (newTodo) => setTodos((prev) => [...prev, newTodo]);

  const updateTodo = (id, new_name, new_desc) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            name: new_name,
            description: new_desc,
          };
        }
        return todo;
      })
    );
  };

  const removeTodo = (id) => {
    setTimeout(() => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }, 100);
  };

  const fetchTodos = async () => {
    try {
      const res = await getTodos();
      setTodos(res.data || []);
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
        handleError,
        todoErrorRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
