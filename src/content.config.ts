import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const commonSchema = z.object({
  title: z.string(),
  summary: z.string(),
  tags: z.array(z.string()).default([]),
  order: z.number().default(99),
  date: z.coerce.date().optional(),
  draft: z.boolean().default(false), // if true, not published
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: commonSchema.extend({
    type: z.enum(["software", "hardware"]),
    thumbnail: z.string().optional(),
    liveUrl: z.string().url().optional(),
    repoUrl: z.string().url().optional(),
    gallery: z.array(z.string()).optional(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: commonSchema.extend({
    type: z.enum(["technical article"]),
  }),
});

export const collections = { projects, articles };
