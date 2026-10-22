import { aprendizado, stack } from '../data/stack'
import { Secao } from './Secao'

export function Stack() {
  return (
    <Secao
      id="ferramentas"
      rotulo="Ferramentas"
      titulo="Ferramentas que uso"
      intro="Você não precisa conhecer nenhuma delas. Elas mostram que seu projeto é feito com tecnologias modernas, usadas por empresas do mundo todo."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {stack.map((g) => (
          <div key={g.grupo} className="rounded-xl border border-line bg-surface/40 p-6">
            <h3 className="text-lg font-semibold">{g.grupo}</h3>
            <p className="mt-1 text-sm text-muted">{g.explicacao}</p>
            <ul className="mt-5 divide-y divide-line">
              {g.itens.map((item) => (
                <li key={item.nome} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
                  <span className="font-mono text-sm text-cyan">{item.nome}</span>
                  <span className="text-sm text-mist">{item.para}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {aprendizado && (
        <div className="mt-6 flex items-start gap-4 rounded-xl border border-dashed border-electric/60 p-6">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-electric/15 text-electric" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 17l6-6 4 4 6-8 M14 7h6v6" />
            </svg>
          </span>
          <div className="min-w-0">
            <p className="font-semibold">Sempre aprendendo</p>
            <p className="mt-1 leading-relaxed text-mist">{aprendizado}</p>
          </div>
        </div>
      )}
    </Secao>
  )
}
