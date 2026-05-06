import Link from 'next/link'

const columns = [
  {
    title: 'Editorias',
    links: [
      { label: 'Mercado', href: '/mercado' },
      { label: 'Legislação', href: '/legislacao' },
      { label: 'Saúde da Água', href: '/saude' },
      { label: 'Guias de Compra', href: '/guias' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Eventos', href: '/eventos' },
    ],
  },
  {
    title: 'Normas',
    links: [
      { label: 'NBR 13713', href: '/legislacao' },
      { label: 'INMETRO', href: '/legislacao' },
      { label: 'ANVISA', href: '/legislacao' },
      { label: 'Portarias MS', href: '/legislacao' },
      { label: 'ISO 9001', href: '/legislacao' },
    ],
  },
  {
    title: 'Guias',
    links: [
      { label: 'Como escolher bebedouro', href: '/guias' },
      { label: 'Bebedouros corporativos', href: '/guias' },
      { label: 'Manutenção preventiva', href: '/guias' },
      { label: 'Filtração e purificação', href: '/guias' },
      { label: 'Bebedouros escolares', href: '/guias' },
    ],
  },
  {
    title: 'Portal',
    links: [
      { label: 'Sobre nós', href: '/sobre' },
      { label: 'Newsletter', href: '/newsletter' },
      { label: 'Anuncie', href: '/anuncie' },
      { label: 'Política de Privacidade', href: '/privacidade' },
      { label: 'Termos de Uso', href: '/termos' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: 'redacao@portalbebedouro.com.br', href: 'mailto:redacao@portalbebedouro.com.br' },
      { label: 'comercial@portalbebedouro.com.br', href: 'mailto:comercial@portalbebedouro.com.br' },
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'YouTube', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-az">
      <div className="h-1 bg-gradient-to-r from-az via-vd2 to-az3" />
      <div className="mx-auto max-w-[1280px] px-8 py-12">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {columns.map((col) => (
            <div key={col.title}>
              <h3
                className="mb-4 text-[16px] font-black uppercase tracking-wider text-white"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[16px] text-white/50 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-[14px] text-white/30 text-center">
            Parceiros:{' '}
            {['JG Bebedouros', 'Ozean Purificadores', 'ABNT', 'INMETRO', 'AquaTech'].map((p, i, arr) => (
              <span key={p}>
                <span className="text-white/50 hover:text-white/70 transition-colors cursor-pointer">{p}</span>
                {i < arr.length - 1 && <span className="mx-2">·</span>}
              </span>
            ))}
          </p>
          <p className="mt-4 text-center text-[14px] text-white/20">
            © {new Date().getFullYear()} Portal do Bebedouro — Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
