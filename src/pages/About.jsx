import React from "react";
import AboutSection from "../components/ui/AboutSection";
import MyTechStack from "../components/ui/MyTechStack";
import Testimonials from "../components/ui/Testimonials";
import Experience from "../components/ui/Experience";

const About = () => {
  return (
    <div>
      <AboutSection />
      <Experience />
      <MyTechStack />
      <Testimonials />
    </div>
  );
};

export default About;
