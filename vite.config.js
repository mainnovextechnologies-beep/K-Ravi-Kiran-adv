import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Bundle this CommonJS package for SSR so Node can resolve Helmet exports.
  ssr: { noExternal: ["react-helmet-async"] },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: false
  },
  server: { host: "0.0.0.0" }
});
