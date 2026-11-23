import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./styles.css";

const path = window.location.pathname;
const root = document.getElementById("root");
const app = <HelmetProvider><App pagePath={path}/></HelmetProvider>;
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
