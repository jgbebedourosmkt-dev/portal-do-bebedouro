'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function NewsletterMini() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    setStatus(res.ok ? 'ok' : 'error')
  }

  return (
    <div className="rounded overflow-hidden bg-az p-4">
      <h3
        className="mb-1 text-[18px] font-black text-white"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Newsletter do Setor
      </h3>
      <p className="text-[14px] text-white/70 mb-3">
        Notícias e normas toda semana, direto no seu e-mail.
      </p>
      {status === 'ok' ? (
        <p className="text-[14px] font-bold text-acc py-2">Inscrição confirmada!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full px-3 py-2 text-[16px] bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-acc"
          />
          {status === 'error' && (
            <p className="text-[12px] text-red-400">Erro ao inscrever. Tente novamente.</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-2 text-[14px] font-black uppercase tracking-wide bg-acc text-[#111] hover:bg-yellow-300 transition-colors disabled:opacity-60"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            {status === 'loading' ? 'Enviando...' : 'Assinar grátis'}
          </button>
        </form>
      )}
    </div>
  )
}
