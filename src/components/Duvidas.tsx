import { perguntas } from '../data/servicos'
import { Secao } from './Secao'

export function Duvidas() {
  return (
    <Secao id="duvidas" rotulo="Dúvidas" titulo="Perguntas frequentes">
      <div className="grid gap-3 lg:max-w-3xl">
        {perguntas.map((p) => (
          <details key={p.pergunta} className="group rounded-xl border border-line bg-surface/40 px-5 open:border-line-strong">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
              {p.pergunta}
              <span className="text-xl text-cyan transition group-open:rotate-45" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="pb-5 leading-relaxed text-mist">{p.resposta}</p>
          </details>
        ))}
      </div>
    </Secao>
  )
}
