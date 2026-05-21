import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { nome, email, telefone, empresa, mensagem } = await req.json()

  try {
    await resend.emails.send({
      from: 'Portal do Bebedouro <noreply@portaldobebedouro.com.br>',
      to: 'jgbebedourosmkt@gmail.com',
      subject: `[Orçamento Grátis] ${nome}`,
      html: `
        <h2 style="color:#0B3D6B">Nova solicitação de orçamento</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Empresa:</strong> ${empresa || 'Não informada'}</p>
        <hr/>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br/>')}</p>
      `,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[orcamento]', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
