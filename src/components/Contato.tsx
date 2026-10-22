import { useState } from 'react'
import { perfil } from '../data/perfil'
import { linkWhatsapp, preenchido } from '../lib/util'
import { Secao } from './Secao'

type Canal = { rotulo: string; valor: string; href: string; ok: boolean }

function limparUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

function formatarTelefone(n: string) {
  const d = n.replace(/\D/g, '').replace(/^55/, '')
  return d.length === 11 ? `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}` : n
}

export function Contato() {
  const [copiado, setCopiado] = useState(false)
  const zap = linkWhatsapp(perfil.whatsapp)

  const canais: Canal[] = [
    { rotulo: 'WhatsApp', valor: formatarTelefone(perfil.whatsapp), href: zap ?? '', ok: !!zap },
    { rotulo: 'E-mail', valor: perfil.email, href: `mailto:${perfil.email}`, ok: preenchido(perfil.email) },
    { rotulo: 'LinkedIn', valor: limparUrl(perfil.linkedin), href: perfil.linkedin, ok: preenchido(perfil.linkedin) },
    { rotulo: 'GitHub (meus códigos)', valor: limparUrl(perfil.github), href: perfil.github, ok: preenchido(perfil.github) },
    { rotulo: 'Instagram', valor: limparUrl(perfil.instagram), href: perfil.instagram, ok: preenchido(perfil.instagram) },
  ]
  // No site publicado, canais não preenchidos somem. Rodando no seu computador, aparecem como lembrete.
  const visiveis = canais.filter((c) => c.ok || import.meta.env.DEV)

  async function copiarEmail() {
    try {
      await navigator.clipboard.writeText(perfil.email)
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch {
      /* sem permissão de área de transferência */
    }
  }

  return (
    <Secao
      id="contato"
      rotulo="Contato"
      titulo="Vamos conversar sobre o seu projeto?"
      intro="Me chame do jeito que preferir. Respondo pessoalmente e, depois de entender o que você precisa, envio uma proposta."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col items-start gap-3">
          {zap && (
            <a href={zap} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center rounded-lg bg-cyan px-7 text-lg font-semibold text-ink hover:bg-ice">
              Chamar no WhatsApp
            </a>
          )}
          <div className="flex flex-wrap gap-3">
            {preenchido(perfil.email) && (
              <a href={`mailto:${perfil.email}?subject=${encodeURIComponent('Orçamento de projeto')}`} className="inline-flex min-h-12 items-center rounded-lg border border-line-strong px-5 font-semibold hover:border-cyan hover:text-cyan">
                Enviar e-mail
              </a>
            )}
            {preenchido(perfil.email) && (
              <button type="button" onClick={copiarEmail} className="inline-flex min-h-12 items-center rounded-lg border border-line-strong px-5 font-semibold hover:border-cyan hover:text-cyan">
                {copiado ? 'E-mail copiado ✓' : 'Copiar e-mail'}
              </button>
            )}
            {preenchido(perfil.curriculo) && (
              <a href={perfil.curriculo} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-lg border border-line-strong px-5 font-semibold hover:border-cyan hover:text-cyan">
                Ver currículo
              </a>
            )}
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {visiveis.map((c) => (
            <li key={c.rotulo} className="min-w-0">
              {c.ok ? (
                <a
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex min-h-20 flex-col justify-center rounded-xl border border-line bg-surface/40 px-5 py-4 transition hover:border-cyan/60"
                >
                  <span className="text-xs font-semibold text-cyan">{c.rotulo}</span>
                  <span className="mt-1 truncate text-sm">{c.valor}</span>
                </a>
              ) : (
                <div className="flex min-h-20 flex-col justify-center rounded-xl border border-dashed border-line-strong px-5 py-4 text-muted">
                  <span className="text-xs font-semibold">{c.rotulo}</span>
                  <span className="mt-1 text-sm">preencha em src/data/perfil.ts (só você vê este aviso)</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Secao>
  )
}
