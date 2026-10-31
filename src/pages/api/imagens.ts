import type { APIRoute } from 'astro'
import { list, del } from '@vercel/blob'
import { json, lerJson, autorizado } from '@/lib/servidor'

export const prerender = false

export const GET: APIRoute = async ({ request }) => {
  if (!autorizado(request)) return json({ error: 'Não autorizado' }, 401)
  const { blobs } = await list({ prefix: 'imagens/' })
  return json(blobs)
}

export const DELETE: APIRoute = async ({ request }) => {
  if (!autorizado(request)) return json({ error: 'Não autorizado' }, 401)
  const dados = await lerJson(request)
  if (typeof dados?.url !== 'string') return json({ error: 'URL obrigatória' }, 400)
  await del(dados.url)
  return json({ ok: true })
}
