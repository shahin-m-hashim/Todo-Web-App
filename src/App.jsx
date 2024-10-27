import "./index.css";
import { cn } from "./utils/cn";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "./providers/ThemeContext";
import { useContext, useEffect, useState } from "react";
import useMonitorWindow from "./hooks/useMonitorWindow";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Todo 1",
      description: "This is the first todo",
    },
    {
      id: 2,
      name: "Todo 2",
      description: "This is the second todo",
    },
    {
      id: 3,
      name: "Todo 3",
      description: "This is the third todo",
    },
    {
      id: 4,
      name: "Todo 4",
      description: "This is the fourth todo",
    },
    {
      id: 5,
      name: "Todo 5",
      description: "This is the fifth todo",
    },
    {
      id: 6,
      name: "Todo 6",
      description: "This is the sixth todo",
    },
  ]);

  const [expandedTodo, setExpandedTodo] = useState(null);
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  const [showTodoListOptions, setShowTodoListOptions] = useState(true);

  const [editTodo, setEditTodo] = useState({
    id: null,
    isEditing: false,
  });

  const toggleExpand = (id) => {
    if (editTodo.isEditing) {
      alert("Please cancel or complete pending edits first !!!");
      return;
    }

    setExpandedTodo(expandedTodo === id ? null : id);
  };

  useMonitorWindow(editTodo.isEditing);

  return (
    <main className={`app theme-${theme} bg-color`}>
      <div className="absolute inset-0 z-10 hidden backdrop-blur-sm"></div>
      <section className="h-full p-5 md:mx-16">
        <header className="mb-5">
          <h1 className="text-4xl font-semibold text-center text-color">
            TODO WEB APP
          </h1>
        </header>
        <div className="bg-white border-2 border-gray-100 ">
          {/* TODO LIST HEADER */}
          <div className="flex justify-between md:grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
            <div className="flex items-center gap-3">
              <span className="hidden md:inline">Switch Themes ?</span>
              <ThemeBtn
                setTheme={setTheme}
                theme="light"
                backgroundColor="hsl(32, 67%, 82%)"
              />
              <ThemeBtn
                setTheme={setTheme}
                theme="dark"
                backgroundColor="hsl(207, 26%, 17%)"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                className="ml-2 mr-auto"
                onClick={() => setShowTodoListOptions(!showTodoListOptions)}
              >
                <img
                  alt="settings"
                  className="h-6"
                  src="assets/icons/hamburger.png"
                />
              </button>

              <button
                className="md:hidden"
                onClick={() => setShowAddTodoForm(true)}
              >
                <img
                  className="h-8"
                  alt="show-add-todo-form"
                  src="assets/icons/add.png"
                />
              </button>

              <div className="text-sm md:text-base">
                <span>{todos.filter((todo) => todo.completed).length}/</span>
                <span>{todos.length}</span>
                <span>&nbsp;completed</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] relative">
            <div className="flex flex-col md:border-r-2 border-r-gray-300 h-[75vh]">
              {/* Todo List Options */}
              <div
                className={cn(
                  "flex flex-col flex-shrink-0 gap-3 overflow-hidden transition-all border-b-2 bg-slate-300",
                  showTodoListOptions
                    ? "p-5 h-[200px] lg:h-[158px]"
                    : "px-5 py-0 h-0"
                )}
              >
                {/* Search Todos  */}
                <input
                  type="text"
                  placeholder="Search Todos"
                  className="p-1 mb-1 border-2 rounded-md"
                />

                <div className="flex flex-col justify-between gap-3 lg:flex-row">
                  <div className="flex flex-col gap-3">
                    {/* Sort Todos */}
                    <div className="flex items-center gap-3">
                      <div>Sort By:</div>
                      <div className="flex gap-3">
                        <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                          Name
                        </button>
                        <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                          Date
                        </button>
                      </div>
                    </div>

                    {/* Filter Todos */}
                    <div className="flex items-center gap-3">
                      <div>Filter By:</div>
                      <div className="flex gap-3">
                        <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                          Completed
                        </button>
                        <button className="text-xs text-white btn bg-btn hover:bg-btn-hover">
                          Pending
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 text-xs lg:text-sm">
                    {/* Clear Todo List */}
                    <div>
                      <button className="p-2 text-white bg-red-600 lg:px-4 lg:py-2 hover:bg-red-500">
                        Clear All
                      </button>
                    </div>

                    {/* Check Trash */}
                    <div>
                      <button className="p-2 text-black bg-yellow-300 lg:px-4 lg:py-2 hover:bg-yellow-400">
                        View Trash
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Todo List */}
              <div
                id="todos"
                className={cn(
                  "overflow-auto",
                  !todos.length && "h-full flex justify-center items-center"
                )}
              >
                {todos.length ? (
                  todos.map((todo) => (
                    <div id={todo.id} key={todo.id}>
                      <div className="relative flex items-center justify-between h-12 pl-5 border-b-2">
                        <div className="py-3 text-sm md:text-base">
                          <span>{todo.name}</span>
                          <span>&nbsp;&nbsp;</span>
                          {todo.completed ? (
                            <span className="px-2 text-xs text-white bg-green-400 rounded-full"></span>
                          ) : (
                            <span className="px-2 text-xs text-white bg-red-400 rounded-full"></span>
                          )}
                        </div>
                        <div className="flex flex-shrink-0 h-full">
                          <div className="flex items-center px-3 bg-blue-400">
                            <button onClick={() => toggleExpand(todo.id)}>
                              <img
                                alt="expand-todo"
                                src="assets/icons/expand-up.png"
                                className="h-6"
                                style={{
                                  transform:
                                    expandedTodo === todo.id
                                      ? "rotate(180deg)"
                                      : "rotate(0)",
                                  transition: "transform 0.3s linear 0.1s",
                                }}
                              />
                            </button>
                          </div>

                          <div
                            className={cn(
                              "flex items-center px-3",
                              todo.completed ? "bg-gray-300" : "bg-green-400"
                            )}
                          >
                            {expandedTodo === todo.id && !todo.completed ? (
                              <button
                                onClick={() =>
                                  setEditTodo({
                                    id: todo.id,
                                    isEditing: true,
                                  })
                                }
                              >
                                <img
                                  alt="edit-todo"
                                  className="h-6"
                                  src="assets/icons/edit.svg"
                                />
                              </button>
                            ) : (
                              <button
                                disabled={todo.completed}
                                className={todo.completed && "cursor-auto"}
                              >
                                <img
                                  alt="done-todo"
                                  src="assets/icons/done.png"
                                  className="h-6"
                                />
                              </button>
                            )}
                          </div>

                          <button className="flex items-center px-3 bg-red-400">
                            <img
                              className="h-6"
                              alt="delete-todo"
                              src="assets/icons/delete.svg"
                            />
                          </button>
                        </div>
                      </div>

                      {editTodo.id === todo.id && editTodo.isEditing ? (
                        /* Expanded Todo Edit Form */
                        <div className="p-5 overflow-hidden border-b-2 bg-slate-300">
                          <form className="flex flex-col">
                            <input
                              type="text"
                              placeholder="Enter New Name"
                              className="p-2 mb-3 border-2 rounded-md"
                            />
                            <textarea
                              rows={3}
                              placeholder="Enter New Description"
                              className="p-2 mb-3 border-2 rounded-md"
                            ></textarea>
                            <input
                              type="date"
                              className="p-2 mb-3 border-2 rounded-md"
                            />
                            <div className="flex gap-3">
                              <button className="text-white btn bg-btn hover:bg-btn-hover">
                                Update
                              </button>
                              <button
                                onClick={() =>
                                  setEditTodo({ id: null, isEditing: false })
                                }
                                className="text-white bg-btn btn hover:bg-btn-hover"
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      ) : (
                        /* Expanded Todo Details */
                        <div
                          className="overflow-hidden border-b-2 bg-slate-300"
                          style={{
                            maxHeight:
                              expandedTodo === todo.id ? "2000px" : "0",
                            padding:
                              expandedTodo === todo.id
                                ? "1.25rem"
                                : "0 1.25rem 0 1.25rem",
                            transition: "all 0.5s ease-in-out",
                          }}
                        >
                          <div className="flex flex-col justify-between gap-3 mb-3 md:flex-row">
                            <h4 className="text-lg font-semibold ">
                              {todo.name}
                            </h4>
                            <div>
                              <p>
                                <span className="font-semibold text-blue-500">
                                  Created:&nbsp;
                                </span>
                                <span>{todo.created}</span>
                              </p>
                              {!todo.completed && (
                                <p>
                                  <span className="font-semibold text-red-500">
                                    Due:&nbsp;
                                  </span>
                                  <span>{todo.due}</span>
                                </p>
                              )}
                            </div>
                          </div>
                          <h5 className="mb-1 text-lg font-bold underline underline-offset-4">
                            Description
                          </h5>
                          <p>{todo.description}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-3xl text-gray-500">No Todos Found</div>
                )}
              </div>
            </div>

            <form
              className={cn(
                "bg-[#fefdf8] static p-3 flex-col justify-between gap-3",
                showAddTodoForm
                  ? "flex absolute md:static md:z-0 z-40 h-[75vh] inset-x-0"
                  : "hidden md:flex"
              )}
            >
              <div className="relative flex flex-col">
                <button
                  onClick={() => setShowAddTodoForm(false)}
                  className="absolute top-0 right-0 p-1 bg-red-400 rounded-full md:hidden hover:bg-red-300 "
                >
                  <img
                    alt="close"
                    className="h-5"
                    src="assets/icons/close.svg"
                  />
                </button>

                <h1 className="mb-3 text-lg">Add a todo</h1>
                <input
                  type="text"
                  className="p-2 mb-3 border-2 rounded-md"
                  placeholder="Name"
                />
                <textarea
                  rows={3}
                  placeholder="Description"
                  className="p-2 mb-3 border-2 rounded-md"
                />
                <input type="date" className="p-2 mb-3 border-2 rounded-md" />
                <button className="text-white btn bg-btn hover:bg-btn-hover">
                  Add
                </button>
              </div>
              <button className="text-white btn bg-btn-hover hover:bg-btn">
                Reset
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
