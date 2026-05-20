'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContatoForm() {
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/contato', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })

    setStatus(res.ok ? 'ok' : 'error')
  }

  if (status === 'ok') {
    return (
      <div className="rounded bg-vd/10 border border-vd2 px-6 py-5 mt-8">
        <p className="text-[20px] font-black text-vd" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Mensagem enviada!
        </p>
        <p className="mt-1 text-[16px] text-txt2">
          Recebemos seu contato e responderemos em até 2 dias úteis.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="mb-1 block text-[14px] font-bold text-txt2 uppercase tracking-wide">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            placeholder="Seu nome completo"
            className="w-full rounded border border-borda px-4 py-2.5 text-[16px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-[14px] font-bold text-txt2 uppercase tracking-wide">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="seu@email.com"
            className="w-full rounded border border-borda px-4 py-2.5 text-[16px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block text-[14px] font-bold text-txt2 uppercase tracking-wide">
          Assunto
        </label>
        <input
          type="text"
          value={form.assunto}
          onChange={(e) => setForm({ ...form, assunto: e.target.value })}
          placeholder="Ex: Publicidade, Pauta editorial, Parceria..."
          className="w-full rounded border border-borda px-4 py-2.5 text-[16px] text-txt placeholder-txt3 focus:border-az focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1 block text-[14px] font-bold text-txt2 uppercase tracking-wide">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          placeholder="Escreva sua mensagem..."
          className="w-full rounded border border-borda px-4 py-2.5 text-[16px] text-txt placeholder-txt3 focus:border-az focus:outline-none resize-none"
        />
      </div>
      {status === 'error' && (
        <p className="text-[14px] text-red-500">
          Erro ao enviar. Tente novamente ou mande e-mail diretamente para jgbebedourosmkt@gmail.com.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-10 py-3 bg-az text-white text-[16px] font-black uppercase tracking-wide hover:bg-az2 transition-colors rounded disabled:opacity-60"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
