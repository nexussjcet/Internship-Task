import React from 'react';
import Herosection from './components/herosection';
import Statsection from './components/statsection';
import About from './components/about';
import Features from './components/features';
import Footer from './components/footer';
import './App.css';

function App() {
     return (
          <div className="font-sans text-gray-800 bg-gray-900 overflow-x-hidden">
               <Herosection />
               <Statsection />
               <About />
               <Features />
               <Footer />
          </div>
     );
}

export default App;