import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./componentTwo/auth/authContext/AuthContext.jsx";
import ContextProvider from "./componentTwo/contextContainer/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
