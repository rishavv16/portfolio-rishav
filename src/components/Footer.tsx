import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const linksRef = useRef([]);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      linksRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(navRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p ref={(el) => linksRef.current.push(el)} className="text-gray-400">rishavgogoi16@gmail.com</p>
        </div>
        
        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <a ref={(el) => linksRef.current.push(el)} href="https://linkedin.com/in/rishav-gogoi-02328531a" className="text-gray-400 block hover:text-white">LinkedIn</a>
          <a ref={(el) => linksRef.current.push(el)} href="https://twitter.com/yourusername" className="text-gray-400 block hover:text-white">Twitter</a>
          <a ref={(el) => linksRef.current.push(el)} href="https://github.com/rishavv16" className="text-gray-400 block hover:text-white">Github</a>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Addrese</h3>
          <p ref={(el) => linksRef.current.push(el)} className="text-gray-400">Vadodara,Gujarat</p>
        </div>
        
        {/* Ventures */}
        <div>
          <h3 className="text-lg font-semibold mb-2"> it's fine to celebrate success but it is more important to heed the lessons of failure.</h3>
        </div>
      </div>
      
      {/* Navigation Bar */}
      <div ref={navRef} className="mt-10 flex justify-center">
        <div className="bg-white text-black px-6 py-3 rounded-full flex space-x-6 shadow-md">
          {[{label: 'Profile', route: '/'}, {label: 'Work', route: '/work'}, {label: 'Contact', route: '/contact'}].map((item, index) => (
            <button 
              key={index} 
              onClick={() => navigate(item.route)} 
              className="px-4 py-2 text-lg font-medium hover:bg-gray-200 rounded-full transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
