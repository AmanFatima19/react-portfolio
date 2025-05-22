import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class=" body-font">
        <div class="container mx-auto flex flex-wrap px-5 py-6 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center mb-4 md:mb-0">
            <span class="ml-3 text-3xl">
              A<span className="text-[#F59E0B]">F</span>
            </span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/" class="mr-5 hover:text-[#F59E0B]">
              Home
            </Link>
            <Link to="/about" class="mr-5 hover:text-[#F59E0B]">
              About
            </Link>
            <Link to="/projects" class="mr-5 hover:text-[#F59E0B]">
              Projects
            </Link>
            <Link to="/contact" class="mr-5 hover:text-[#F59E0B]">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
