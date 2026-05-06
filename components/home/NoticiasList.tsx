'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/lib/posts'

interface NoticiasListProps {
  posts: Post[]
}

const tabs = [
  { key: 'all', label: 'Todas' },
  { key: 'mercado', label: 'Mercado' },
  { key: 'legislacao', label: 'Legislação' },
  { key: 'saude', label: 'Saúde' },
]

export default function NoticiasList({ posts }: NoticiasListProps) {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all' ? posts : posts.filter((p) => p.categoria === activeTab)

  return (
    <section className="py-8 md:pr-8">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h2
          className="text-[26px] font-black text-txt"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Notícias Populares
        </h2>
        <div className="flex flex-wrap gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1 text-[14px] font-bold uppercase tracking-wide transition-colors ${
                activeTab === tab.key
                  ? 'bg-az text-white'
                  : 'bg-bg text-txt3 hover:bg-borda'
              }`}
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <ul className="space-y-4">
        {filtered.slice(0, 6).map((post, i) => (
          <li key={post.slug} className="flex items-start gap-4 border-b border-borda pb-4">
            <span
              className="flex-shrink-0 text-[38px] font-black text-borda leading-none"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <Link href={`/artigo/${post.slug}`} className="group">
              <h3
                className="text-[24px] font-bold text-txt leading-tight group-hover:text-az transition-colors line-clamp-2"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {post.title}
              </h3>
              <p className="mt-1 text-[17px] text-txt3">
                {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime} min
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
