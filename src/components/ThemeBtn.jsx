/* eslint-disable react/prop-types */

import { useContext } from "react";
import ThemeContext from "../providers/ThemeProvider";

export default function ThemeBtn({ theme, backgroundColor }) {
  const { setTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      style={{ backgroundColor }}
      onClick={() => setTheme(theme)}
      className="p-3 border-2 rounded-full"
    ></button>
  );
}
