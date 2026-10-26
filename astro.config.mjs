import { defineConfig } from "astro/config";

// Deployed to a custom domain via GitHub Pages, so site is the domain root.
export default defineConfig({
  site: "https://johndoe.example",
});
