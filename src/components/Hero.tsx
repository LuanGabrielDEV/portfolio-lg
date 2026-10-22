import { perfil } from '../data/perfil'
import { servicos } from '../data/servicos'
import { linkWhatsapp } from '../lib/util'
import { Icone } from './Icone'
import { Logo } from './Logo'

export function Hero() {
  const zap = linkWhatsapp(perfil.whatsapp)
  return (
    <section id="inicio" className="relative overflow-hidden">
      <Logo className="pointer-events-none absolute -right-24 top-6 h-[34rem] w-[34rem] opacity-[0.04] sm:-right-10 sm:opacity-[0.06]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div className="min-w-0">
          {perfil.disponivel && (
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong px-3 py-1.5 text-xs text-mist">
              <span className="h-2 w-2 rounded-full bg-cyan" aria-hidden="true" />
              Agenda aberta para novos projetos
            </p>
          )}
          <p className="mt-6 text-lg text-mist">
            Olá, eu sou <strong className="font-semibold text-text">{perfil.nome}</strong>, {perfil.cargo.toLowerCase()}.
          </p>
          <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight [text-wrap:balance] sm:text-6xl">
            {perfil.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">{perfil.subtitulo}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={zap ?? '#contato'}
              target={zap ? '_blank' : undefined}
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-lg bg-cyan px-6 font-semibold text-ink transition hover:bg-ice"
            >
              Conversar no WhatsApp
            </a>
            <a href="#projetos" className="inline-flex min-h-12 items-center rounded-lg border border-line-strong px-6 font-semibold transition hover:border-cyan hover:text-cyan">
              Ver trabalhos
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-line bg-deep/80 p-6 shadow-2xl shadow-black/40 sm:p-7">
          <p className="text-sm font-semibold text-mist">Posso te ajudar com</p>
          <ul className="mt-5 grid gap-4">
            {servicos.map((s) => (
              <li key={s.titulo} className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan/10 text-cyan">
                  <Icone nome={s.icone} />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold">{s.titulo}</p>
                  <p className="mt-0.5 text-sm text-muted">{s.exemplos.slice(0, 2).join(' · ')}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
