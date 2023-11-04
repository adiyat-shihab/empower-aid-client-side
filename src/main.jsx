import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes } from "./Routes/Routes.jsx";
import { AuthProvider } from "./Component/Auth Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      {" "}
      <Routes />
    </AuthProvider>
  </React.StrictMode>,
);
