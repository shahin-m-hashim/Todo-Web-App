/* eslint-disable react/prop-types */
import { createContext, useEffect, useRef, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const errorRef = useRef();
  const [todos, setTodos] = useState([]);

  useEffect(() => console.log(todos), [todos]);

  const addTodo = (todo) => setTodos([...todos, todo]);

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const updateTodo = (id, new_name, new_desc) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, name: new_name, description: new_desc };
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider
      value={{ todos, errorRef, addTodo, deleteTodo, updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
