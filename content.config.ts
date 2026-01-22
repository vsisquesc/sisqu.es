import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    repos: defineCollection({
      type: 'data',
      source: 'repos/**.json',
      schema: z.object({
        order: z.number(),
        name: z.string(),
        href: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
      }),
    }),
    social: defineCollection({
      type: 'data',
      source: 'social/**.json',
      schema: z.object({
        order: z.number(),
        name: z.string(),
        href: z.string(),
        iconName: z.string(),
      }),
    }),
  },
});
