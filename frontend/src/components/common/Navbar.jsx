import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="text-white body-font fixed top-0 left-0 right-0 z-20 bg-transparent backdrop-blur-md">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between px-4 md:px-6 py-2 overflow-x-hidden box-border max-w-full">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#F59E0B] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">
            A
          </div>
          <span className="font-semibold text-lg">
            Aman <span className="text-[#F59E0B]">| Code with Aman</span>
          </span>
        </Link>

        <button
          className="md:hidden text-white focus:outline-none button-hover"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <nav className="hidden md:flex">
          <div className="flex space-x-0 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="px-4 py-2 hover:bg-white/20 rounded-full transition-all duration-300 button-hover"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="px-4 py-2 hover:bg-white/20 rounded-full transition-all duration-300 button-hover"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-4 py-2 hover:bg-white/20 rounded-full transition-all duration-300 button-hover"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 hover:bg-white/20 rounded-full transition-all duration-300 button-hover"
            >
              Contact
            </button>
          </div>
        </nav>

        {isOpen && (
          <nav className="md:hidden w-full mt-4">
            <div className="flex flex-col space-y-4 text-base">
              <Link
                to="/"
                className="hover:text-[#F59E0B] transition duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-[#F59E0B] transition duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="hover:text-[#F59E0B] transition duration-300"
                onClick={toggleMenu}
              >
                Work
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#F59E0B] transition duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
