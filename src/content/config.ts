/**
 * Content Collections Configuration
 *
 * Define the schema for blog posts using Astro's content collections.
 */

import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    featuredImage: z.string(),
    author: z.string(),
    authorImage: z.string().optional(),
    date: z.coerce.date(),
    category: z.string(),
    readingTime: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
};
