import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Science from './components/Science'
import HowItWorks from './components/HowItWorks'
import WhoItsFor from './components/WhoItsFor'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950 text-white">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Science />
        <HowItWorks />
        <WhoItsFor />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
