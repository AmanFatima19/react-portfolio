import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-[#1f1f1f] text-white body-font shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-16 py-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-[#F59E0B] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-lg">
            H
          </div>
          <span className="font-semibold text-lg">
            Aman <span className="text-[#F59E0B]">| Code with Aman</span>
          </span>
        </Link>

        <nav className="flex space-x-10 text-base">
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
            className="hover:text-[#F59E0B]  transition duration-300"
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#F59E0B]  transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
