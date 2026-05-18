import fs from 'fs'
import path from 'path'

export interface Post {
  slug: string
  title: string
  excerpt: string
  categoria: string
  badge?: string
  badgeVariant?: string
  date: string
  updatedAt?: string
  author: string
  readTime: number
  featured?: boolean
  ogImage?: string
  tags: string[]
  content: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const files = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.json'))
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(postsDirectory, file), 'utf8')
    const data = JSON.parse(raw) as Post
    if (!data.slug) data.slug = file.replace(/\.json$/, '')
    return data
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.json`)
  if (!fs.existsSync(fullPath)) return undefined
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Post
  if (!data.slug) data.slug = slug
  return data
}

export function getPostsByCategoria(categoria: string): Post[] {
  return getAllPosts().filter((p) => p.categoria === categoria)
}

export function getPostsByTag(tag: string): Post[] {
  return getAllPosts().filter((p) => p.tags?.includes(tag))
}

export function getAllTags(): string[] {
  const all = getAllPosts().flatMap((p) => p.tags ?? [])
  return [...new Set(all)].sort()
}

export function getFeaturedPost(): Post | undefined {
  const all = getAllPosts()
  return all.find((p) => p.featured) ?? all[0]
}
