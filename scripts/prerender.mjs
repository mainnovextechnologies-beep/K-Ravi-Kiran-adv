import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { seoPages, siteConfig } from "../src/config/siteConfig.js";

const dist = path.resolve("dist");
const serverEntry = path.join(dist, "server", "entry-server.js");

if (!fs.existsSync(path.join(dist, "index.html"))) {
  throw new Error("Production index.html is missing. Run the Vite client build before prerendering.");
}
if (!fs.existsSync(serverEntry)) {
  throw new Error("SSR entry is missing. Run the SSR build before prerendering.");
}

// IMPORTANT: Start from Vite's production HTML, not the source index.html.
// This preserves hashed JS/CSS asset links generated during `vite build`.
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(serverEntry).href);

for (const page of seoPages) {
  const { html, head } = render(page.path);
  const relative = page.path === "/" ? "index.html" : `${page.path.replace(/^\/+|\/+$/g, "")}/index.html`;
  const output = path.join(dist, relative);
  fs.mkdirSync(path.dirname(output), { recursive: true });

  let finalHtml = template;
  // The source template has this marker; Vite may preserve it in production.
  if (finalHtml.includes("<!--app-html-->")) {
    finalHtml = finalHtml.replace("<!--app-html-->", html);
  } else {
    finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  }

  // Remove the static title so the page-specific React Helmet title is authoritative.
  finalHtml = finalHtml.replace(/<title>[\s\S]*?<\/title>/i, "");
  finalHtml = finalHtml.replace("</head>", `${head}\n</head>`);
  fs.writeFileSync(output, finalHtml);
  console.log(`Prerendered ${page.path} -> ${relative}`);
}

const urls = seoPages
  .map((page) => `  <url><loc>${siteConfig.siteUrl.replace(/\/$/, "")}${page.path}</loc></url>`)
  .join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("Generated sitemap.xml. Update siteUrl in src/config/siteConfig.js before deployment.");
