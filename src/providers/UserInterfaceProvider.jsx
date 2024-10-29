/* eslint-disable react/prop-types */
import TodoContext from "./TodosProvider";
import { validateField } from "../utils/todo";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const theme = localStorage.getItem("theme") || "light";

const UserInterfaceContext = createContext();

const addTodoFormInputs = {
  name: {
    value: "",
    error: null,
  },
  description: {
    value: "",
    error: null,
  },
  dueDate: {
    value: "",
    error: null,
  },
};

export const UserInterfaceProvider = ({ children }) => {
  const disableAdding = useRef(true);
  const { addTodo, deleteTodo, deleteAllTodos } = useContext(TodoContext);

  const [UIStates, setUIStates] = useState({
    theme,
    editingTodo: null,
    addTodoFormInputs,
    expandedTodo: null,
    disableAdding: false,
    showAddTodoForm: false,
    showTodoListOptions: true,
  });

  const isEditing = () => {
    if (UIStates.editingTodo) {
      alert("Please cancel or complete pending edits first !!!");
      return true;
    }
  };

  const toggleExpand = (id) => {
    if (isEditing()) return;

    setUIStates({
      ...UIStates,
      expandedTodo: UIStates.expandedTodo === id ? null : id,
    });
  };

  const toggleEdit = (id) => {
    setUIStates({
      ...UIStates,
      editingTodo: UIStates.editingTodo === id ? null : id,
    });
  };

  const handleAddTodoFormInputChange = (field, value) => {
    const error = validateField(field, value);

    setUIStates({
      ...UIStates,
      addTodoFormInputs: {
        ...UIStates.addTodoFormInputs,
        [field]: { value, error },
      },
    });
  };

  const handleResetAddTodoForm = () => {
    setUIStates({
      ...UIStates,
      addTodoFormInputs,
    });
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (isEditing()) return;

    if (!disableAdding.current) {
      const { name, description, dueDate } = UIStates.addTodoFormInputs;

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

      setUIStates({
        ...UIStates,
        addTodoFormInputs,
      });

      addTodo(newTodo);
    }
  };

  const handleDeleteTodo = (id) => {
    if (isEditing()) return;
    deleteTodo(id);
  };

  const handleDeleteAllTodos = () => {
    if (isEditing()) return;
    const confirmed = confirm("All Todos will be moved to trash, OK ?");
    if (confirmed) deleteAllTodos();
  };

  const setTheme = (theme) => {
    setUIStates({
      ...UIStates,
      theme,
    });
  };

  const toggleTodoListOptions = () => {
    setUIStates({
      ...UIStates,
      showTodoListOptions: !UIStates.showTodoListOptions,
    });
  };

  const showAddTodoForm = () => {
    setUIStates({
      ...UIStates,
      showAddTodoForm: true,
    });
  };

  const closeAddTodoForm = () => {
    setUIStates({
      ...UIStates,
      showAddTodoForm: false,
    });
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (UIStates.editingTodo) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [UIStates.editingTodo]);

  useEffect(() => {
    localStorage.setItem("theme", UIStates.theme);
  }, [UIStates.theme]);

  useEffect(() => {
    disableAdding.current = !Object.values(UIStates.addTodoFormInputs).every(
      (input) => input.error === null && input.value != ""
    );
  }, [UIStates.addTodoFormInputs]);

  return (
    <UserInterfaceContext.Provider
      value={{
        UIStates,
        setTheme,
        toggleEdit,
        setUIStates,
        toggleExpand,
        handleAddTodo,
        showAddTodoForm,
        handleDeleteTodo,
        closeAddTodoForm,
        handleDeleteAllTodos,
        toggleTodoListOptions,
        handleResetAddTodoForm,
        handleAddTodoFormInputChange,
      }}
    >
      {children}
    </UserInterfaceContext.Provider>
  );
};

export default UserInterfaceContext;
