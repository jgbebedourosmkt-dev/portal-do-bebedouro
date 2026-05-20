import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nome, email, temas } = await request.json()

  if (!email) {
    return NextResponse.json({ error: 'Email obrigatório.' }, { status: 400 })
  }

  try {
    const temasTexto = Array.isArray(temas) && temas.length > 0 ? temas.join(', ') : 'Todos'

    await resend.emails.send({
      from: 'Portal do Bebedouro <contato@portaldobebedouro.com.br>',
      to: 'jgbebedourosmkt@gmail.com',
      subject: `[Newsletter] Nova inscrição: ${email}`,
      text: `Nova inscrição na newsletter:\n\nNome: ${nome || '—'}\nEmail: ${email}\nTemas: ${temasTexto}`,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[api/newsletter]', err)
    return NextResponse.json({ error: 'Erro ao processar inscrição.' }, { status: 500 })
  }
}
