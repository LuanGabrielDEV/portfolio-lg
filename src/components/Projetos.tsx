import { useEffect, useMemo, useRef, useState } from 'react'
import { projetos } from '../data/projetos'
import type { Projeto } from '../data/types'
import { perfil } from '../data/perfil'
import { formatarData, linkWhatsapp, porDataDesc, preenchido } from '../lib/util'
import { Logo } from './Logo'
import { Secao } from './Secao'

export function Projetos() {
  const [filtro, setFiltro] = useState<string | null>(null)
  const [aberto, setAberto] = useState<Projeto | null>(null)

  const ordenados = useMemo(
    // Projetos de exemplo só aparecem quando você roda o site no seu computador.
    () => [...projetos].filter((p) => !p.exemplo || import.meta.env.DEV).sort((a, b) => Number(!!b.destaque) - Number(!!a.destaque) || porDataDesc(a, b)),
    [],
  )
  const tags = useMemo(() => [...new Set(ordenados.flatMap((p) => p.stack))].sort(), [ordenados])
  const visiveis = filtro ? ordenados.filter((p) => p.stack.includes(filtro)) : ordenados

  return (
    <Secao
      id="projetos"
      rotulo="Trabalhos"
      titulo="Projetos que já fiz"
      intro="Toque em um projeto para ver o que foi feito, para quem e como ficou."
    >
      {ordenados.length >= 4 && tags.length > 1 && (
        <div className="mb-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filtrar por ferramenta">
          <span className="mr-1 text-sm text-muted">Filtrar por ferramenta:</span>
          <Chip ativo={filtro === null} onClick={() => setFiltro(null)}>
            Todos
          </Chip>
          {tags.map((t) => (
            <Chip key={t} ativo={filtro === t} onClick={() => setFiltro(filtro === t ? null : t)}>
              {t}
            </Chip>
          ))}
        </div>
      )}

      {visiveis.length === 0 ? (
        <p className="rounded-xl border border-dashed border-line-strong p-10 text-center text-mist">
          Novos projetos em breve.
        </p>
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((p) => (
            <li key={p.id}>
              <Cartao projeto={p} onAbrir={() => setAberto(p)} />
            </li>
          ))}
          {!filtro && visiveis.length < 6 && (
            <li>
              <a
                href={linkWhatsapp(perfil.whatsapp) ?? '#contato'}
                target={linkWhatsapp(perfil.whatsapp) ? '_blank' : undefined}
                rel="noreferrer"
                className="flex h-full min-h-64 flex-col items-start justify-end rounded-xl border border-dashed border-cyan/50 p-6 transition hover:border-cyan hover:bg-cyan/5"
              >
                <span className="text-3xl text-cyan" aria-hidden="true">+</span>
                <span className="mt-3 text-lg font-semibold">O próximo pode ser o seu</span>
                <span className="mt-2 text-sm leading-relaxed text-mist">Me conte sua ideia e eu explico como ela pode virar um site ou sistema.</span>
                <span className="mt-4 text-sm font-semibold text-cyan">Conversar no WhatsApp →</span>
              </a>
            </li>
          )}
        </ul>
      )}

      {aberto && <Detalhe projeto={aberto} onFechar={() => setAberto(null)} />}
    </Secao>
  )
}

function Chip({ ativo, onClick, children }: { ativo: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={
        'min-h-10 rounded-full border px-4 text-sm transition ' +
        (ativo ? 'border-cyan bg-cyan text-ink' : 'border-line-strong text-mist hover:border-cyan hover:text-text')
      }
    >
      {children}
    </button>
  )
}

function Capa({ projeto, className = '' }: { projeto: Projeto; className?: string }) {
  if (projeto.imagem) {
    return <img src={projeto.imagem} alt="" className={'w-full object-cover ' + className} loading="lazy" />
  }
  return (
    <div className={'flex items-center justify-center bg-deep ' + className}>
      <Logo className="h-16 w-16 opacity-60" />
    </div>
  )
}

function Cartao({ projeto, onAbrir }: { projeto: Projeto; onAbrir: () => void }) {
  return (
    <button
      type="button"
      onClick={onAbrir}
      className={
        'group flex h-full w-full flex-col overflow-hidden rounded-xl border bg-surface/40 text-left transition hover:-translate-y-0.5 hover:border-cyan/60 ' +
        (projeto.exemplo ? 'border-dashed border-line-strong opacity-60' : 'border-line')
      }
    >
      <Capa projeto={projeto} className="h-40" />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-muted">{formatarData(projeto.data)}</span>
          {projeto.status === 'em-andamento' && <span className="text-electric">em andamento</span>}
          {projeto.destaque && <span className="text-cyan">destaque</span>}
          {projeto.exemplo && <span className="text-muted">exemplo</span>}
        </div>
        <h3 className="mt-2 text-lg font-semibold group-hover:text-cyan">{projeto.titulo}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mist">{projeto.resumo}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {projeto.stack.map((s) => (
            <li key={s} className="rounded bg-line px-2 py-1 font-mono text-[11px] text-mist">
              {s}
            </li>
          ))}
        </ul>
      </div>
    </button>
  )
}

function Detalhe({ projeto, onFechar }: { projeto: Projeto; onFechar: () => void }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = ref.current
    d?.showModal()
    return () => d?.close()
  }, [])

  return (
    <dialog
      ref={ref}
      onClose={onFechar}
      onClick={(e) => e.target === ref.current && onFechar()}
      aria-labelledby="titulo-projeto"
      className="m-auto w-[min(44rem,calc(100%-2rem))] overflow-hidden rounded-2xl border border-line-strong bg-ink p-0 text-text backdrop:bg-black/70"
    >
      <Capa projeto={projeto} className="h-48 sm:h-60" />
      <div className="p-6 sm:p-8">
        <p className="font-mono text-xs text-muted">
          {formatarData(projeto.data)} · {projeto.status === 'concluido' ? 'concluído' : 'em andamento'}
        </p>
        <h3 id="titulo-projeto" className="mt-2 text-2xl font-bold">
          {projeto.titulo}
        </h3>
        <p className="mt-4 whitespace-pre-line leading-relaxed text-mist">{projeto.descricao}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {projeto.stack.map((s) => (
            <li key={s} className="rounded bg-line px-2 py-1 font-mono text-xs text-mist">
              {s}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-3">
          {preenchido(projeto.demo) && (
            <a href={projeto.demo} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-lg bg-cyan px-5 font-semibold text-ink hover:bg-ice">
              Ver online
            </a>
          )}
          {preenchido(projeto.repositorio) && (
            <a href={projeto.repositorio} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-lg border border-line-strong px-5 font-semibold hover:border-cyan hover:text-cyan">
              Ver o código
            </a>
          )}
          <button type="button" onClick={onFechar} className="ml-auto inline-flex min-h-11 items-center rounded-lg px-5 text-mist hover:text-text">
            Fechar
          </button>
        </div>
      </div>
    </dialog>
  )
}
