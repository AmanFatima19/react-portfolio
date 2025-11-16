import React from "react";
import HeroSection from "../components/ui/Hero";
import MyTechStack from "../components/ui/MyTechStack";
import AboutSection from "../components/ui/AboutSection";
import ProjectCard from "../components/ui/ProjectCard";
import Testimonials from "../components/ui/Testimonials";
import ContactForm from "../components/ui/ContactForm";
import Experience from "../components/ui/Experience";
import ParticlesBackground from "../components/ui/ParticlesBackground";

const Home = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <HeroSection />
      <Experience />
      <MyTechStack />
      <ProjectCard />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;
