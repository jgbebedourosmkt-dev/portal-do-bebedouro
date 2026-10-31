// Utilitários das rotas de API (rodam como funções serverless na Vercel)
import { Resend } from 'resend'

/** Lê a variável em tempo de execução (Vercel) com fallback para o .env local do `astro dev`. */
export const env = {
  resendKey: () => process.env.RESEND_API_KEY ?? import.meta.env.RESEND_API_KEY,
  adminPassword: () => process.env.ADMIN_PASSWORD ?? import.meta.env.ADMIN_PASSWORD,
}

export const DESTINO = 'jgbebedourosmkt@gmail.com'

let cliente: Resend | undefined
export const resend = () => (cliente ??= new Resend(env.resendKey()))

export const json = (dados: unknown, status = 200) =>
  new Response(JSON.stringify(dados), { status, headers: { 'Content-Type': 'application/json' } })

export async function lerJson(request: Request): Promise<Record<string, unknown> | null> {
  try {
    const dados = await request.json()
    return dados && typeof dados === 'object' ? (dados as Record<string, unknown>) : null
  } catch {
    return null
  }
}

export const texto = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

export const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

export function autorizado(request: Request) {
  const senha = env.adminPassword()
  return Boolean(senha) && request.headers.get('x-admin-password') === senha
}
