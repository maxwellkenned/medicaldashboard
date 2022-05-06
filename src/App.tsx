import { Header } from './components/Header'
import { LogoImage } from './components/LogoImage'
import { SideMenu } from './components/SideMenu'
import { Routes } from './Routes'

export function App() {
  return (
    <main className="w-full h-full grid grid-cols-[248px_auto] px-10 py-8">
      <aside>
        <LogoImage />
        <SideMenu />
      </aside>

      <section className="w-full h-full bg-background flex flex-col rounded-[30px] overflow-hidden">
        <Header />
        <Routes />
      </section>
    </main>
  )
}
