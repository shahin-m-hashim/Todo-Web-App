/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const localTheme = localStorage.getItem("theme");
  const [currentTheme, setCurrentTheme] = useState(localTheme || "light");

  useEffect(() => localStorage.setItem("theme", currentTheme), [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
