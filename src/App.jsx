import "./index.css";
import { useContext, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "./providers/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
              <div className="flex items-center justify-between pl-5 border-b-2">
                <div className="py-3 text-sm md:text-base">
                  Learn Front End Development
                </div>
                <div className="flex flex-shrink-0 h-full">
                  <div className="flex items-center px-3 bg-blue-400">
                    <img
                      alt="expand"
                      src="assets/icons/expand-up.png"
                      className="h-6 cursor-pointer"
                      onClick={toggleExpand}
                    />
                  </div>
                  <div className="flex items-center px-3 bg-green-400">
                    <img
                      alt="done"
                      src="assets/icons/done.png"
                      className="h-6 cursor-pointer"
                    />
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

              {/* Edit Todo */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out border-b-2 bg-slate-300"
                style={{
                  maxHeight: isExpanded ? `500px` : "0",
                  padding: isExpanded ? "1.25rem" : "0 1.25rem 0 1.25rem",
                }}
              >
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
                  <input type="date" className="p-2 mb-3 border-2 rounded-md" />
                  <div className="flex gap-3">
                    <button className="text-white bg-btn hover:bg-btn-hover">
                      Update
                    </button>
                    <button className="text-white bg-btn hover:bg-btn-hover">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-between pl-5 border-b-2">
                <div className="py-3 text-sm md:text-base">
                  Learn Front End Development
                </div>
                <div className="flex flex-shrink-0 h-full">
                  <div className="flex items-center px-3 bg-blue-400">
                    <img
                      alt="expand"
                      src="assets/icons/expand-up.png"
                      className="h-6 cursor-pointer"
                      onClick={toggleExpand}
                    />
                  </div>
                  <div className="flex items-center px-3 bg-green-400">
                    <img
                      alt="edit"
                      src="assets/icons/edit.svg"
                      className="h-6 cursor-pointer"
                    />
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

              {/* Todo Expanded */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out border-b-2 bg-slate-300"
                style={{
                  maxHeight: isExpanded ? `500px` : "0",
                  padding: isExpanded ? "1.25rem" : "0 1.25rem 0 1.25rem",
                }}
              >
                <h4 className="mb-3">Name: Learn Front End Development</h4>
                <div>
                  <p className="mb-3">
                    Description: <br /> Learn HTML, CSS, JavaScript, React, and
                    Tailwind
                  </p>
                  <p>Date: 2022-12-31</p>
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
