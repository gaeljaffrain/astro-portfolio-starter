import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    // Which card/layout this project renders with on the homepage and
    // on its own detail page.
    type: z.enum(["software", "hardware"]),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    // Shown on the homepage grid; smaller number sorts first.
    order: z.number().default(99),
    // Optional links, shown if present.
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    // Hardware-only fields. Ignored for software projects.
    bom: z
      .array(
        z.object({
          part: z.string(),
          qty: z.string(),
          source: z.string().optional(),
        }),
      )
      .optional(),
    gallery: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    order: z.number().default(99),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { projects, articles };
