import { list, del } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

function autorizado(req: NextRequest) {
  return req.headers.get('x-admin-password') === process.env.ADMIN_PASSWORD;
}

export async function GET(request: NextRequest) {
  if (!autorizado(request)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { blobs } = await list({ prefix: 'imagens/' });
  return NextResponse.json(blobs);
}

export async function DELETE(request: NextRequest) {
  if (!autorizado(request)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const { url } = await request.json();
  await del(url);
  return NextResponse.json({ ok: true });
}
