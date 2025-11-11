import { file, glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(false),
    unlisted: z.boolean().default(false),
    tags: z.string().array().default([]),
    date: z.coerce.date(),
    sup: z.string().optional()
  })
})

const micro = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/micro' }),
  schema: z.object({
    status: z
      .object({
        icon: z.string().optional(),
        text: z.string().optional(),
        color: z.enum(['gray', 'red', 'green', 'yellow', 'orange', 'blue'])
      })
      .optional(),
    date: z.coerce.date()
  })
})

export const collections = {
  posts,
  micro
}
