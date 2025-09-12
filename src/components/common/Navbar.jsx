import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#1f1f1f] text-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-16 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#F59E0B] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">
            H
          </div>
          <span className="font-semibold text-lg">
            Aman <span className="text-[#F59E0B]">| Code with Aman</span>
          </span>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10 text-base">
          <Link
            to="/"
            className="hover:text-[#F59E0B] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-[#F59E0B] transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="hover:text-[#F59E0B] transition duration-300"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#F59E0B] transition duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Navigation */}
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
