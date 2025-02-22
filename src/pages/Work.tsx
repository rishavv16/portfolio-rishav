import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import Background from '../components/Background';


const projects = [
  {
    title: "Food Delivery Web App",
    description: "A fully responsive food ordering website with a smooth UI/UX. Features include category filtering, search functionality, and an intuitive cart system.",
    tech: ["React.js", "Tailwind CSS", "JSON Data"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    path: "/projects/food-delivery"
  },
  {
    title: "iPhone Frontend UI",
    description: "A stunning animated iPhone UI built with GSAP and React.js. This project showcases smooth scrolling, page transitions, and UI responsiveness similar to an iPhone interface.",
    tech: ["React.js", "GSAP", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&q=80&w=800",
    path: "/projects/iphone-ui"
  },
  {
    title: "Gemini Frontend UI",
    description: "A smooth and interactive Gemini AI UI clone with engaging animations and responsiveness, simulating real-world AI chat interactions.",
    tech: ["React.js", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    path: "/projects/gemini-ui"
  },
  {
    title: "Spotify Clone",
    description: "A music streaming web app featuring play, pause, and next song functionality. Users can browse, search for music, and enjoy a seamless listening experience.",
    tech: ["React.js", "Tailwind CSS", "JSON Data"],
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=800",
    path: "/projects/spotify-clone"
  },
  {
    title: "Notes Full-Stack App",
    description: "A MERN-based note-taking app with authentication, user-specific notes, pinning, searching, and full CRUD operations.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800",
    path: "/projects/notes-app"
  },
  {
    title: "Book Store Web App",
    description: "A full-stack bookstore where users can browse, buy, and read books online. Includes authentication, dark mode, and a well-structured UI/UX design.",
    tech: ["React.js", "MongoDB", "Express.js", "Node.js"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
    path: "/projects/bookstore-app"
  },
  {
    title: "Secure MERN Authentication",
    description: "Includes 2-Step Verification & Password Recovery with Mailtrap. Ensures secure user authentication with JWT and hashed passwords.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Mailtrap"],
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    path: "/projects/secure-auth"
  }
  
];

const Work = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP animations for page elements
    gsap.from('.page-title', {
      y: 100,
      opacity: 1,
      duration: 1,
      ease: 'power4.out'
    });

    gsap.from('.project-card', {
      y: 100,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });
}, []);
  
  return (
    <>
      <Background />
      <div className="min-h-screen pt-24 px-6 relative">
        <motion.h1 
          className="page-title text-6xl md:text-7xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text font-syne"
        >
          Featured Work
        </motion.h1>
        <motion.p 
          className="text-gray-400 text-center mb-16 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Explore my latest projects and creative experiments
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card group relative overflow-hidden rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-sm border border-blue-500/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => navigate(project.path)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white font-syne">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;