import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-borda bg-white py-2.5">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8">
        <Link href="/" className="leading-none">
          <h1
            className="text-[44px] font-black tracking-tight leading-none"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            <span className="text-[#111]">Portal</span>
            <span className="text-gray-300 font-light mx-2">do</span>
            <span className="text-az font-black italic">Bebedouro</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center gap-4">
          <div className="text-right">
            <p className="text-[11px] text-txt3 uppercase tracking-wider font-semibold">O portal do setor</p>
            <p className="text-[11px] text-txt3">portalbebedouro.com.br</p>
          </div>
        </div>
      </div>
    </header>
  )
}
