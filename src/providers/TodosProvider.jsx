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
  isSelecting: false,
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
    case "DELETE_SELECTED":
      return state.filter((todo) => !action.payload.includes(todo.id));
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
  const tempTodos = useRef(null);
  const searchedTodos = useRef(null);
  const selectedTodos = useRef(new Set());

  const hasEditingTodo = useRef(false);
  const hasExpandedTodo = useRef(false);

  const [options, setOptions] = useState(initialOptions);
  const [todos, dispatch] = useReducer(todoReducer, getLocalTodos());

  const addTodo = (todo) => {
    localStorage.setItem("todos", JSON.stringify([...getLocalTodos(), todo]));
    dispatch({ type: "ADD_TODO", payload: todo });
  };

  const doneTodo = (id) => {
    if (searchedTodos.current) {
      searchedTodos.current = searchedTodos.current.map((todo) =>
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
    if (searchedTodos.current) {
      searchedTodos.current = searchedTodos.current.map((todo) =>
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

  const moveToTrash = (id) => {
    const trashedTodos = JSON.parse(localStorage.getItem("trashedTodos")) || [];
    trashedTodos.push(getLocalTodos().find((todo) => todo.id === id));
    localStorage.setItem("trashedTodos", JSON.stringify(trashedTodos));
  };

  const deleteTodo = (id) => {
    if (searchedTodos.current) {
      searchedTodos.current = searchedTodos.current.filter(
        (todo) => todo.id !== id
      );
    }

    moveToTrash(id);

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
      const localTodos = getLocalTodos();

      const trashedTodos =
        JSON.parse(localStorage.getItem("trashedTodos")) || [];

      localStorage.setItem("todos", JSON.stringify([]));

      localStorage.setItem(
        "trashedTodos",
        JSON.stringify([...trashedTodos, ...localTodos])
      );

      dispatch({ type: "DELETE_ALL_TODOS" });
    }
  };

  const deleteSelectedTodos = () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
    } else if (confirm("Selected Todos will be moved to trash, OK ?")) {
      const localTodos = getLocalTodos();

      const trashedTodos =
        JSON.parse(localStorage.getItem("trashedTodos")) || [];

      const todosToTrash = localTodos.filter((todo) =>
        selectedTodos.current.has(todo.id)
      );

      const remainingTodos = localTodos.filter(
        (todo) => !selectedTodos.current.has(todo.id)
      );

      localStorage.setItem("todos", JSON.stringify(remainingTodos));

      localStorage.setItem(
        "trashedTodos",
        JSON.stringify([...todosToTrash, ...trashedTodos])
      );

      if (searchedTodos.current) {
        searchedTodos.current = searchedTodos.current.filter((todo) =>
          selectedTodos.current.has(todo.id)
        );
      }

      setOptions({ ...options, isSelecting: false });

      dispatch({
        type: "DELETE_SELECTED",
        payload: [...selectedTodos.current],
      });

      selectedTodos.current.clear();
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
          ...initialOptions,
          searchQuery: e.target.value,
        });

        dispatch({ type: "SEARCH_TODOS", payload: searchedTodos.current });
      }
    }
  };

  const toggleNameSort = async () => {
    if (hasEditingTodo.current) {
      alert("Please cancel or complete pending edits first !!!");
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
        ...initialOptions,
        currentFilter: "completed",
        searchQuery: options.searchQuery,
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
        ...initialOptions,
        currentFilter: "pending",
        searchQuery: options.searchQuery,
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
    } else {
      tempTodos.current = null;
      searchedTodos.current = null;

      setOptions(initialOptions);
      dispatch({ type: "CLEAR_ALL_OPTIONS" });
    }
  };

  const handleSelect = (id) => {
    selectedTodos.current.has(id)
      ? selectedTodos.current.delete(id)
      : selectedTodos.current.add(id);

    if (selectedTodos.current.size > 0) {
      setOptions({ ...options, isSelecting: true });
    } else {
      setOptions({ ...options, isSelecting: false });
    }
  };

  const clearSelection = () => setOptions({ ...options, isSelecting: false });

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
        handleSelect,
        handleSearch,
        searchedTodos,
        clearSelection,
        toggleNameSort,
        deleteAllTodos,
        hasEditingTodo,
        clearAllOptions,
        filterByPending,
        hasExpandedTodo,
        toggleDueDateSort,
        filterByCompleted,
        deleteSelectedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
