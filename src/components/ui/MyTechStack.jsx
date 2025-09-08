import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaRegCircle,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFramer,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiVercel,
  SiPostman,
  SiPnpm,
  SiNetlify,
} from "react-icons/si";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },

  { name: "ReactJS", icon: <FaReact className="text-cyan-400" /> },

  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-blue-300" /> },
  { name: "Shadcn", icon: <FaRegCircle className="text-white" /> },
  { name: "DaisyUI", icon: <FaRegCircle className="text-pink-400" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-green-600" /> },
  { name: "ExpressJS", icon: <SiExpress className="text-white" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },

  { name: "pnpm", icon: <SiPnpm className="text-orange-400" /> },
];

const MyTechStack = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-10 md:px-8 lg:px-12 xl:px-16 text-center animate-fade-in">
      <h1 className="text-4xl font-bold my-4">My Tech Stack</h1>
      <div className="w-[75%] mx-auto flex flex-wrap justify-center gap-4 mt-8 max-w-6xl mx-auto">
        {techStack.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-5 py-3 bg-[#1f1f1f] rounded-full shadow hover:scale-105 transition-transform duration-200"
          >
            <span className="text-xl">{tech.icon}</span>
            <span className="text-sm font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTechStack;
