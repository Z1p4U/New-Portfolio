import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillSection from "@/components/home/SkillSection";
import ProjectSection from "@/components/home/ProjectSection";
// import Image from "next/image";

const page = () => {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <SkillSection />

      <ProjectSection />
    </>
  );
};

export default page;
