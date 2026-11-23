
import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

createRoot(root).render(
  <React.StrictMode>
    <HelmetProvider>
      <App pagePath={window.location.pathname} />
    </HelmetProvider>
  </React.StrictMode>
);
