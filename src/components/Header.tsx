import { perfil } from '../data/perfil'
import { linkWhatsapp } from '../lib/util'
import { Logo } from './Logo'

const LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#duvidas', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const zap = linkWhatsapp(perfil.whatsapp)
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
          <Logo className="h-9 w-9" />
          <span className="text-sm font-semibold">{perfil.nome}</span>
        </a>
        <nav aria-label="Seções" className="ml-auto flex items-center gap-1">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hidden rounded-lg px-3 py-2 text-sm text-mist transition hover:bg-surface hover:text-text md:inline-block">
              {l.label}
            </a>
          ))}
          <a
            href={zap ?? '#contato'}
            target={zap ? '_blank' : undefined}
            rel="noreferrer"
            className="ml-2 inline-flex min-h-11 items-center rounded-lg bg-cyan px-4 text-sm font-semibold text-ink transition hover:bg-ice"
          >
            Pedir orçamento
          </a>
        </nav>
      </div>
      <nav aria-label="Seções (celular)" className="flex gap-1 overflow-x-auto border-t border-line/60 px-2 md:hidden">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="shrink-0 px-3 py-2.5 text-sm text-mist">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
