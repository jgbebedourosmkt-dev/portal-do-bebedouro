import fs from 'fs'
import path from 'path'

export interface LocalFaq {
  question: string
  answer: string
}

export interface LocalPage {
  slug: string
  name: string
  prep: string
  state: string
  stateAbbr: string
  regiao?: string
  contextoComercial?: string
  keyword?: string
  h1?: string
  metaDescription?: string
  content?: string
  faqs?: LocalFaq[]
  updatedAt?: string
}

const localDirectory = path.join(process.cwd(), 'content/local')

export function getAllLocalPages(): LocalPage[] {
  if (!fs.existsSync(localDirectory)) return []
  const files = fs.readdirSync(localDirectory).filter(f => f.endsWith('.json'))
  return files.map((file) => {
    const data = JSON.parse(fs.readFileSync(path.join(localDirectory, file), 'utf8')) as LocalPage
    if (!data.slug) data.slug = file.replace(/\.json$/, '')
    return data
  })
}

export function getLocalPageBySlug(slug: string): LocalPage | undefined {
  const fullPath = path.join(localDirectory, `${slug}.json`)
  if (!fs.existsSync(fullPath)) return undefined
  const data = JSON.parse(fs.readFileSync(fullPath, 'utf8')) as LocalPage
  if (!data.slug) data.slug = slug
  return data
}
