/* eslint-disable react/prop-types */
import {
  useRef,
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";

import TodoContext from "./TodosProvider";
import { validateField } from "../utils/todo";

const localTheme = localStorage.getItem("theme") || "light";

const UserInterfaceContext = createContext();

const initialAddTodoFormInputs = {
  name: { value: "", error: null },
  dueDate: { value: "", error: null },
  description: { value: "", error: null },
};

export const UserInterfaceProvider = ({ children }) => {
  const disableAdding = useRef(true);
  const { addTodo, deleteTodo, deleteAllTodos } = useContext(TodoContext);

  const [theme, setTheme] = useState(localTheme);
  const [editingTodo, setEditingTodo] = useState(null);
  const [expandedTodo, setExpandedTodo] = useState(null);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showTodoListOptions, setShowTodoListOptions] = useState(true);

  const [addTodoFormInputs, setAddTodoFormInputs] = useState(
    initialAddTodoFormInputs
  );

  const isEditing = useCallback(() => {
    if (editingTodo) {
      alert("Please cancel or complete pending edits first !!!");
      return true;
    }
  }, [editingTodo]);

  const toggleExpand = useCallback(
    (id) => {
      if (isEditing()) return;
      setExpandedTodo(expandedTodo === id ? null : id);
    },
    [expandedTodo, isEditing]
  );

  const toggleEdit = useCallback(
    (id) => {
      setEditingTodo(editingTodo === id ? null : id);
    },
    [editingTodo]
  );

  const handleAddTodoFormInputChange = useCallback((field, value) => {
    const error = validateField(field, value);
    setAddTodoFormInputs((prevInputs) => ({
      ...prevInputs,
      [field]: { value, error },
    }));
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (isEditing() || disableAdding.current) return;

    const { name, description, dueDate } = addTodoFormInputs;
    const newTodo = {
      id: Date.now(),
      completed: false,
      createdOn: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
      name: name.value,
      description: description.value,
      dueDate: dueDate.value.split("-").reverse().join("/"),
    };

    addTodo(newTodo);
    setAddTodoFormInputs(initialAddTodoFormInputs);
  };

  const handleDeleteTodo = useCallback(
    (id) => {
      if (isEditing()) return;
      deleteTodo(id);
    },
    [deleteTodo, isEditing]
  );

  const handleDeleteAllTodos = useCallback(() => {
    if (isEditing()) return;
    if (confirm("All Todos will be moved to trash, OK ?")) deleteAllTodos();
  }, [deleteAllTodos, isEditing]);

  const resetAddTodoForm = useCallback(() => {
    setAddTodoFormInputs(initialAddTodoFormInputs);
  }, []);

  const toggleShowTodoListOptions = useCallback(() => {
    setShowTodoListOptions((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (editingTodo) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [editingTodo]);

  useEffect(() => localStorage.setItem("theme", theme), [theme]);

  useEffect(() => {
    disableAdding.current = !Object.values(addTodoFormInputs).every(
      (input) => input.error === null && input.value !== ""
    );
  }, [addTodoFormInputs]);

  return (
    <UserInterfaceContext.Provider
      value={{
        theme,
        setTheme,
        toggleEdit,
        editingTodo,
        expandedTodo,
        toggleExpand,
        handleAddTodo,
        setEditingTodo,
        showAddTodoForm,
        handleDeleteTodo,
        resetAddTodoForm,
        addTodoFormInputs,
        setShowAddTodoForm,
        showTodoListOptions,
        handleDeleteAllTodos,
        toggleShowTodoListOptions,
        handleAddTodoFormInputChange,
      }}
    >
      {children}
    </UserInterfaceContext.Provider>
  );
};

export default UserInterfaceContext;
