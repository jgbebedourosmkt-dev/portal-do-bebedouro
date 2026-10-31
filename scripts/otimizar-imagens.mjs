// Gera versões WebP leves das imagens de public/images (os originais ficam,
// porque são usados como og:image e podem estar linkados de fora).
// Para cada foto.png|jpg sai foto-400.webp, foto-800.webp e foto-1600.webp
// (sem ampliar além do tamanho original). Rode com: npm run imagens
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const PASTA = 'public/images'
export const LARGURAS = [400, 800, 1600]

for (const nome of await readdir(PASTA)) {
  if (!/\.(png|jpe?g)$/i.test(nome)) continue
  const origem = path.join(PASTA, nome)
  const base = nome.replace(/\.[^.]+$/, '')
  const { width } = await sharp(origem).metadata()

  for (const largura of LARGURAS) {
    const destino = path.join(PASTA, `${base}-${largura}.webp`)
    const existe = await stat(destino).catch(() => null)
    if (existe && existe.mtimeMs > (await stat(origem)).mtimeMs) continue
    await sharp(origem)
      .resize({ width: Math.min(largura, width), withoutEnlargement: true })
      .webp({ quality: 74 })
      .toFile(destino)
  }
  console.log(`ok ${nome}`)
}
