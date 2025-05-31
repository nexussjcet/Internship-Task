function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-400">
            HackSphere 2025
          </h1>
          <p className="text-xl md:text-2xl italic text-gray-300">
            "Code. Create. Conquer."
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            June 20–22, 2025 – Online
          </p>
          <a
            href="#"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-950 flex-grow">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-300 mb-4">
            About HackSphere
          </h2>
          <p className="text-gray-400 text-lg">
            HackSphere 2025 is a global 48-hour hackathon that brings together developers,
            designers, and creators from every corner of the world. Whether you're a beginner or a seasoned coder,
            HackSphere is your opportunity to build, innovate, and connect.
          </p>
          <p className="text-gray-400 text-lg">
            Compete for exciting prizes, collaborate on breakthrough ideas, and showcase your skills on a global stage — all from the comfort of your home.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-6 text-center text-gray-500 text-sm">
        © 2025 HackSphere. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
