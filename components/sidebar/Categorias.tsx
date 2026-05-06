import Link from 'next/link'

const categorias = [
  { label: 'Mercado', href: '/mercado', count: 12 },
  { label: 'Legislação', href: '/legislacao', count: 8 },
  { label: 'Saúde da Água', href: '/saude', count: 10 },
  { label: 'Guias de Compra', href: '/guias', count: 7 },
  { label: 'Reviews', href: '/reviews', count: 6 },
  { label: 'Eventos', href: '/eventos', count: 4 },
]

export default function Categorias() {
  return (
    <div className="rounded border border-borda p-4 bg-white">
      <h3
        className="mb-3 text-[17px] font-black uppercase tracking-wider text-txt border-b-2 border-az pb-2"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Categorias
      </h3>
      <ul className="space-y-1">
        {categorias.map(({ label, href, count }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex items-center justify-between py-1.5 text-[16px] font-semibold text-txt2 hover:text-az transition-colors group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
              <span className="text-[13px] font-bold text-txt3 bg-bg px-1.5 py-0.5 rounded">
                {count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
