import { defineConfig } from "astro/config";

// Deployed to a custom domain via GitHub Pages, so site is the domain root.
export default defineConfig({
  site: "https://astro-portfolio-starter.gaeljaffrain.com",
});
