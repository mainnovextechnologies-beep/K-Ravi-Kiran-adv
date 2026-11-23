import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

export function render(path) {
  const helmetContext = {};
  const html = renderToString(<HelmetProvider context={helmetContext}><App pagePath={path}/></HelmetProvider>);
  const helmet = helmetContext.helmet;
  return {
    html,
    head: [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString()
    ].join("\n")
  };
}
