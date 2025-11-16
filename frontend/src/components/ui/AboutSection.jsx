import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6 text-white z-100">About Me</h1>

      <p className="text-md leading-relaxed">
        I'm a passionate MERN stack developer specializing in building robust,
        scalable web applications. With expertise in{" "}
        <span className="font-semibold text-[#F59E0B]">
          MongoDB, Express.js, React, and Node.js
        </span>
        , I transform ideas into seamless digital experiences.
      </p>
    </div>
  );
};

export default AboutSection;
