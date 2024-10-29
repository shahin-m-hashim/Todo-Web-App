import { useContext } from "react";
import ThemeBtn from "../../ThemeBtn";
import ThemeContext from "../../../providers/ThemeContext";

export default function ThemeSwitcher() {
  const { setTheme } = useContext(ThemeContext);

  return (
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
  );
}
