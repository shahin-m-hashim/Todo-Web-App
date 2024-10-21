import "./index.css";
import { useContext } from "react";
import ThemeBtn from "./components/ThemeBtn";
import ThemeContext from "./providers/ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={`app container theme-${theme} bg-color text-color`}>
      <div className="inline-flex items-center gap-3 p-3 mb-5 text-white bg-slate-500">
        <ThemeBtn setTheme={setTheme} theme="light" color="hsl(32, 67%, 82%)" />
        <ThemeBtn setTheme={setTheme} theme="dark" color="hsl(207, 26%, 17%)" />
      </div>
      <div className="p-5">
        <p className="mb-5">
          A paragraph is a series of sentences that are organized and coherent,
          and are all related to a single topic...
        </p>
        <button className="p-3 bg-btn text-btn hover:bg-btn-hover">Test</button>
      </div>
    </div>
  );
}

export default App;
