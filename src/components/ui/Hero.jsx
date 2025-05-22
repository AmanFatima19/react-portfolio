import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="py-10 md:py-20 lg:py-26 bg-black text-white flex items-center justify-center px-4 ">
      <div className="max-w-3xl text-center">
        <h2 className="text-[#F59E0B] text-2xl mb-3">Hey there!, I'm-</h2>

        <h1 className="text-6xl md:text-8xl lg:text-8xl font-bold text-white mb-6 ">
          Aman Fatima
        </h1>

        <p className="text-white text-md md:text-xl lg:text-xl mb-3">
          A proactive MERN Stack developer with over 2+ years of experience,
          passionate about creating dynamic web experiences. From frontend to
          backend, I thrive on solving problems with clean, efficient code.
        </p>

        <p className="text-base text-gray-400 mb-6">
          🚀 Specialized in MERN Stack (React / NodeJS)
          <br />⚡ MERN Stack Intern at{" "}
          <span className="text-[#F59E0B]">Ideoversity,Arfa Tower</span>
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <a
            target="_blank"
            href="https://github.com/AmanFatima19?tab=repositories"
            className="bg-[#1f1f1f] hover:bg-[#f59f0be8] text-white text-sm py-2 px-4 rounded inline-flex items-center space-x-2 transition-all duration-300 "
          >
            <FaGithub />
            <span>Github</span>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/aman-fatima-092357340/"
            className="bg-[#1f1f1f] hover:bg-[#f59f0be8] text-white text-sm py-2 px-4 rounded inline-flex items-center space-x-2 transition-all duration-300"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            target="_blank"
            href="mailto:amanfatima713@gmail.com"
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
