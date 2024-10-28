const validateField = (field, value) => {
  if (field === "name" && !value) {
    return "Name is required";
  } else if (field === "description" && !value) {
    return "Description is required";
  } else if (field === "dueDate") {
    if (!value) {
      return "Due date is required";
    }
    const today = new Date();
    const date = new Date(value);
    return date < today ? "Due date cannot be in the past" : null;
  }

  return null;
};

export { validateField };
