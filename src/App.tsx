import { Contato } from './components/Contato'
import { Duvidas } from './components/Duvidas'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projetos } from './components/Projetos'
import { Servicos } from './components/Servicos'
import { Stack } from './components/Stack'
import { Trajetoria } from './components/Trajetoria'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-cyan focus:px-4 focus:py-2 focus:text-ink">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Servicos />
        <Projetos />
        <Trajetoria />
        <Stack />
        <Duvidas />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
