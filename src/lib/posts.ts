import { getCollection, type CollectionEntry } from 'astro:content'

export type Post = CollectionEntry<'posts'>

/** Mais recentes primeiro; posts com data futura (agendados) vão para o fim, como no site anterior. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts')
  const agora = Date.now()
  return posts.sort((a, b) => {
    const fa = a.data.date.getTime() > agora
    const fb = b.data.date.getTime() > agora
    if (fa !== fb) return fa ? 1 : -1
    return b.data.date.getTime() - a.data.date.getTime()
  })
}

export const byCategoria = (posts: Post[], categoria: string) => posts.filter((p) => p.data.categoria === categoria)

export const getTags = (posts: Post[]) => [...new Set(posts.flatMap((p) => p.data.tags))].sort()

export const url = (post: Post) => `/artigo/${post.id}`

const fmtLongo = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
const fmtCurto = new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', timeZone: 'UTC' })

export const dataLonga = (d: Date) => fmtLongo.format(d)
export const dataCurta = (d: Date) => fmtCurto.format(d).replace('.', '')
