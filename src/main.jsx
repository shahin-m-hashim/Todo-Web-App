import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/ThemeContext.jsx";
import { TodosProvider } from "./providers/TodosProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <TodosProvider>
        <App />
      </TodosProvider>
    </ThemeProvider>
  </StrictMode>
);
