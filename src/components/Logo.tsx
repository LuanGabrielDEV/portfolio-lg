import { useId } from 'react'

type Props = {
  className?: string
  /** gradiente (padrão), azul, branco ou preto */
  tom?: 'gradiente' | 'azul' | 'branco' | 'preto'
  titulo?: string
}

const TONS = {
  azul: { s: '#1D4ED8', n1: '#0891B2', n2: '#0B0F17' },
  branco: { s: '#FFFFFF', n1: '#FFFFFF', n2: '#FFFFFF' },
  preto: { s: '#0B0F17', n1: '#0B0F17', n2: '#0B0F17' },
}

/** Símbolo lg (versão E1-B): as letras desenhadas como ramos de um repositório Git. */
export function Logo({ className, tom = 'gradiente', titulo }: Props) {
  const id = useId().replace(/:/g, '')
  const grad = `lg-grad-${id}`
  const c = tom === 'gradiente' ? { s: `url(#${grad})`, n1: '#22D3EE', n2: '#C9F8FF' } : TONS[tom]

  return (
    <svg
      viewBox="4 0 150 160"
      className={className}
      role={titulo ? 'img' : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
    >
      <defs>
        <linearGradient id={grad} gradientUnits="userSpaceOnUse" x1="10" y1="160" x2="150" y2="0">
          <stop offset="0" stopColor="#2F6BFF" />
          <stop offset="0.55" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#C9F8FF" />
        </linearGradient>
      </defs>
      <g fill="none" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" stroke={c.s}>
        <path d="M28 28 V104 Q28 124 46 124" />
        <path d="M28 90 C28 70 46 66 68 66" />
        <circle cx="96" cy="66" r="28" />
        <path d="M124 66 V112 Q124 148 94 148 Q76 148 70 136" />
      </g>
      <circle cx="28" cy="16" r="9" fill="none" stroke={c.n1} strokeWidth="6" />
      <circle cx="69" cy="134" r="9.5" fill={c.n2} />
    </svg>
  )
}
