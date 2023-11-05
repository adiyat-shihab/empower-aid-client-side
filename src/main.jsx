import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import { Routes } from "./Routes/Routes.jsx";
import { AuthProvider } from "./Component/Auth Provider/AuthProvider.jsx";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {" "}
        <Routes />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
