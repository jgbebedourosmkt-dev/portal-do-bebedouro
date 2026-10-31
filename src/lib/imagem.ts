import { existsSync } from 'node:fs'
import path from 'node:path'

const LARGURAS = [400, 800, 1600]

/**
 * Para imagens locais (/images/x.png|jpg), aponta para as versões WebP geradas
 * por scripts/otimizar-imagens.mjs. URLs externas (Vercel Blob) passam intactas.
 */
export function imagem(src: string, larguraMax = 1600) {
  const m = src.match(/^\/images\/(.+)\.(png|jpe?g)$/i)
  if (!m) return { src }
  const larguras = LARGURAS.filter(
    (l) => l <= larguraMax && existsSync(path.join(process.cwd(), 'public/images', `${m[1]}-${l}.webp`)),
  )
  if (!larguras.length) return { src }
  return {
    src: `/images/${m[1]}-${larguras.at(-1)}.webp`,
    srcset: larguras.map((l) => `/images/${m[1]}-${l}.webp ${l}w`).join(', '),
  }
}
