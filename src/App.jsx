import "./index.css";
import { useContext, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "./providers/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [expandedTodo, setExpandedTodo] = useState(null);

  const toggleExpand = (id) => setExpandedTodo(expandedTodo === id ? null : id);

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
          <div className="flex bg-[#fbf5ed] pl-5 p-3 justify-between border-b-2 border-b-gray-300">
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
            <div>0/3 todos completed</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[3fr,1fr]">
            <div className="flex flex-col md:border-r-2 border-r-gray-300 h-[74vh] overflow-auto">
              <div id="123" className="">
                <div className="flex items-center justify-between h-12 pl-5 border-b-2">
                  <div className="py-3 text-sm md:text-base">
                    Learn Front End Development
                  </div>
                  <div className="flex flex-shrink-0 h-full">
                    <div className="flex items-center px-3 bg-blue-400">
                      <img
                        alt="expand"
                        src="assets/icons/expand-up.png"
                        className="h-6 cursor-pointer"
                        style={{
                          transform:
                            expandedTodo === "123"
                              ? "rotate(180deg)"
                              : "rotate(0)",
                          transition: "transform 0.3s linear 0.1s",
                        }}
                        onClick={() => toggleExpand("123")}
                      />
                    </div>
                    <div className="flex items-center px-3 bg-green-400">
                      {expandedTodo === "123" ? (
                        <img
                          alt="edit"
                          src="assets/icons/edit.svg"
                          className="h-6 cursor-pointer"
                        />
                      ) : (
                        <img
                          alt="edit"
                          src="assets/icons/done.png"
                          className="h-6 cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="relative flex items-center px-3 bg-red-400 group">
                      <img
                        alt="delete"
                        src="assets/icons/delete.svg"
                        className="h-6 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Todo Details */}
                <div
                  className="border-b-2 bg-slate-300"
                  style={{
                    overflow: "hidden",
                    maxHeight: expandedTodo === "123" ? "2000px" : "0",
                    padding:
                      expandedTodo === "123"
                        ? "1.25rem"
                        : "0 1.25rem 0 1.25rem",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <div className="flex flex-col justify-between gap-3 mb-3 md:flex-row md:m-0">
                    <h4 className="text-lg font-semibold ">
                      Learn Front End Development
                    </h4>
                    <div>
                      <p>
                        <span className="font-semibold text-blue-500">
                          Created:&nbsp;
                        </span>
                        2022-06-31
                      </p>
                      <p>
                        <span className="font-semibold text-red-500">
                          Due:&nbsp;
                        </span>
                        2022-07-05
                      </p>
                    </div>
                  </div>
                  <h5 className="mb-1 text-lg font-bold underline underline-offset-4">
                    Description
                  </h5>
                  <p>
                    Ab omnis mollitia voluptas. Quae voluptas ullam at et optio
                    id alias dolorem. Omnis totam sit adipisci vero. Deleniti
                    praesentium commodi incidunt. Reprehenderit animi doloremque
                    quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut
                    vero possimus animi porro. Fugit dolorum quis quidem debitis
                    natus explicabo quibusdam aspernatur dolores. Vero
                    consectetur maiores eaque incidunt consequatur tenetur neque
                    dolore. A harum accusantium. Perferendis aut odio sunt
                    asperiores repudiandae et. Eius et similique quidem voluptas
                    nihil possimus natus commodi. Optio est quas. Tempora at
                    ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia
                    voluptas. Quae voluptas ullam at et optio id alias dolorem.
                    Omnis totam sit adipisci vero. Deleniti praesentium commodi
                    incidunt. Reprehenderit animi doloremque quia voluptatem
                    ratione. Eaque ut et aut cupiditate et. Aut vero possimus
                    animi porro. Fugit dolorum quis quidem debitis natus
                    explicabo quibusdam aspernatur dolores. Vero consectetur
                    maiores eaque incidunt consequatur tenetur neque dolore. A
                    harum accusantium. Perferendis aut odio sunt asperiores
                    repudiandae et. Eius et similique quidem voluptas nihil
                    possimus natus commodi. Optio est quas. Tempora at ipsa
                    ipsum deserunt dolorem explicabo.
                  </p>
                </div>
              </div>

              <div id="256" className="">
                <div className="flex items-center justify-between h-12 pl-5 border-b-2">
                  <div className="py-3 text-sm md:text-base">
                    Learn Front End Development
                  </div>
                  <div className="flex flex-shrink-0 h-full">
                    <div className="flex items-center px-3 bg-blue-400">
                      <img
                        alt="expand"
                        src="assets/icons/expand-up.png"
                        className="h-6 cursor-pointer"
                        style={{
                          transform:
                            expandedTodo === "256"
                              ? "rotate(180deg)"
                              : "rotate(0)",
                          transition: "transform 0.3s linear 0.1s",
                        }}
                        onClick={() => toggleExpand("256")}
                      />
                    </div>
                    <div className="flex items-center px-3 bg-green-400">
                      {expandedTodo === "256" ? (
                        <img
                          alt="edit"
                          src="assets/icons/edit.svg"
                          className="h-6 cursor-pointer"
                        />
                      ) : (
                        <img
                          alt="edit"
                          src="assets/icons/done.png"
                          className="h-6 cursor-pointer"
                        />
                      )}
                    </div>
                    <div className="relative flex items-center px-3 bg-red-400 group">
                      <img
                        alt="delete"
                        src="assets/icons/delete.svg"
                        className="h-6 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Todo Details */}
                <div
                  className="border-b-2 bg-slate-300"
                  style={{
                    overflow: "hidden",
                    maxHeight: expandedTodo === "256" ? "1000px" : "0",
                    padding:
                      expandedTodo === "256"
                        ? "1.25rem"
                        : "0 1.25rem 0 1.25rem",
                    transition: "all 0.5s ease-in-out",
                  }}
                >
                  <div className="flex flex-col justify-between gap-3 mb-3 md:flex-row md:m-0">
                    <h4 className="text-lg font-semibold ">
                      Learn Front End Development
                    </h4>
                    <div>
                      <p>
                        <span className="font-semibold text-blue-500">
                          Created:&nbsp;
                        </span>
                        2022-06-31
                      </p>
                      <p>
                        <span className="font-semibold text-red-500">
                          Due:&nbsp;
                        </span>
                        2022-07-05
                      </p>
                    </div>
                  </div>
                  <h5 className="mb-1 text-lg font-bold underline underline-offset-4">
                    Description
                  </h5>
                  <p>
                    Ab omnis mollitia voluptas. Quae voluptas ullam at et optio
                    id alias dolorem. Omnis totam sit adipisci vero. Deleniti
                    praesentium commodi incidunt. Reprehenderit animi doloremque
                    quia voluptatem ratione. Eaque ut et aut cupiditate et. Aut
                    vero possimus animi porro. Fugit dolorum quis quidem debitis
                    natus explicabo quibusdam aspernatur dolores. Vero
                    consectetur maiores eaque incidunt consequatur tenetur neque
                    dolore. A harum accusantium. Perferendis aut odio sunt
                    asperiores repudiandae et. Eius et similique quidem voluptas
                    nihil possimus natus commodi. Optio est quas. Tempora at
                    ipsa ipsum deserunt dolorem explicabo. Ab omnis mollitia
                    voluptas. Quae voluptas ullam at et optio id alias dolorem.
                    Omnis totam sit adipisci vero. Deleniti praesentium commodi
                    incidunt. Reprehenderit animi doloremque quia voluptatem
                    ratione. Eaque ut et aut cupiditate et. Aut vero possimus
                    animi porro. Fugit dolorum quis quidem debitis natus
                    explicabo quibusdam aspernatur dolores. Vero consectetur
                    maiores eaque incidunt consequatur tenetur neque dolore. A
                    harum accusantium. Perferendis aut odio sunt asperiores
                    repudiandae et. Eius et similique quidem voluptas nihil
                    possimus natus commodi. Optio est quas. Tempora at ipsa
                    ipsum deserunt dolorem explicabo.
                  </p>
                </div>
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
