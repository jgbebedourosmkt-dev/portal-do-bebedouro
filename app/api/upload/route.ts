import { put } from '@vercel/blob';
import { NextRequest, NextResponse } from 'next/server';

function autorizado(req: NextRequest) {
  return req.headers.get('x-admin-password') === process.env.ADMIN_PASSWORD;
}

export async function POST(request: NextRequest) {
  if (!autorizado(request)) {
    return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get('file') as File | null;

  if (!file) {
    return NextResponse.json({ error: 'Nenhum arquivo enviado' }, { status: 400 });
  }

  const blob = await put(`imagens/${file.name}`, file, { access: 'public' });

  return NextResponse.json(blob);
}
