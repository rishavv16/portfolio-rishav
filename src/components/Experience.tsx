import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPhp, SiOpenai } from "react-icons/si";

const Experience = () => {
  const experienceRef = useRef(null);
  const certsRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Experience animation
    gsap.from(experienceRef.current, {
      opacity: 1,
      y: 100,
      duration: 1.5,
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
      },
    });

    // Certifications animations
    gsap.from(certsRef.current, {
      opacity: 1,
      y: 100,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
      },
    });

    // Section background animation
    gsap.to(sectionRef.current, {
      background: `linear-gradient(45deg, 
        rgba(13, 148, 136, 0.1) 0%,
        rgba(6, 82, 221, 0.1) 50%,
        rgba(13, 148, 136, 0.1) 100%)`,
      duration: 2,
      repeat: -1,
      repeatDelay: 0,
      ease: "none",
    });
  }, []);

  const certifications = [
    {
      title: "Full Stack MERN Development",
      issuer: "Upskill",
      duration: "2025",
      icon: [<SiMongodb />, <SiExpress />, <SiReact />, <SiNodedotjs />],
      description: "Mastered full-stack development with MongoDB, Express, React, and Node.js. Built multiple projects including e-commerce platforms and real-time chat applications."
    },
    {
      title: "PHP & MySQL Development",
      issuer: "Upskill",
      duration: "2025",
      icon: <SiPhp />,
      description: "Acquired skills in server-side scripting, database management, and REST API development using PHP and MySQL. Created dynamic web applications with user authentication systems."
    },
    {
      title: "AI & ChatGPT Fundamentals",
      issuer: "Upskill",
      duration: "2025",
      icon: <SiOpenai />,
      description: "Learned AI integration in web development, natural language processing, and implemented ChatGPT APIs in web applications for intelligent chatbots and content generation."
    }
  ];

  return (
    <section ref={sectionRef} className="relative py-16 px-8 md:px-16 bg-gray-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-teal-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Experience Section */}
        <div ref={experienceRef} className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-teal-400 mb-12"
          >
            Professional Experience
          </motion.h2>
          
          <div className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-teal-400/20 transition-all duration-500">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold mb-2 text-teal-300">
                Full Stack Developer Intern @ V-Ex Tech Solutions
              </h3>
              <p className="text-gray-400 mb-6">6 Months•Sep2024</p>
              <ul className="space-y-4 text-gray-300 list-disc pl-6">
                <li>
                  During your internship as a Full Stack Developer at V-Ex Tech Solutions, you were responsible for designing, developing, and optimizing web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Your role involved:
                  <br /><br />
                  <strong>Backend Development:</strong> You built and optimized APIs using Node.js and Express.js, ensuring smooth communication between the frontend and database. You worked with MongoDB to handle data storage and retrieval efficiently.
                  <br /><br />
                  <strong>Frontend Development:</strong> You developed dynamic and responsive user interfaces using React.js and Tailwind CSS, ensuring a seamless user experience across different devices.
                  <br /><br />
                  <strong>Authentication & Security:</strong> You implemented secure authentication mechanisms, including user login, registration, and authorization features. You also integrated third-party APIs for enhanced functionality.
                  <br /><br />
                  <strong>Performance Optimization & Deployment:</strong> You collaborated with the team to improve application performance, optimize database queries, and enhance deployment strategies. This involved debugging, testing, and deploying applications to production environments.
                </li>
              </ul>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-3xl" />
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center text-teal-400 mb-14"
          >
            Certifications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                ref={(el) => (certsRef.current[index] = el)}
                whileHover={{ y: 0 }}
                className="relative bg-gray-800 p-6 rounded-2xl shadow-xl border border-teal-400/20 hover:border-teal-400/50 transition-all"
              >
                <div className="mb-4 text-teal-400 text-4xl">
                  {Array.isArray(cert.icon) ? (
                    <div className="flex gap-4">
                      {cert.icon.map((Icon, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.1 }}>
                          {Icon}
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
                      {cert.icon}
                    </motion.div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="flex justify-between items-center mb-4 text-sm text-teal-300">
                  <span>{cert.issuer}</span>
                  <span>{cert.duration}</span>
                </div>
                <p className="text-gray-400">{cert.description}</p>
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 opacity-0 hover:opacity-100 rounded-2xl transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* Animated LinkedIn Profile Call-to-Action */}
          <motion.p
  initial={{ opacity: 1, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, delay: 0.5 }}
  className="text-center text-teal-400 mt-12 text-lg"
>
  If you want to check out my certifications, please visit my{" "}
  <a
    href="https://linkedin.com/in/rishav-gogoi-02328531a"
    style={{ pointerEvents: "auto" }}
    className="underline text-teal-400"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn profile
  </a>{" "}
  where you can get everything.
</motion.p>

        </div>
      </div>
    </section>
  );
};

export default Experience;
