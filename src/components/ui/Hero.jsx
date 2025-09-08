import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="md:py-16 py-10 lg:py-16 bg-black text-white flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 animate-fade-in">
      <div className="max-w-3xl text-center">
        <h2 className="text-[#F59E0B] text-2xl mb-3">Hey there!, I'm-</h2>

        <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold text-white mb-6 ">
          Aman Fatima
        </h1>

        <p className="text-white text-md md:text-xl lg:text-xl mb-3">
Passionate Web Developer turning code into real-world solutions. <br /> With expertise in the MERN stack, I specialize in building scalable, secure, and modern web applications. My focus is on creating impactful digital experiences that combine performance with user-centric design.        </p>

       
        <div className="flex justify-center space-x-4 mt-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AmanFatima19?tab=repositories"
            className="bg-[#1f1f1f] hover:bg-[#f59f0be8] text-white text-sm py-2 px-4 rounded inline-flex items-center space-x-2 transition-all duration-300 "
          >
            <FaGithub />
            <span>Github</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/aman-fatima-092357340/"
            className="bg-[#1f1f1f] hover:bg-[#f59f0be8] text-white text-sm py-2 px-4 rounded inline-flex items-center space-x-2 transition-all duration-300"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
           target="_blank"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=amanfatima713@gmail.com&su=Hello&body=Hi%20Aman,"
            className="bg-[#1f1f1f] hover:bg-[#f59f0be8] text-white text-sm py-2 px-4 rounded inline-flex items-center space-x-2 transition-all duration-300"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
