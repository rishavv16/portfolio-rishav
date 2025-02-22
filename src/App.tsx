import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
import Work from './pages/Work';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Background from './components/Background'; // Import the Background component

// Create a component that uses the useLocation hook to conditionally render Footer
function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // GSAP animations
    gsap.from('.hero-text', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.3,
      ease: 'power4.out'
    });

    gsap.from('.hero-image', {
      duration: 2,
      scale: 0.8,
      opacity: 0,
      ease: 'power3.out'
    });

    gsap.from('.tech-stack', {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.5,
      ease: 'power3.out'
    });

    // Animate the background gradient
    gsap.to('.animated-gradient', {
      backgroundPosition: '200% center',
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030303] overflow-hidden relative">
      <Background /> {/* Add the Background component for 3D effects */}
      <div className="absolute inset-0 animated-gradient bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 opacity-50"></div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <main className="relative">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-left space-y-8">
                    <h2 className="hero-text font-syne text-blue-300 text-lg md:text-xl tracking-wider font-bold">
                      Hey there! I’m Rishav Gogoi
                    </h2>
                    <h1 className="hero-text font-syne text-6xl md:text-8xl font-bold gradient-text leading-tight drop-shadow-lg">
                      MERN Stack Wizard | Crafting Seamless User Experiences
                    </h1>
                    <p className="hero-text text-xl md:text-2xl text-gray-200 max-w-2xl font-medium">
                      Turning concepts into seamless, engaging digital experiences with innovative design and creative coding
                    </p>
                    <div className="hero-text flex flex-wrap gap-4">
                      <Link
                        to="/contact"
                        className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25"
                      >
                        Let's Talk
                      </Link>
                      <Link
                        to="/work"
                        className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg shadow-blue-500/25"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>
                  <div className="hero-image float-animation">
                    <img
                      src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=800"
                      alt="Creative Development"
                      className="rounded-2xl shadow-2xl shadow-blue-500/30 opacity-90"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="tech-stack py-32 px-4 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
              <div className="max-w-7xl mx-auto relative">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4 font-syne drop-shadow-lg">
                  Tech Expertise
                </h2>
                <p className="text-gray-200 text-center mb-16 text-lg max-w-2xl mx-auto font-medium">
                  Mastering modern technologies to build powerful and scalable applications
                </p>
                <TechStack />
              </div>
            </section>
          </main>
        } />
        <Route path="/work" element={<Work />} /> 
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Conditionally render Footer if the pathname is NOT '/work' */}
      {location.pathname !== '/work' && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
