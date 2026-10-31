import type { APIRoute } from 'astro'
import { resend, json, lerJson, texto, escapar, DESTINO } from '@/lib/servidor'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  const dados = await lerJson(request)
  const nome = texto(dados?.nome)
  const email = texto(dados?.email)
  const telefone = texto(dados?.telefone)
  const empresa = texto(dados?.empresa)
  const mensagem = texto(dados?.mensagem)

  if (!nome || !email || !mensagem) return json({ ok: false, error: 'Campos obrigatórios faltando.' }, 400)

  try {
    await resend().emails.send({
      from: 'Portal do Bebedouro <noreply@portaldobebedouro.com.br>',
      to: DESTINO,
      replyTo: email,
      subject: `[Orçamento Grátis] ${nome}`,
      html: `
        <h2 style="color:#0B3D6B">Nova solicitação de orçamento</h2>
        <p><strong>Nome:</strong> ${escapar(nome)}</p>
        <p><strong>E-mail:</strong> ${escapar(email)}</p>
        <p><strong>Telefone:</strong> ${escapar(telefone) || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${escapar(empresa) || 'Não informada'}</p>
        <hr/>
        <p><strong>Mensagem:</strong></p>
        <p>${escapar(mensagem).replace(/\n/g, '<br/>')}</p>
      `,
    })
    return json({ ok: true })
  } catch (err) {
    console.error('[orcamento]', err)
    return json({ ok: false }, 500)
  }
}
