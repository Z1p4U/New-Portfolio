import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import SkillSection from "@/components/home/SkillSection";
// import Image from "next/image";

const page = () => {
  return (
    <>
      <HeroSection />

      <AboutSection />

      <SkillSection />
    </>
  );
};

export default page;
