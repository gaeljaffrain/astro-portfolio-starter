import { defineConfig } from "astro/config";

// Deployed to a custom domain via GitHub Pages, so site is the domain root
// and no `base` path is needed. If you deploy to <user>.github.io/<repo>
// instead, set base: "/<repo>".
export default defineConfig({
  site: "https://johndoe.example",
});
