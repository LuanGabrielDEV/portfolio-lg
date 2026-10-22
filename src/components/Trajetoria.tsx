import { perfil } from '../data/perfil'
import { trajetoria } from '../data/trajetoria'
import type { Marco, TipoMarco } from '../data/types'
import { formatarData, porDataDesc, preenchido } from '../lib/util'
import { Logo } from './Logo'
import { Secao } from './Secao'

const ROTULO: Record<TipoMarco, string> = {
  projeto: 'Projeto',
  curso: 'Curso',
  experiencia: 'Experiência',
  certificado: 'Certificado',
  formacao: 'Formação',
}

// posições das linhas no gráfico (px)
const MAIN = 14
const EST = 46

export function Trajetoria() {
  const itens = [...trajetoria].sort((a, b) => Number(!!b.futuro) - Number(!!a.futuro) || porDataDesc(a, b))
  const indiceAtual = itens.findIndex((m) => !m.futuro)

  return (
    <Secao id="sobre" rotulo="Sobre mim" titulo="Quem vai cuidar do seu projeto">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="min-w-0">
          <div className="flex items-center gap-4">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-line-strong bg-deep">
              <Logo className="h-9 w-9" />
            </span>
            <div>
              <p className="text-lg font-semibold">{perfil.nome}</p>
              <p className="text-sm text-muted">{perfil.localizacao} · atendo todo o Brasil online</p>
            </div>
          </div>
          <p className="mt-6 leading-relaxed text-mist">{perfil.bio}</p>
          <div className="mt-8 rounded-xl border border-line p-5 text-sm leading-relaxed text-mist">
            <p className="font-semibold text-text">Como ler a minha linha do tempo</p>
            <p className="mt-2">
              Ela é desenhada como o histórico de um projeto de software. A linha principal mostra trabalhos e projetos; o ramo azul mostra
              formação e cursos, que saem da linha principal e voltam somando ao que eu entrego.
            </p>
            <div className="mt-4 flex flex-wrap gap-5 text-xs">
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full border-2 border-cyan" /> Trabalhos e projetos
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-electric" /> Formação e cursos
              </span>
            </div>
          </div>
        </div>

        <ol className="relative min-w-0">
          {itens.map((item, i) => (
            <Linha
              key={`${item.data}-${item.titulo}-${i}`}
              item={item}
              primeiro={i === 0}
              atual={i === indiceAtual}
              ultimo={i === itens.length - 1}
              anteriorEstudos={itens[i - 1]?.ramo === 'estudos'}
              proximoEstudos={itens[i + 1]?.ramo === 'estudos'}
            />
          ))}
        </ol>
      </div>
    </Secao>
  )
}

type LinhaProps = {
  item: Marco
  primeiro: boolean
  atual: boolean
  ultimo: boolean
  anteriorEstudos: boolean
  proximoEstudos: boolean
}

function Linha({ item, primeiro, atual, ultimo, anteriorEstudos, proximoEstudos }: LinhaProps) {
  const estudos = item.ramo === 'estudos'
  const nodeY = 30
  const x = estudos ? EST : MAIN
  const data = formatarData(item.data)

  return (
    <li className="relative flex min-h-[96px] gap-4 sm:gap-6">
      <div className="relative w-16 shrink-0" aria-hidden="true">
        <span
          className="absolute w-0.5 bg-cyan/70"
          style={{ left: MAIN - 1, top: primeiro ? nodeY : 0, bottom: ultimo ? `calc(100% - ${nodeY}px)` : 0 }}
        />
        {estudos && (
          <>
            <span
              className="absolute w-0.5 bg-electric"
              style={{ left: EST - 1, top: anteriorEstudos ? 0 : nodeY, bottom: proximoEstudos ? 0 : `calc(100% - ${nodeY}px)` }}
            />
            {!anteriorEstudos && !primeiro && (
              <svg className="absolute left-0 top-0 overflow-visible" width="64" height={nodeY}>
                <path d={`M${MAIN} 0 C${MAIN} 18 ${EST} 12 ${EST} ${nodeY}`} fill="none" stroke="#2F6BFF" strokeWidth="2" />
              </svg>
            )}
            {!proximoEstudos && !ultimo && (
              <svg className="absolute left-0 overflow-visible" style={{ top: nodeY }} width="64" height="44">
                <path d={`M${EST} 0 C${EST} 26 ${MAIN} 18 ${MAIN} 44`} fill="none" stroke="#2F6BFF" strokeWidth="2" />
              </svg>
            )}
          </>
        )}
        <span
          className={
            'absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full ' +
            (item.futuro ? 'border-2 border-dashed border-electric bg-ink' : estudos ? 'bg-electric ring-4 ring-ink' : item.tipo === 'projeto' ? 'border-[3px] border-cyan bg-ink' : 'bg-ice ring-4 ring-ink')
          }
          style={{ left: x, top: nodeY }}
        />
      </div>

      <div className={'min-w-0 flex-1 pb-8 pt-4 ' + (item.exemplo ? 'opacity-60' : '')}>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          {data && <span className="text-muted">{data}</span>}
          <span className={'font-semibold ' + (estudos ? 'text-electric' : 'text-cyan')}>{ROTULO[item.tipo]}</span>
          {item.futuro && <span className="rounded-full border border-dashed border-electric px-2 py-0.5 text-electric">Em breve</span>}
          {atual && <span className="rounded-full border border-cyan/40 px-2 py-0.5 text-cyan">Mais recente</span>}
        </div>
        <h3 className="mt-1.5 text-lg font-semibold">
          {item.link ? (
            <a href={item.link} target="_blank" rel="noreferrer" className="underline-offset-4 hover:text-cyan hover:underline">
              {item.titulo}
            </a>
          ) : (
            item.titulo
          )}
        </h3>
        {preenchido(item.instituicao) && <p className="mt-0.5 text-sm text-mist">{item.instituicao}</p>}
        {preenchido(item.descricao) && <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist/90">{item.descricao}</p>}
      </div>
    </li>
  )
}
