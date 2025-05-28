import { useState } from 'react'
import background1 from './assets/background1.jpg'
import Section  from './components/section.jsx'


// import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <div className='text-white font-medium'>
        <div className="relative w-full h-screen min-h-[100vh] m-0" >
          <div className="absolute inset-0 bg-black opacity-50 -z-10"></div>
          <img
            src={background1}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover -z-20"
          />
          <nav className="w-full p-4">
            <div className="flex justify-end sm:hidden">
              <button 
                onClick={() => setCount(!count)}
                className="text-white p-2 hover:bg-white/20 rounded-lg"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {count ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
            <ul className={`${count ? 'flex bg-black/70' : 'hidden'} sm:flex flex-col sm:flex-row justify-start items-center gap-4 sm:gap-6 text-base sm:text-lg `}>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center'>Home</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center'>Schedule</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center'>About us</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center'>Contact</li>
            </ul>
          </nav>
          <div>
            <div className='text-center mt-16 md:mt-25 px-4'>
              <h1 className='text-3xl sm:text-4xl md:text-6xl mb-2'>Join the Ultimate Coding</h1>
              <h1 className='text-3xl sm:text-4xl md:text-6xl mb-2'>Challenge at Hackosphere</h1>
              <h1 className='text-3xl sm:text-4xl md:text-6xl mb-4'>2025</h1>
              <h3 className='text-xl sm:text-2xl md:text-3xl mt-4 mb-3'>Code. Create. Conquer.</h3>
              
              <span className='text-sm sm:text-base md:text-xl block mb-6'>June 20–22, 2025 – Online</span>
              <div className='mt-7 space-y-3 sm:space-y-0'>
                <button className='p-2 sm:pr-4 pl-4 rounded-xl bg-white text-black font-medium mr-2 text-sm sm:text-base
                hover:bg-white/20 hover:shadow-lg transition duration-300 ease-in-out'>Register</button>
                <button className='p-2 sm:pr-3 pl-3 rounded-xl bg-white text-black font-medium text-sm sm:text-base
                                hover:bg-white/20 hover:shadow-lg transition duration-300 ease-in-out'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white '>
      <div className=' text-3xl mt-10 ml-5 text-center'>
        <h1>
          How hacksphere 2025 will bring your</h1>
        <h1>ideas to life</h1>
      </div>
      <div className='flex justify-center items-center mt-3 rounded-2xl' >
    <div className='bg-black/70 shadow-[0_0_15px_3px_rgba(59,130,246,0.5)] max-w-2/3  m-4 md:text-center p-6 text-0.5xl rounded-2xl 
    transition-transform duration-300 ease-in-out hover:scale-105 hover:z-10 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]; '>
        <p>HackSphere 2025 is a global 48-hour online hackathon happening from June 22–24, 2025. It’s designed to unite developers, designers, innovators, and problem-solvers from around the world in a fast-paced, collaborative environment — all from the comfort of your own home.

Over the course of two intense days, participants will tackle real-world challenges, build cutting-edge solutions, and compete for prizes and global recognition. Whether you're a seasoned coder or a first-time hacker, HackSphere is your opportunity to learn,</p>
      </div>
    </div>
    <div className='flex flex-wrap justify-center '>
      <Section h1="Join Us for an Exciting 48-Hour" 
               h2="Coding Challenge"
               description="HackoSphere is your chance to innovate,collaborate and showcase your skills"/>
       
       <Section h1="Registration is Easy and Quick-" 
       h2="Get Started Today!"
       description="Sign Up to Secure the Spot for your Team"
       />
        
        <Section h1="Submit your Projects for a Chance"
        h2="To Win Amazing Prices"
        description="Showcase your Project by Submitting your Project before Deadline "
        />
    </div>
  </div>
    </>
  )
}

export default App
