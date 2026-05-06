export default function Topbar() {
  const date = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="hidden md:block border-b border-borda bg-white py-2">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8">
        <span className="text-[14px] text-gray-400" style={{ fontFamily: 'var(--font-barlow)' }}>
          {date.charAt(0).toUpperCase() + date.slice(1)}
        </span>
        <div className="flex items-center divide-x divide-borda">
          <a href="/busca" aria-label="Buscar" className="px-3 text-gray-500 hover:text-az transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
          </a>
          {['Anuncie', 'Newsletter', 'Login', 'Cadastre-se'].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="px-3 text-[13px] font-medium text-gray-500 hover:text-az transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
