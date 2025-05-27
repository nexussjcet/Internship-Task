import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contactus from './components/Contactus/Contactus'
import Schedule from './components/Schedule/Schedule'
import Copyright from './components/Copyright/Copyright'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
import './App.css'
import './index.css';


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="base">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Contactus />
      <Schedule />
      <FAQ />
      <Footer>
         <Copyright />
      </Footer>
    </div>
  )
}

export default App
