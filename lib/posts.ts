import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.mdx'))
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    return { ...data, slug, content } as Post
  })
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return undefined
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  return { ...data, slug, content } as Post
}

export function getPostsByCategoria(categoria: string): Post[] {
  return getAllPosts().filter((p) => p.categoria === categoria)
}

export function getFeaturedPost(): Post | undefined {
  const all = getAllPosts()
  return all.find((p) => p.featured) ?? all[0]
}
