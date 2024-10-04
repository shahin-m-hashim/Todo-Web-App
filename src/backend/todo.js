const todos = localStorage.getItem("todos");
if (!todos) {
  localStorage.setItem("todos", JSON.stringify([]));
}

const getTodos = () => {
  return new Promise((resolve) => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    setTimeout(() => {
      resolve({
        data: todos,
        status: 200,
      });
      // reject(new Error("Failed to fetch todos"));
    }, 500);
  });
};

const postTodo = (todo) => {
  return new Promise((resolve) => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTimeout(() => {
      resolve({
        data: true,
        status: 200,
      });
    }, 500);
  });
};

const putTodo = (id, new_name, new_desc) => {
  return new Promise((resolve) => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.name = new_name || todo.name;
        todo.description = new_desc || todo.description;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    setTimeout(() => {
      resolve({
        data: true,
        status: 200,
      });
    }, 500);
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve) => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTimeout(() => {
      resolve({
        data: true,
        status: 200,
      });
    }, 500);
  });
};

export { getTodos, postTodo, putTodo, deleteTodo };
