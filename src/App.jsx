import "./index.css";
import { useContext, useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "./providers/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [expandedTodo, setExpandedTodo] = useState(null);

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

  const [showTodoListOptions, setShowTodoListOptions] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (editTodo.isEditing) {
        e.preventDefault();
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [editTodo.isEditing]);

  const [todos, setTodos] = useState([
    {
      id: "123",
      name: "Learn Front End Development",
      created: "2022-06-31",
      due: "2022-07-05",
      completed: false,
      description: `Ab omnis mollitia voluptas. Quae voluptas ullam at et optio id alias dolorem. 
        Omnis totam sit adipisci vero. Deleniti praesentium commodi incidunt. Reprehenderit 
        animi doloremque quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero 
        ossimus animi porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam 
        aspernatur dolores. Vero consectetur maiores eaque incidunt consequatur tenetur neque 
        dolore. A harum accusantium. Perferendis aut odio sunt asperiores repudiandae et. 
        Eius et similique quidem voluptas nihil possimus natus commodi. Optio est quas. 
        Tempora at ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia voluptas. 
        Quae voluptas ullam at et optio id alias dolorem. Omnis totam sit adipisci vero. 
        Deleniti praesentium commodi incidunt. Reprehenderit animi doloremque quia 
        voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero possimus animi 
        porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam aspernatur dolores. 
        Vero consectetur maiores eaque incidunt consequatur tenetur neque dolore. A harum accusantium. 
        Perferendis aut odio sunt asperiores repudiandae et. Eius et similique quidem voluptas nihil 
        possimus natus commodi. Optio est quas. Tempora at ipsa ipsum deserunt dolorem explicabo.`,
    },
    {
      id: "256",
      name: "Learn Front End Development",
      created: "2022-06-31",
      due: "2022-07-05",
      completed: true,
      description: `Ab omnis mollitia voluptas. Quae voluptas ullam at et optio id alias dolorem. 
        Omnis totam sit adipisci vero. Deleniti praesentium commodi incidunt. Reprehenderit 
        animi doloremque quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero 
        ossimus animi porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam 
        aspernatur dolores. Vero consectetur maiores eaque incidunt consequatur tenetur neque 
        dolore. A harum accusantium. Perferendis aut odio sunt asperiores repudiandae et. 
        Eius et similique quidem voluptas nihil possimus natus commodi. Optio est quas. 
        Tempora at ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia voluptas. 
        Quae voluptas ullam at et optio id alias dolorem. Omnis totam sit adipisci vero. 
        Deleniti praesentium commodi incidunt. Reprehenderit animi doloremque quia 
        voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero possimus animi 
        porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam aspernatur dolores. 
        Vero consectetur maiores eaque incidunt consequatur tenetur neque dolore. A harum accusantium. 
        Perferendis aut odio sunt asperiores repudiandae et. Eius et similique quidem voluptas nihil 
        possimus natus commodi. Optio est quas. Tempora at ipsa ipsum deserunt dolorem explicabo.`,
    },
    {
      id: "789",
      name: "Learn Front End Development",
      created: "2022-06-31",
      due: "2022-07-05",
      completed: false,
      description: `Ab omnis mollitia voluptas. Quae voluptas ullam at et optio id alias dolorem. 
        Omnis totam sit adipisci vero. Deleniti praesentium commodi incidunt. Reprehenderit 
        animi doloremque quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero 
        ossimus animi porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam 
        aspernatur dolores. Vero consectetur maiores eaque incidunt consequatur tenetur neque 
        dolore. A harum accusantium. Perferendis aut odio sunt asperiores repudiandae et. 
        Eius et similique quidem voluptas nihil possimus natus commodi. Optio est quas. 
        Tempora at ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia voluptas. 
        Quae voluptas ullam at et optio id alias dolorem. Omnis totam sit adipisci vero. 
        Deleniti praesentium commodi incidunt. Reprehenderit animi doloremque quia 
        voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero possimus animi 
        porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam aspernatur dolores. 
        Vero consectetur maiores eaque incidunt consequatur tenetur neque dolore. A harum accusantium. 
        Perferendis aut odio sunt asperiores repudiandae et. Eius et similique quidem voluptas nihil 
        possimus natus commodi. Optio est quas. Tempora at ipsa ipsum deserunt dolorem explicabo.`,
    },
    {
      id: "462",
      name: "Learn Front End Development",
      created: "2022-06-31",
      due: "2022-07-05",
      completed: false,
      description: `Ab omnis mollitia voluptas. Quae voluptas ullam at et optio id alias dolorem. 
        Omnis totam sit adipisci vero. Deleniti praesentium commodi incidunt. Reprehenderit 
        animi doloremque quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero 
        ossimus animi porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam 
        aspernatur dolores. Vero consectetur maiores eaque incidunt consequatur tenetur neque 
        dolore. A harum accusantium. Perferendis aut odio sunt asperiores repudiandae et. 
        Eius et similique quidem voluptas nihil possimus natus commodi. Optio est quas. 
        Tempora at ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia voluptas. 
        Quae voluptas ullam at et optio id alias dolorem. Omnis totam sit adipisci vero. 
        Deleniti praesentium commodi incidunt. Reprehenderit animi doloremque quia 
        voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero possimus animi 
        porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam aspernatur dolores. 
        Vero consectetur maiores eaque incidunt consequatur tenetur neque dolore. A harum accusantium. 
        Perferendis aut odio sunt asperiores repudiandae et. Eius et similique quidem voluptas nihil 
        possimus natus commodi. Optio est quas. Tempora at ipsa ipsum deserunt dolorem explicabo.`,
    },
    {
      id: "as1",
      name: "Learn Front End Development",
      created: "2022-06-31",
      due: "2022-07-05",
      completed: true,
      description: `Ab omnis mollitia voluptas. Quae voluptas ullam at et optio id alias dolorem. 
        Omnis totam sit adipisci vero. Deleniti praesentium commodi incidunt. Reprehenderit 
        animi doloremque quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero 
        ossimus animi porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam 
        aspernatur dolores. Vero consectetur maiores eaque incidunt consequatur tenetur neque 
        dolore. A harum accusantium. Perferendis aut odio sunt asperiores repudiandae et. 
        Eius et similique quidem voluptas nihil possimus natus commodi. Optio est quas. 
        Tempora at ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia voluptas. 
        Quae voluptas ullam at et optio id alias dolorem. Omnis totam sit adipisci vero. 
        Deleniti praesentium commodi incidunt. Reprehenderit animi doloremque quia 
        voluptatem ratione. Eaque ut et aut cupiditate et. Aut vero possimus animi 
        porro. Fugit dolorum quis quidem debitis natus explicabo quibusdam aspernatur dolores. 
        Vero consectetur maiores eaque incidunt consequatur tenetur neque dolore. A harum accusantium. 
        Perferendis aut odio sunt asperiores repudiandae et. Eius et similique quidem voluptas nihil 
        possimus natus commodi. Optio est quas. Tempora at ipsa ipsum deserunt dolorem explicabo.`,
    },
  ]);

  return (
    <main className={`app theme-${theme} bg-color`}>
      <div className="absolute inset-0 hidden backdrop-blur-sm"></div>
      <section className="h-full p-5 md:mx-16">
        <header className="mb-5">
          <h1 className="text-4xl font-semibold text-center text-color">
            TODO WEB APP
          </h1>
        </header>
        <div className="bg-white border-2 border-gray-100 ">
          {/* TODO LIST HEADER */}
          <div className="grid grid-cols-[2fr,1fr] bg-[#fbf5ed] pl-5 p-3 border-b-2 border-b-gray-300">
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

            <div className="flex">
              <img
                alt="settings"
                className="h-6 ml-auto md:mr-auto md:ml-2"
                src="assets/icons/hamburger.png"
                onClick={() => setShowTodoListOptions(!showTodoListOptions)}
              />
              <div className="hidden md:block">
                <span>{todos.filter((todo) => todo.completed).length}/</span>
                <span>{todos.length}</span>
                <span>&nbsp;todos completed</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr]">
            <div className="flex flex-col md:border-r-2 border-r-gray-300">
              {/* Todo List Options */}
              {showTodoListOptions && (
                <div className="flex flex-col gap-3 px-5 py-5 border-b-2 xl:py-3 xl:flex-row xl:items-center xl:justify-between">
                  {/* Search Todos  */}
                  <input
                    type="text"
                    placeholder="Search Todos"
                    className="p-1 border-2 rounded-md"
                  />

                  {/* Sort Todos */}
                  <div className="flex items-center gap-3">
                    <div>Sort By:</div>
                    <div className="flex gap-3">
                      <button className="text-xs text-white bg-btn hover:bg-btn-hover">
                        Name
                      </button>
                      <button className="text-xs text-white bg-btn hover:bg-btn-hover">
                        Date
                      </button>
                    </div>
                  </div>

                  {/* Filter Todos */}
                  <div className="flex items-center gap-3">
                    <div>Filter By:</div>
                    <div className="flex gap-3">
                      <button className="text-xs text-white bg-btn hover:bg-btn-hover">
                        Completed
                      </button>
                      <button className="text-xs text-white bg-btn hover:bg-btn-hover">
                        Pending
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {/* Clear Todo List */}
                    <div>
                      <button className="text-sm text-white bg-red-600 hover:bg-red-500">
                        Clear All
                      </button>
                    </div>

                    {/* Check Trash */}
                    <div>
                      <button className="text-sm text-black bg-yellow-300 hover:bg-yellow-400">
                        View Trash
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="overflow-auto"
                style={{ height: showTodoListOptions ? "67vh" : "75vh" }}
              >
                {todos.length ? (
                  todos.map((todo) => (
                    <div id={todo.id} key={todo.id} className="todoItem">
                      <div className="flex items-center justify-between h-12 pl-5 border-b-2">
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
                            <img
                              alt="expand"
                              src="assets/icons/expand-up.png"
                              className="h-6 cursor-pointer"
                              style={{
                                transform:
                                  expandedTodo === todo.id
                                    ? "rotate(180deg)"
                                    : "rotate(0)",
                                transition: "transform 0.3s linear 0.1s",
                              }}
                              onClick={() => toggleExpand(todo.id)}
                            />
                          </div>

                          {!todo.completed && (
                            <div className="flex items-center px-3 bg-green-400">
                              {expandedTodo === todo.id ? (
                                <img
                                  alt="edit"
                                  src="assets/icons/edit.svg"
                                  className="h-6 cursor-pointer"
                                  onClick={() =>
                                    setEditTodo({
                                      id: todo.id,
                                      isEditing: true,
                                    })
                                  }
                                />
                              ) : (
                                <img
                                  alt="done"
                                  src="assets/icons/done.png"
                                  className="h-6 cursor-pointer"
                                />
                              )}
                            </div>
                          )}

                          <div className="relative flex items-center px-3 bg-red-400 group">
                            <img
                              alt="delete"
                              src="assets/icons/delete.svg"
                              className="h-6 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>

                      {editTodo.id === todo.id && editTodo.isEditing ? (
                        /* Expanded Todo Edit Form */
                        <div className="p-5 overflow-hidden border-b-2 bg-slate-300">
                          <form className="flex flex-col">
                            <input
                              type="text"
                              className="p-2 mb-3 border-2 rounded-md"
                              placeholder="Enter New Name"
                            />
                            <textarea
                              rows={3}
                              className="p-2 mb-3 border-2 rounded-md"
                              placeholder="Enter New Description"
                            ></textarea>
                            <input
                              type="date"
                              className="p-2 mb-3 border-2 rounded-md"
                            />
                            <div className="flex gap-3">
                              <button className="text-white bg-btn hover:bg-btn-hover">
                                Update
                              </button>
                              <button
                                onClick={() =>
                                  setEditTodo({ id: null, isEditing: false })
                                }
                                className="text-white bg-btn hover:bg-btn-hover"
                              >
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      ) : (
                        /* Expanded Todo Details */
                        <div
                          className="border-b-2 bg-slate-300"
                          style={{
                            overflow: "hidden",
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
                  <div className="flex items-center justify-center h-full text-2xl text-gray-500">
                    No Todos Found
                  </div>
                )}
              </div>
            </div>

            <form className="bg-[#fefdf8] absolute z-50 inset-5 md:static p-3 hidden md:flex flex-col justify-between gap-3">
              <div className="flex flex-col">
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
                <input
                  type="date"
                  className="p-2 mb-3 border-2 rounded-md"
                  placeholder="Date"
                />
                <button className="text-white bg-btn hover:bg-btn-hover">
                  Add
                </button>
              </div>
              <button className="text-white bg-btn-hover hover:bg-btn">
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
