import { perfil } from '../data/perfil'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
        <Logo className="h-8 w-8" />
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {perfil.nome} · {perfil.headline}
        </p>
        <a href="#inicio" className="text-sm text-muted hover:text-text sm:ml-auto">
          Voltar ao topo ↑
        </a>
      </div>
    </footer>
  )
}
