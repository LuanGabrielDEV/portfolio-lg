import type { IconeServico } from '../data/types'

const PATHS: Record<IconeServico, string> = {
  // janela de navegador
  site: 'M3 5h18v14H3z M3 9h18 M6.5 7h.01 M9 7h.01',
  // painel com gráfico
  sistema: 'M4 4h16v16H4z M8 16v-4 M12 16V8 M16 16v-6',
  // dois nós ligados (o "ramo" da marca)
  integracao: 'M6 6a2 2 0 1 0 0 .01 M18 18a2 2 0 1 0 0 .01 M6 8v4a4 4 0 0 0 4 4h6',
  // chave de ajuste
  manutencao: 'M14.5 6.5a4 4 0 0 0-5.4 5.2L4 16.8 7.2 20l5.1-5.1a4 4 0 0 0 5.2-5.4l-2.4 2.4-2.4-.6-.6-2.4z',
}

export function Icone({ nome, className = 'h-6 w-6' }: { nome: IconeServico; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[nome]} />
    </svg>
  )
}
