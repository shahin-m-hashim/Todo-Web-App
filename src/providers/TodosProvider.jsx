/* eslint-disable react/prop-types */
import { useRef, useState, useEffect, useReducer, createContext } from "react";

const TodoContext = createContext();

const getLocalTodos = () => {
  try {
    return JSON.parse(localStorage.getItem("todos")) || [];
  } catch (error) {
    console.error("Error retrieving todos from local storage:", error);
    return [];
  }
};

const initialOptions = {
  searchQuery: "",
  currentFilter: "",
  currentSort: {
    type: "",
    order: "",
  },
};

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
    case "SORT/NAME_ASC":
      return [...state].sort((a, b) => a.name.localeCompare(b.name));
    case "SORT/NAME_DESC":
      return [...state].sort((a, b) => b.name.localeCompare(a.name));
    case "SORT/DUE_DATE_ASC":
      return [...state].sort((a, b) => a.dueDate.localeCompare(b.dueDate));
    case "SORT/DUE_DATE_DESC":
      return [...state].sort((a, b) => b.dueDate.localeCompare(a.dueDate));
    case "FILTER/COMPLETED":
      return action.payload.filter((todo) => todo.completed);
    case "FILTER/PENDING":
      return action.payload.filter((todo) => !todo.completed);
    case "SEARCH_TODOS":
      return action.payload;
    default:
      return getLocalTodos();
  }
};

export const TodosProvider = ({ children }) => {
  console.log("Rendering Todos Provider");

  const tempTodos = useRef(null);
  const searchedTodos = useRef(null);

  const hasEditingTodo = useRef(false);
  const hasExpandedTodo = useRef(false);

  const [options, setOptions] = useState(initialOptions);
  const [todos, dispatch] = useReducer(todoReducer, getLocalTodos());

  const addTodo = (todo) => {
    localStorage.setItem("todos", JSON.stringify([...getLocalTodos(), todo]));
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const doneTodo = (id) => {
    if (searchedTodos.current || tempTodos.current) {
      searchedTodos.current = searchedTodos.current.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );

      tempTodos.current = tempTodos.current.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      );
    }

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
    if (searchedTodos.current || tempTodos.current) {
      searchedTodos.current = searchedTodos.current.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      );

      tempTodos.current = tempTodos.current.map((todo) =>
        todo.id === updatedTodo.id ? { ...updatedTodo } : todo
      );
    }

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

  const moveToTrash = (trashedTodo) => {
    if (searchedTodos.current || tempTodos.current) {
      searchedTodos.current = searchedTodos.current.filter(
        (todo) => todo.id !== trashedTodo.id
      );

      tempTodos.current = tempTodos.current.filter(
        (todo) => todo.id !== trashedTodo.id
      );
    }

    const trashedTodos = JSON.parse(localStorage.getItem("trashedTodos")) || [];
    localStorage.setItem(
      "trashedTodos",
      JSON.stringify([...trashedTodos, trashedTodo])
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
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (confirm("All Todos will be moved to trash, OK ?")) {
      getLocalTodos().forEach((todo) => moveToTrash(todo));
      localStorage.setItem("todos", JSON.stringify([]));
      dispatch({ type: "DELETE_ALL_TODOS" });
    }
  };

  const handleSearch = (e) => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      if (!e.target.value) {
        clearAllOptions();
      } else {
        tempTodos.current = tempTodos.current || getLocalTodos();

        searchedTodos.current = tempTodos.current.filter((todo) =>
          todo.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setOptions({
          currentSort: "",
          currentFilter: "",
          searchQuery: e.target.value,
        });

        dispatch({ type: "SEARCH_TODOS", payload: searchedTodos.current });
      }
    }
  };

  const toggleNameSort = async () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      if (options.currentSort.order === "ASC") {
        setOptions({
          ...options,
          currentSort: {
            type: "name",
            order: "DESC",
          },
        });

        dispatch({ type: "SORT/NAME_DESC" });
      } else {
        setOptions({
          ...options,
          resetExpanded: true,
          currentSort: {
            type: "name",
            order: "ASC",
          },
        });

        dispatch({ type: "SORT/NAME_ASC" });
      }
    }
  };

  const toggleDueDateSort = async () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      if (options.currentSort.order === "ASC") {
        setOptions({
          ...options,
          currentSort: {
            type: "dueDate",
            order: "DESC",
          },
        });

        dispatch({ type: "SORT/DUE_DATE_DESC" });
      } else {
        setOptions({
          ...options,
          currentSort: {
            type: "dueDate",
            order: "ASC",
          },
        });

        dispatch({ type: "SORT/DUE_DATE_ASC" });
      }
    }
  };

  const filterByCompleted = () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      setOptions({
        ...options,
        currentFilter: "completed",
        currentSort: initialOptions.currentSort,
      });
      dispatch({
        type: "FILTER/COMPLETED",
        payload: searchedTodos.current || getLocalTodos(),
      });
    }
  };

  const filterByPending = () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      setOptions({
        ...options,
        currentFilter: "pending",
        currentSort: initialOptions.currentSort,
      });

      dispatch({
        type: "FILTER/PENDING",
        payload: searchedTodos.current || getLocalTodos(),
      });
    }
  };

  const clearAllOptions = () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (hasExpandedTodo.current) {
      alert("Please close all opened todos !!!");
    } else {
      tempTodos.current = null;
      searchedTodos.current = null;

      setOptions(initialOptions);
      dispatch({ type: "CLEAR_ALL_OPTIONS" });
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (hasEditingTodo.current) {
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
        options,
        doneTodo,
        dispatch,
        updateTodo,
        deleteTodo,
        handleSearch,
        searchedTodos,
        toggleNameSort,
        deleteAllTodos,
        hasEditingTodo,
        clearAllOptions,
        filterByPending,
        hasExpandedTodo,
        toggleDueDateSort,
        filterByCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
