import type { APIRoute } from 'astro'
import { resend, json, lerJson, texto, DESTINO } from '@/lib/servidor'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const dados = await lerJson(request)
  const nome = texto(dados?.nome)
  const email = texto(dados?.email)
  const temas = Array.isArray(dados?.temas) ? dados.temas.filter((t): t is string => typeof t === 'string') : []

  if (!email) return json({ error: 'Email obrigatório.' }, 400)

  try {
    await resend().emails.send({
      from: 'Portal do Bebedouro <contato@portaldobebedouro.com.br>',
      to: DESTINO,
      subject: `[Newsletter] Nova inscrição: ${email}`,
      text: `Nova inscrição na newsletter:\n\nNome: ${nome || '—'}\nEmail: ${email}\nTemas: ${temas.length ? temas.join(', ') : 'Todos'}`,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('[api/newsletter]', err)
    return json({ error: 'Erro ao processar inscrição.' }, 500)
  }
}
