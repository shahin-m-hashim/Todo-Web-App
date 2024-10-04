/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */

import { getTodos } from "../backend/todo";
import { SpinnerContext } from "../components/LoadingSpinner";

import {
  useRef,
  useEffect,
  useContext,
  useReducer,
  createContext,
} from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    default:
      return state || [];
  }
};

export const TodoProvider = ({ children }) => {
  const todoErrorRef = useRef(null);
  const setShowSpinner = useContext(SpinnerContext);
  const [todos, dispatch] = useReducer(todoReducer, null);

  const handleError = (error) =>
    (todoErrorRef.current.innerText = error.message);

  const setTodos = (todos) => {
    dispatch({ type: "SET_TODOS", payload: todos });
  };

  const fetchTodos = async () => {
    try {
      setShowSpinner(true);
      const res = await getTodos();
      dispatch({ type: "SET_TODOS", payload: res.data });
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
        setTodos,
        handleError,
        todoErrorRef,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
