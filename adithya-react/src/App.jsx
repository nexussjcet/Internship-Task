import {
  FaRegEdit,
  FaRegClock,
  FaRocket,
  FaTools,
  FaUnlock,
} from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { LuTrophy } from "react-icons/lu";
import { PiStudentBold } from "react-icons/pi";
import "animate.css";
import the_nexus_project_logo from "./assets/the_nexus_project_logo.jpeg";

function App() {
  return (
    <div className="font-grotesk text-nexus-light">
      {/* ✅ Hero Section */}
      <section
        className={`min-h-screen flex flex-col bg-repeat [background-color:#1d1616] [background-image:url("data:image/svg+xml,%3Csvg%20width='40'%20height='1'%20viewBox='0%200%2040%201'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%200h20v1H0z'%20fill='%238e1616'%20fill-opacity='0.12'%20fill-rule='evenodd'/%3E%3C/svg%3E")]`}
      >
        {/* Navbar */}
        <nav className="px-6 py-4 flex justify-between items-center">
          <a href="https://nexus.sjcetpalai.ac.in/">
            <img
              src={the_nexus_project_logo}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full"
              alt="HackSphere Logo"
            />
          </a>
          <ul className="flex gap-6 text-base md:text-lg font-semibold">
            <li>
              <a
                href="#about"
                className="hover:text-nexus-bright transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#register"
                className="hover:text-nexus-bright transition duration-200"
              >
                Register
              </a>
            </li>
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-[12vh] font-bebas text-nexus-deep tracking-wide leading-none animate__animated animate__flipInX">
            HackSphere 2025
          </h1>
          <p className="text-xl md:text-3xl font-bold mt-4 text-nexus-bright animate__animated animate__fadeIn">
            Code. Create. Conquer.
          </p>
          <p className="text-base md:text-lg mt-2 text-nexus-light animate__animated animate__fadeIn">
            June 20–22, 2025 — Online
          </p>

          <p className="mt-6 max-w-2xl text-sm md:text-lg text-nexus-light opacity-90 leading-relaxed animate__animated animate__fadeIn">
            Join this global 48-hour hackathon bringing together developers,
            designers, and creators. Whether you're building your first app or
            your next big idea, HackSphere is the place to be.
          </p>

          {/* Highlights */}
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base font-medium w-full max-w-4xl">
            {[
              { icon: <IoMdGlobe />, label: "100% Virtual" },
              { icon: <FaRegClock />, label: "48-Hour Sprint" },
              { icon: <LuTrophy />, label: "Prizes & Swag" },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-nexus-deep/30 p-4 md:p-6 rounded-xl shadow-sm backdrop-blur-sm flex flex-col items-center text-nexus-light hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="text-2xl md:text-3xl text-nexus-bright mb-2">
                  {item.icon}
                </div>
                {item.label}
              </li>
            ))}
          </ul>

          {/* Register Button */}
          <button
            id="register"
            className="mt-10 px-6 py-3 bg-nexus-bright hover:bg-nexus-deep text-nexus-light font-semibold rounded-full flex items-center gap-2 transition duration-300 shadow-md animate__animated animate__swing"
          >
            <FaRegEdit className="text-lg" />
            Register Now
          </button>

          {/* Scroll Prompt */}
          <p className="mt-6 text-sm text-nexus-light opacity-70 animate__animated animate__fadeInDown">
            ↓ Scroll to learn more
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section
        id="about"
        className={`bg-repeat text-white py-20 px-6 text-center [background-color:#1d1616] [background-image:url("data:image/svg+xml,%3Csvg%20width='40'%20height='1'%20viewBox='0%200%2040%201'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%200h20v1H0z'%20fill='%238e1616'%20fill-opacity='0.12'%20fill-rule='evenodd'/%3E%3C/svg%3E")]`}
      >
        <h2 className="text-4xl font-bold mb-8 text-nexus-deep">
          About HackSphere
        </h2>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-4">
          <p>
            HackSphere 2025 is a global 48-hour virtual hackathon that brings
            together developers, designers, and creators from around the world.
            Whether you're building your first app or you're a seasoned hacker,
            HackSphere is your launchpad for innovation.
          </p>
          <p>
            Collaborate in real-time, learn new technologies, and turn your
            ideas into reality. Join us and be part of a vibrant community
            that's passionate about building the future.
          </p>
        </div>
      </section>

      {/* ✅ Timeline */}
      <section
        id="timeline"
        className={`py-20 px-6 text-center bg-[#1d1616] text-white [background-image:url("data:image/svg+xml,%3Csvg%20width='40'%20height='1'%20viewBox='0%200%2040%201'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M0%200h20v1H0z'%20fill='%238e1616'%20fill-opacity='0.12'%20fill-rule='evenodd'/%3E%3C/svg%3E")]`}
      >
        <h2 className="text-4xl font-bold mb-12 text-nexus-deep">
          Event Timeline
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            { icon: <FaUnlock />, title: "Opening Ceremony", time: "June 20, 6:00 PM IST" },
            { icon: <FaTools />, title: "Hacking Begins", time: "June 20, 7:00 PM IST" },
            { icon: <PiStudentBold />, title: "Workshops & Mentoring", time: "June 21, All Day" },
            { icon: <IoMdGlobe />, title: "Tech Talk: Future of AI", time: "June 21, 5:00 PM IST" },
            { icon: <FaRocket />, title: "Submission Deadline", time: "June 22, 7:00 PM IST" },
            { icon: <LuTrophy />, title: "Closing Ceremony & Results", time: "June 22, 9:00 PM IST" },
          ].map((event, index) => (
            <div
              key={index}
              className="p-6 bg-nexus-deep/30 rounded-lg backdrop-blur-sm shadow-md animate__animated animate__fadeInUp"
            >
              <h3 className="text-xl font-semibold text-nexus-bright mb-2 flex items-center gap-2">
                {event.icon}
                {event.title}
              </h3>
              <p>{event.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-nexus-bright text-nexus-dark py-4 text-center text-sm font-medium">
        <p>© 2025 HackSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
