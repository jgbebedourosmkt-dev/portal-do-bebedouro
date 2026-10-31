import type { APIRoute } from 'astro'
import { put } from '@vercel/blob'
import { json, autorizado } from '@/lib/servidor'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  if (!autorizado(request)) return json({ error: 'Não autorizado' }, 401)

  const formData = await request.formData()
  const file = formData.get('file')
  if (!(file instanceof File)) return json({ error: 'Nenhum arquivo enviado' }, 400)

  const blob = await put(`imagens/${file.name}`, file, { access: 'public' })
  return json(blob)
}
