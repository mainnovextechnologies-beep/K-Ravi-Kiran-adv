import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error('Root element "#root" was not found in index.html.');
}

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App pagePath={window.location.pathname} />
    </HelmetProvider>
  </React.StrictMode>
);

// Production pages are prerendered into #root. Hydrate those pages;
// in the Vite development server, #root is empty, so create a fresh root.
if (root.childElementCount > 0) {
  hydrateRoot(root, app, {
    onRecoverableError(error) {
      console.error("React hydration warning:", error);
    }
  });
} else {
  createRoot(root).render(app);
}
