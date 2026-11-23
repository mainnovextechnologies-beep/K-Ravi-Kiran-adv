import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { seoPages, siteConfig } from "../src/config/siteConfig.js";

const serverEntry = path.resolve("dist/server/entry-server.js");
const { render } = await import(pathToFileURL(serverEntry).href);
const template = fs.readFileSync("index.html", "utf8");
const dist = path.resolve("dist");

for (const page of seoPages) {
  const { html, head } = render(page.path);
  const relative = page.path === "/" ? "index.html" : `${page.path.replace(/^\/|\/$/g, "")}/index.html`;
  const output = path.join(dist, relative);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  const finalHtml = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace("</head>", `${head}\n</head>`)
    .replace("<!--app-html-->", html);
  fs.writeFileSync(output, finalHtml);
  console.log(`Prerendered ${page.path} -> ${relative}`);
}

const urls = seoPages.map(p => `  <url><loc>${siteConfig.siteUrl.replace(/\/$/, "")}${p.path}</loc></url>`).join("\n");
fs.writeFileSync(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
console.log("Generated sitemap.xml. Update siteUrl in src/config/siteConfig.js before deployment.");
