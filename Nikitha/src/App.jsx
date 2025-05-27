import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Tracks from './components/Tracks/Tracks'
import Schedule from './components/Schedule/Schedule'
import Sponsors from './components/Sponsors/Sponsors'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="base">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
