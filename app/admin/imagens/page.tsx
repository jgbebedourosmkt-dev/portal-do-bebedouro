'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface BlobItem {
  url: string;
  pathname: string;
  size: number;
  uploadedAt: string;
}

export default function BancoDeImagens() {
  const [senha, setSenha] = useState('');
  const [autenticado, setAutenticado] = useState(false);
  const [senhaErrada, setSenhaErrada] = useState(false);
  const [imagens, setImagens] = useState<BlobItem[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [copiado, setCopiado] = useState<string | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const headers = { 'x-admin-password': senha };

  const buscarImagens = useCallback(async () => {
    setCarregando(true);
    const res = await fetch('/api/imagens', { headers });
    if (res.ok) {
      const data = await res.json();
      setImagens(data);
    }
    setCarregando(false);
  }, [senha]);

  useEffect(() => {
    if (autenticado) buscarImagens();
  }, [autenticado, buscarImagens]);

  async function entrar(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/imagens', { headers });
    if (res.ok) {
      setAutenticado(true);
      setSenhaErrada(false);
    } else {
      setSenhaErrada(true);
    }
  }

  async function uploadArquivos(files: FileList | File[]) {
    setEnviando(true);
    for (const file of Array.from(files)) {
      const form = new FormData();
      form.append('file', file);
      await fetch('/api/upload', { method: 'POST', headers, body: form });
    }
    await buscarImagens();
    setEnviando(false);
  }

  async function excluir(url: string) {
    if (!confirm('Excluir esta imagem?')) return;
    await fetch('/api/imagens', {
      method: 'DELETE',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    setImagens((prev) => prev.filter((img) => img.url !== url));
  }

  function copiarUrl(url: string) {
    navigator.clipboard.writeText(url);
    setCopiado(url);
    setTimeout(() => setCopiado(null), 2000);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setArrastando(false);
    if (e.dataTransfer.files.length) uploadArquivos(e.dataTransfer.files);
  }

  function formatarTamanho(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  if (!autenticado) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <form onSubmit={entrar} className="bg-white rounded-xl shadow p-8 w-full max-w-sm space-y-4">
          <h1 className="text-xl font-bold text-gray-800">Banco de Imagens</h1>
          <p className="text-sm text-gray-500">Digite a senha de administrador para continuar.</p>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
          {senhaErrada && <p className="text-red-500 text-sm">Senha incorreta.</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-800">Banco de Imagens</h1>
          <span className="text-sm text-gray-500">{imagens.length} imagem(ns)</span>
        </div>

        {/* Área de upload */}
        <div
          onDragOver={(e) => { e.preventDefault(); setArrastando(true); }}
          onDragLeave={() => setArrastando(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition ${
            arrastando ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-100'
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && uploadArquivos(e.target.files)}
          />
          {enviando ? (
            <p className="text-blue-600 font-medium">Enviando...</p>
          ) : (
            <>
              <p className="text-gray-600 font-medium">Arraste imagens aqui ou clique para selecionar</p>
              <p className="text-gray-400 text-sm mt-1">PNG, JPG, WebP, SVG</p>
            </>
          )}
        </div>

        {/* Grid de imagens */}
        {carregando ? (
          <p className="text-gray-500 text-center py-10">Carregando...</p>
        ) : imagens.length === 0 ? (
          <p className="text-gray-400 text-center py-10">Nenhuma imagem ainda. Faça upload acima.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {imagens.map((img) => {
              const nome = img.pathname.replace('imagens/', '');
              return (
                <div key={img.url} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                  <div className="relative aspect-square bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.url}
                      alt={nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-2 space-y-1">
                    <p className="text-xs text-gray-700 truncate" title={nome}>{nome}</p>
                    <p className="text-xs text-gray-400">{formatarTamanho(img.size)}</p>
                    <div className="flex gap-1 pt-1">
                      <button
                        onClick={() => copiarUrl(img.url)}
                        className="flex-1 text-xs bg-blue-50 text-blue-600 rounded px-2 py-1 hover:bg-blue-100 transition"
                      >
                        {copiado === img.url ? 'Copiado!' : 'Copiar URL'}
                      </button>
                      <button
                        onClick={() => excluir(img.url)}
                        className="text-xs bg-red-50 text-red-500 rounded px-2 py-1 hover:bg-red-100 transition"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
