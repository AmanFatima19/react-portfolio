import React from "react";
import AboutSection from "../components/ui/AboutSection";
import MyTechStack from "../components/ui/MyTechStack";
import Testimonials from "../components/ui/Testimonials";
import Experience from "../components/ui/Experience";
import ParticlesBackground from "../components/ui/ParticlesBackground";

const About = () => {
  return (
    <div className="relative">
      <ParticlesBackground />
      <AboutSection />
      <Experience />
      <MyTechStack />
      <Testimonials />
    </div>
  );
};

export default About;
