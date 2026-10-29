import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const yazilar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './yazilar' }),
  schema: z.object({
    basliq: z.string(),
    tarix: z.coerce.date(),
  }),
});

const melumat = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './melumat' }),
  schema: z.object({
    ad: z.string().optional(),
    istifadeci: z.string().optional(),
    indi: z.string().optional(),
    sekil: z.string().optional(),
    sitat: z.string().optional(),
    linkler: z.array(z.object({ ad: z.string(), url: z.string() })).optional(),
    tesvir: z.string().optional(),
  }),
});

export const collections = { yazilar, melumat };
