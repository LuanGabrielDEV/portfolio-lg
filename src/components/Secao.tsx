import type { ReactNode } from 'react'

type Props = {
  id: string
  rotulo: string
  titulo: string
  intro?: string
  children: ReactNode
  className?: string
}

/** Moldura padrão das seções: rótulo curto, título e uma frase de introdução. */
export function Secao({ id, rotulo, titulo, intro, children, className = '' }: Props) {
  return (
    <section id={id} className={'mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 ' + className}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{rotulo}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight [text-wrap:balance] sm:text-4xl">{titulo}</h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{intro}</p>}
      <div className="mt-10">{children}</div>
    </section>
  )
}
