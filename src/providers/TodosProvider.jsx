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
    case "FETCH_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, action.payload];
    case "UPDATE_TODO":
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              name: action.payload.new_name,
              description: action.payload.new_desc,
            }
          : todo
      );
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const todoErrorRef = useRef(null);
  const setShowSpinner = useContext(SpinnerContext);
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleError = (error) =>
    (todoErrorRef.current.innerText = error.message);

  const addTodo = (newTodo) => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };

  const updateTodo = (id, new_name, new_desc) => {
    dispatch({ type: "UPDATE_TODO", payload: { id, new_name, new_desc } });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  const fetchTodos = async () => {
    try {
      setShowSpinner(true);
      const res = await getTodos();
      dispatch({ type: "FETCH_TODOS", payload: res.data || [] });
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
