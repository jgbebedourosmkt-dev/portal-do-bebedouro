import fs from 'fs'
import path from 'path'

export interface Page {
  slug: string
  title: string
  description?: string
  content: string
  updatedAt?: string
}

const pagesDirectory = path.join(process.cwd(), 'content/pages')

export function getAllPages(): Page[] {
  if (!fs.existsSync(pagesDirectory)) return []
  const files = fs.readdirSync(pagesDirectory).filter(f => f.endsWith('.json'))
  return files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(pagesDirectory, file), 'utf8')) as Page
    if (!data.slug) data.slug = file.replace(/\.json$/, '')
    return data
  })
}

export function getPageBySlug(slug: string): Page | undefined {
  const fullPath = path.join(pagesDirectory, `${slug}.json`)
  if (!fs.existsSync(fullPath)) return undefined
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as Page
  if (!data.slug) data.slug = slug
  return data
}
