import { passos, servicos } from '../data/servicos'
import { Icone } from './Icone'
import { Secao } from './Secao'

export function Servicos() {
  return (
    <>
      <Secao
        id="servicos"
        rotulo="Serviços"
        titulo="O que eu faço por você"
        intro="Do site para divulgar seu trabalho ao sistema que organiza a rotina do seu negócio."
      >
        <ul className="grid gap-5 sm:grid-cols-2">
          {servicos.map((s) => (
            <li key={s.titulo} className="flex flex-col rounded-xl border border-line bg-surface/40 p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-cyan/10 text-cyan">
                <Icone nome={s.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.titulo}</h3>
              <p className="mt-2 leading-relaxed text-mist">{s.descricao}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.exemplos.map((e) => (
                  <li key={e} className="rounded-full border border-line-strong px-3 py-1 text-sm text-mist">
                    {e}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Secao>

      <Secao id="como-funciona" rotulo="Como funciona" titulo="Do primeiro contato ao projeto no ar" className="!pt-0">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {passos.map((p, i) => (
            <li key={p.titulo} className="relative rounded-xl border border-line p-6">
              <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-cyan font-mono text-sm font-bold text-cyan">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.descricao}</p>
            </li>
          ))}
        </ol>
      </Secao>
    </>
  )
}
