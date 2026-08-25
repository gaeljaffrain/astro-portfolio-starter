# Astro Portfolio Starter - for Indie Dev & Consultant

**Author: Gaël Jaffrain - hello@gaeljaffrain.com**

This template allows to create an Astro portfolio site with two homepage modes: 
an indie dev mode and an optional consulting mode, adding obvious "call to action". 
Both modes include an experience section, selected projects, technical articles, and contact
information. The site is built to deploy on GitHub Pages with a custom
domain.

The visual content and sample portfolio copy intentionally use a fictional persona named John Doe. This is a template example only; the template itself is authored by Gaël Jaffrain.

Built for **Astro v7** using the Content Layer API (`glob` loader in
`src/content.config.ts`) — not the older `type: "content"` API, which
was removed in Astro v6. Requires **Node 22+**.

This template was generated to learn how to code an Astro site, with the goal to upgrade my old Wordpress portfolio. 

I am a human, but I did leverage heavily Copilot (in VSCode) to fine tune the features I wanted in my own portfolio. I am on the free plan, so I am not exactly sure which models were used. As far as I can tell, when the portfolio was written the free plan was using GPT-4o and Claude 3.5 Sonnet.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Template disclaimer

This repository is intended as a reusable starter template. It is open for remixing, modification, and adaptation under the MIT license.

However, this repository includes sample copy, sample project descriptions, and generated visual assets that were created for demo purposes and may have been produced with AI tools. Those materials should not be treated as guaranteed rights-cleared or publication-ready content. Before publishing a derivative site, you should review the included text and images, replace any content you do not own or are not comfortable licensing, and ensure the final deployed project uses original or properly licensed assets.

This template is best understood as a codebase and visual scaffold for building your own portfolio, not as a completed, rights-cleared portfolio for production use.

## Run locally

```
npm install
npm run dev
```

Open http://localhost:4321

## Switch homepage mode

Set `consultingEnabled` in `src/config/site.ts`:

```ts
export const consultingEnabled = false;
```

- `false` shows the indie dev homepage copy and navigation.
- `true` shows the consulting hero, expertise cards, and
  "Work with me" section.

The consulting and independent-engineer content lives in
`src/pages/index.astro`. The hero copy, expertise cards, experience list,
project section, article section, and contact links are plain markup and
collection rendering in that file.

## Edit homepage content

The hero copy, the two expertise cards, the "work with me" blurb, and the
experience list are plain markup near the top of `src/pages/index.astro`.
Edit directly; this content changes rarely enough that it doesn't need its
own content collection.

## Edit Social links

Update the links to socials in `src/components/Footer.astro`

## Add a project

Add a new `.md` file in `src/content/projects/`. The schema lives in
`src/content.config.ts`. 

One important field in the frontmatter:

- `type: software` — renders the compact card
- `type: hardware` — renders the same compact card on the homepage, but
  its detail page also shows an optional photo/render gallery and a bill-of-
  materials table if you fill in `gallery` and `bom`.

Each project type card has its own style defined in `src/styles/global.css`.

See `pico8-game-04.md` and `dmx-cue-controller.md` for examples of each.

The markdown body of each file becomes the project's write-up. Each one lives on 
its project's own page at `/projects/<filename-without-extension>/`.

## Add a technical article

Add a new `.md` file in `src/content/articles/`.

Articles appear in the homepage's **technical articles** section and are
rendered at `/articles/<filename-without-extension>/`. The schema for
article frontmatter is defined alongside the project schema in
`src/content.config.ts`. So this is very similar to the `projects`

## Site structure

- `src/config/site.ts` — homepage mode switch.
- `src/pages/index.astro` — homepage layout and collection listings.
- `src/content/projects/` — project write-ups and project metadata.
- `src/content/articles/` — technical articles and article metadata.
- `src/content.config.ts` — Content Layer collection schemas.
- `src/components/` — shared navigation, footer, and collection cards.
- `src/layouts/Layout.astro` — shared HTML document shell and metadata.
- `public/` — static images, favicon, and other files copied unchanged to
  the build output.

## Colors

Defined once as CSS variables in `src/styles/global.css`:

- `--accent-pro` (amber) — reserved for the professional zone only.
- `--accent-software` (teal) / `--accent-hardware` (coral) — used only
  below the "side projects" divider, to tell the two project types
  apart at a glance.

Keep that separation when you extend the site — don't let the amber
accent leak into the projects zone or vice versa; it's what makes the
two-zone structure read clearly.

## Deploy to GitHub Pages with a custom domain

1. Push this repo to GitHub.
2. In the repo settings → Pages, set the source to GitHub Actions.
3. Add a workflow at `.github/workflows/deploy.yml` using the official
   `withastro/action` (see https://docs.astro.build/en/guides/deploy/github/
   for the exact snippet — search `docs.astro.build` for "Deploy your
   Astro Site to GitHub Pages" since these steps can change).
4. Add a `public/CNAME` file containing just `johndoe.example`.
5. Point your domain's DNS at GitHub Pages per GitHub's custom-domain
docs, then check "Enforce HTTPS" in the Pages settings once DNS
propagates.

`astro.config.mjs` is already set with `site: "https://johndoe.example"`
and no `base` path, which is correct for a custom-domain deploy.
