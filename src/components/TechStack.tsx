
import { Code2, Database, Layout, Server, Cpu, Globe, Shield, Palette } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Layout className="w-8 h-8" />,
      skills: ["React", "TypeScript", "Tailwind CSS","HTML"]
    },
    {
      category: "Backend",
      icon: <Server className="w-8 h-8" />,
      skills: ["Node.js", "Express",  "RestAPI","PHP"]
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      skills: ["SQL", "MongoDB"]
    },
    {
      category: "Security",
      icon: <Shield className="w-8 h-8" />,
      skills: ["OAuth", "JWT", "HTTPS", "Encryption"]
    },
    {
      category: "Languages",
      icon: <Code2 className="w-8 h-8" />,
      skills: ["JavaScript","Typescript", "Basic of Python"]
    },
    {
      category: "Design",
      icon: <Palette className="w-8 h-8" />,
      skills: ["Figma", "GSAP", "UI/UX", "Three.js",'Css']
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {technologies.map((tech, index) => (
        <div 
          key={index} 
          className="bg-[#0a0a0a]/80 backdrop-blur-sm p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 border border-blue-500/10"
        >
          <div className="flex items-center space-x-4 mb-6">
            <div className="text-blue-400 bg-blue-500/10 p-3 rounded-xl">
              {tech.icon}
            </div>
            <h3 className="text-xl font-bold text-white font-syne">{tech.category}</h3>
          </div>
          <div className="space-y-3">
            {tech.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2"
              >
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;