/** true quando o campo foi preenchido de verdade (não vazio e sem [colchetes]) */
export function preenchido(valor?: string): valor is string {
  return !!valor && !valor.trim().startsWith('[')
}

/** Link do WhatsApp com mensagem pronta, ou null se o número não foi preenchido. */
export function linkWhatsapp(numero: string, mensagem = 'Olá, Luan! Vi seu site e quero conversar sobre um projeto.') {
  if (!preenchido(numero)) return null
  return `https://wa.me/${numero.replace(/\D/g, '')}?text=${encodeURIComponent(mensagem)}`
}

const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

/** "2026-10" → "out 2026" · "" → "" */
export function formatarData(data: string): string {
  if (!data) return ''
  const [ano, mes] = data.split('-')
  const i = Number(mes) - 1
  return MESES[i] ? `${MESES[i]} ${ano}` : ano
}

/** Mais recente primeiro; itens sem data vão para o fim. */
export function porDataDesc<T extends { data: string }>(a: T, b: T): number {
  if (!a.data && !b.data) return 0
  if (!a.data) return 1
  if (!b.data) return -1
  return b.data.localeCompare(a.data)
}
