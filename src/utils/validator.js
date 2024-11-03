const validateName = (value) => {
  if (!value) {
    return "Name is required";
  } else if (value.length < 3) {
    return "Name must be at least 3 characters";
  } else if (value.length > 20) {
    return "Name must be at most 20 characters";
  }

  return null;
};

const validateDescription = (value) => {
  if (!value) {
    return "Description is required";
  } else if (value.length < 10) {
    return "Description must be at least 10 characters";
  } else if (value.length > 500) {
    return "Description must be at most 500 characters";
  }

  return null;
};

const validateDueDate = (value) => {
  if (!value) {
    return "Due Date is required";
  }

  const today = new Date();
  const date = new Date(value);
  if (date < today) {
    return "Due date cannot be in the past";
  }

  return null;
};

export { validateName, validateDescription, validateDueDate };
