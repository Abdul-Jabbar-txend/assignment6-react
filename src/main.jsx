import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./contexts/TodoProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
