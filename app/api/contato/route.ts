import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nome, email, assunto, mensagem } = await request.json()

  if (!nome || !email || !mensagem) {
    return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 })
  }

  try {
    await resend.emails.send({
      from: 'Portal do Bebedouro <contato@portaldobebedouro.com.br>',
      to: 'jgbebedourosmkt@gmail.com',
      replyTo: email,
      subject: `[Contato] ${assunto || nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nAssunto: ${assunto || '—'}\n\nMensagem:\n${mensagem}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/contato]', err)
    return NextResponse.json({ error: 'Erro ao enviar mensagem.' }, { status: 500 })
  }
}
