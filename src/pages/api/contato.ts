import type { APIRoute } from 'astro'
import { resend, json, lerJson, texto, DESTINO } from '@/lib/servidor'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const dados = await lerJson(request)
  const nome = texto(dados?.nome)
  const email = texto(dados?.email)
  const assunto = texto(dados?.assunto)
  const mensagem = texto(dados?.mensagem)

  if (!nome || !email || !mensagem) return json({ error: 'Campos obrigatórios faltando.' }, 400)

  try {
    await resend().emails.send({
      from: 'Portal do Bebedouro <contato@portaldobebedouro.com.br>',
      to: DESTINO,
      replyTo: email,
      subject: `[Contato] ${assunto || nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto || '—'}\n\nMensagem:\n${mensagem}`,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('[api/contato]', err)
    return json({ error: 'Erro ao enviar mensagem.' }, 500)
  }
}
