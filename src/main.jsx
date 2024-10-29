import "./index.css";
import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TodosProvider } from "./providers/TodosProvider.jsx";
import { UserInterfaceProvider } from "./providers/UserInterfaceProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TodosProvider>
      <UserInterfaceProvider>
        <App />
      </UserInterfaceProvider>
    </TodosProvider>
  </StrictMode>
);
