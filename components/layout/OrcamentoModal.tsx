'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function OrcamentoModal({
  size = 'default',
  triggerClassName,
  showArrow = false,
}: {
  size?: 'sm' | 'default'
  triggerClassName?: string
  showArrow?: boolean
}) {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/orcamento', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setStatus(res.ok ? 'ok' : 'error')
  }

  function close() {
    setOpen(false)
    setStatus('idle')
    setForm({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={triggerClassName ?? `bg-acc text-[#111] font-extrabold uppercase tracking-wide rounded hover:brightness-95 transition-all whitespace-nowrap ${
          size === 'sm' ? 'px-3 py-1.5 text-[13px]' : 'px-5 py-2.5 text-[15px]'
        }`}
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Orçamento Grátis
        {showArrow && <IconArrow />}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4"
          onClick={(e) => { if (e.target === e.currentTarget) close() }}
        >
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-md p-6">
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-4 right-4 text-txt3 hover:text-az transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <h2
              className="text-[24px] font-black uppercase tracking-wide text-az mb-0.5"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Orçamento Grátis
            </h2>
            <p className="text-[14px] text-txt3 mb-5">Preencha e entraremos em contato em até 24h.</p>

            {status === 'ok' ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 rounded-full bg-vd/10 flex items-center justify-center mx-auto mb-3">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E7A3C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-[20px] font-black text-vd" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                  Solicitação enviada!
                </p>
                <p className="text-[14px] text-txt3 mt-1">Entraremos em contato em breve.</p>
                <button
                  onClick={close}
                  className="mt-5 bg-az text-white font-bold px-8 py-2.5 rounded text-[15px] hover:bg-az2 transition-colors"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="col-span-2">
                  <label className="mb-1 block text-[12px] font-bold text-txt2 uppercase tracking-wide">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="nome"
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full rounded border border-borda px-3 py-2.5 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="mb-1 block text-[12px] font-bold text-txt2 uppercase tracking-wide">
                      E-mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded border border-borda px-3 py-2.5 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-[12px] font-bold text-txt2 uppercase tracking-wide">
                      Telefone / WhatsApp
                    </label>
                    <input
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      value={form.telefone}
                      onChange={handleChange}
                      className="w-full rounded border border-borda px-3 py-2.5 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-[12px] font-bold text-txt2 uppercase tracking-wide">
                    Empresa
                  </label>
                  <input
                    name="empresa"
                    type="text"
                    placeholder="Nome da empresa (opcional)"
                    value={form.empresa}
                    onChange={handleChange}
                    className="w-full rounded border border-borda px-3 py-2.5 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-[12px] font-bold text-txt2 uppercase tracking-wide">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    rows={3}
                    placeholder="Descreva sua necessidade..."
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full rounded border border-borda px-3 py-2.5 text-[15px] text-txt placeholder-txt3 focus:border-az focus:outline-none resize-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-[13px] text-red-500">
                    Erro ao enviar. Tente por e-mail: jgbebedourosmkt@gmail.com
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-acc text-[#111] font-extrabold uppercase tracking-wide py-3 rounded text-[16px] hover:brightness-95 transition-all disabled:opacity-60 mt-1"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {status === 'loading' ? 'Enviando...' : 'Solicitar Orçamento'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
