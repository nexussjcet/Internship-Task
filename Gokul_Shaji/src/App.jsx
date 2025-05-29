import { useState ,useRef} from 'react'
import background1 from './assets/background1.jpg'
import Section  from './components/section.jsx'
import ImageSlider from './components/slider.jsx'
import Faqs from './components/Faqs.jsx'
import Contact from './components/contact.jsx'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


function App() {
  const [count, setCount] = useState(0)
  const homeRef=useRef()
  const aboutRef=useRef()
  const eventRef=useRef()
  const contactRef=useRef()
  const scrollToSection=(ref)=>{
    ref.current?.scrollIntoView({behaviour: 'smooth'})
  }
  

  return (
    <> 
    <section ref={homeRef}>
      <div className='text-white font-medium flex flex-col items-center justify-center w-full'>
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
            <ul className={`${count ? 'flex bg-black/70' : 'hidden'} sm:flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 text-base sm:text-lg `}>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center' onClick={() => scrollToSection(homeRef)}>Home</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center' onClick={() => scrollToSection(aboutRef)}>About us</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center' onClick={() => scrollToSection(eventRef)}>Events</li>
              <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer w-full sm:w-auto text-center' onClick={() => scrollToSection(contactRef)}>Contact</li>
            </ul>
          </nav>
          <div className='container mx-auto px-4'>
            <div className='text-center mt-16 md:mt-25'>
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
    </section>

    <section ref={aboutRef}>
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
</section>
<section ref={eventRef}>
   <div>
    <div className='text-center  text-white mt-6'>
      <h1 className='text-4xl'>Event Highlights</h1>
      <h5 className='text-0.5xl md:mt-6'>Explore inspiring moments from our past hackathons</h5>
      </div>
    <ImageSlider />
    
  </div>
</section>

<section>
<div >
  <div className='text-center text-white mt-4 '>
      <h1 className='text-4xl'>FAQs</h1>
      <h3 className='text-0.5xl mt-4'>Find answers to common questions about participating in HackoSphere 2025 </h3>
  </div>
</div>
<div className='flex justify-center items-center mt-4 '>
    <div className='flex flex-col items-center w-full'>
      <Faqs question="How do I register?"
      reply="Registration for HackSphere 2025 is simple! Visit our registration page, fill out the required details, and submit your application. Make sure to register before the deadline to secure your spot!"/>
      <Faqs question="Who can participate?" reply="HackSphere 2025 welcomes developers, designers, and creators of all skill levels. Whether you're a seasoned pro or a newcomer, we encourage everyone to Join. Collaboration and creativity are at the heart of this event!" />
      <Faqs question="What are the prizes?" reply="Participants will compete for exciting prizes, Including cash rewards, tech gadgets, and exclusive mentorship opportunities. The top teams will be recognized for their Innovative solutions. Stay tuned for more detalls on the prize" />
      <Faqs question="When is the event?" reply="HackSphere 2025 will take place from June 20 to June 22, 2025. This global hackathon will be conducted entirely online. Mark your calendars and get ready to innovate!" />
      <Faqs question="Can I join a team?" reply="Absolutely! Participants are encouraged to form teams or join existing ones. You can connect with others through our community platform before the event starts. Collaboration is key to success!" />
    </div>
 </div>
</section>

<section ref={contactRef}>
 <div className='text-white m-8 mt-12'>
  <h1 className='text-4xl'>
    Get in Touch
  </h1>
  <h6 className='text-sm mt-4'> For Enquiries about HackoSphere 2025,Reach out</h6>
 </div>

 <div className='mt-2 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4  '>
  <Contact logo={MdOutlineEmail}
           h1="Email"
           p1="Contact us via email for any questions"
           type="email"
           value="info@hackosphere.com"/>
  <Contact logo={FaPhoneAlt }
           h1="Phone"
           p1="Call us for immediate assistance"
           type="phone"
           value="+12345-42293"/>
    <Contact logo={ FaLocationDot }
           h1="Office"
           p1="Visit us for more information"
           type="location"
           value="San Francisco, CA"/>
  
 </div>
 <div className='text-white text-sm text-center '>
  <nav >
    <ul className='flex justify-center gap-6 mt-8 p-10'>
      <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer' onClick={() => scrollToSection(homeRef)}>Home</li>
      <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer' onClick={() => scrollToSection(aboutRef)}>About Us</li>
      <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer' onClick={() => scrollToSection(eventRef)}>Events</li>
      <li className='p-2 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer' onClick={() => scrollToSection(contactRef)}>Contacts</li>
    </ul>
  </nav>
 </div>
 <hr className='text-white'/>
 <footer className='text-white text-sm text-center pb-4'>
  © 2025 HackSphere. All rights reserved.
 </footer>
</section>
    </>
  )
}

export default App
