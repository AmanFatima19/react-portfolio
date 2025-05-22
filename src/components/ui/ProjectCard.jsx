import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Baroque-Inspired eCommerce Website",
    description:
      "A full-fledged eCommerce website inspired by Baroque.pk, built using the MERN stack. It includes a dynamic product detail layout with sticky image gallery, animated cart drawer, complete checkout flow with conditional payment methods, and a modern responsive UI.",
    tags: [
      "react",
      "node.js",
      "express",
      "mongodb",
      "tailwind",
      "ecommerce",
      "daisyUI",
    ],
    image: "baroque-ecommerce.png",
    github: "https://github.com/yourusername/baroque-ecommerce",
  },
  {
    title: "PawFinds",
    description:
      "A pet adoption platform that helps users find and adopt pets. Features include pet listings, search filters, and adoption requests.",
    tags: ["react", "nodejs", "mongodb", "tailwind"],
    image: "paw-finds.png",
    github: "https://github.com/AmanFatima19/paw-finds",
  },
  {
    title: "PakCarry",
    description:
      "A peer-to-peer logistics platform connecting travelers with people needing to send packages across Pakistan. Features real-time matching and secure payments.",
    tags: ["react", "mongodb", "tailwind", "firebase"],
    image: "pak-carry-proj.png",
    github: "https://github.com/AmanFatima19/pak-carry",
  },
];

const ProjectCard = () => {
  return (
    <section className="py-12 w-[85%] mx-auto">
      <h1 className="text-4xl font-bold my-4 text-center">My Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg transform transition my-8 duration-300 hover:scale-105 hover:shadow-xl relative"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-50 object-cover"
              />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-[#be882b] p-3 rounded-full text-white hover:bg-[#F59E0B] transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            </div>
            <h3 className="text-xl font-bold text-white mt-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mt-2 text-sm">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-700 text-amber-500 px-2 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectCard;
