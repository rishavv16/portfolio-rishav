import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-md border-b border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white font-syne">Where creativity meets code – Welcome to my portfolio!</Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {['Home',"Experience", 'Work', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 animated-border font-space-grotesk"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:text-blue-400 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-blue-500/10">
            <div className="px-4 pt-2 pb-3 space-y-2">
              {['Home', 'Work', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block px-3 py-4 text-gray-300 hover:text-blue-400 transition-colors font-space-grotesk text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;