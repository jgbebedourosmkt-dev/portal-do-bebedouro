import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const faq = z.object({ question: z.string(), answer: z.string() })
const link = z.object({ href: z.string(), label: z.string() })

// Artigos do portal: JSON com HTML em `content`
const posts = defineCollection({
  loader: glob({ pattern: '*.json', base: './content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    categoria: z.string(),
    badge: z.string().optional(),
    badgeVariant: z.string().optional(),
    date: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.string(),
    readTime: z.number(),
    featured: z.boolean().optional(),
    ogImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    content: z.string(),
  }),
})

// Páginas pilar/subpilar, servidas em /<slug>
const pilares = defineCollection({
  loader: glob({ pattern: '*.json', base: './content/pilares' }),
  schema: z.object({
    metaTitle: z.string(),
    metaDescription: z.string(),
    noIndex: z.boolean().optional(),
    badge: z.string().default('Guia Completo'),
    title: z.string(),
    excerpt: z.string(),
    breadcrumbLabel: z.string(),
    finalCtaTitle: z.string().optional(),
    finalCtaDesc: z.string().optional(),
    tocItems: z.array(link).default([]),
    stats: z.array(z.object({ valor: z.string(), label: z.string() })).default([]),
    faqs: z.array(faq).default([]),
    internalLinks: z.array(link).default([]),
    schemas: z.array(z.record(z.string(), z.unknown())).default([]),
    html: z.string(),
  }),
})

// SEO local, servidas em /local/<slug>
const locais = defineCollection({
  loader: glob({ pattern: '*.json', base: './content/local' }),
  schema: z.object({
    name: z.string(),
    prep: z.string(),
    state: z.string(),
    stateAbbr: z.string(),
    regiao: z.string().optional(),
    contextoComercial: z.string().optional(),
    keyword: z.string().optional(),
    h1: z.string().optional(),
    metaDescription: z.string().optional(),
    content: z.string().optional(),
    faqs: z.array(faq).optional(),
    updatedAt: z.string().optional(),
  }),
})

// Páginas institucionais (sobre, contato)
const paginas = defineCollection({
  loader: glob({ pattern: '*.json', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    content: z.string(),
    updatedAt: z.string().optional(),
  }),
})

export const collections = { posts, pilares, locais, paginas }
