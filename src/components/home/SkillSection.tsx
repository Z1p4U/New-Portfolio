"use client";

import React from "react";
import { motion } from "framer-motion";
import SkillElements from "./SkillElements";

const SkillSection = () => {
  const skills = [
    { id: 1, name: "HTML", x: "-26vw", y: "2vw" },
    { id: 2, name: "CSS", x: "-5vw", y: "-6.5vw" },
    { id: 3, name: "Java Script", x: "26vw", y: "4vw" },
    { id: 4, name: "Bootstrap", x: "0vw", y: "6.5vw" },
    { id: 5, name: "SASS", x: "-5vw", y: "13.4vw" },
    { id: 6, name: "Tailwind", x: "-20vw", y: "-12vw" },
    { id: 7, name: "ReactJS", x: "15vw", y: "-12vw" },
    { id: 8, name: "NextJS", x: "32vw", y: "-5vw" },
    { id: 9, name: "PHP", x: "0vw", y: "-17.3vw" },
    { id: 10, name: "Laravel", x: "-25vw", y: "12vw" },
    { id: 11, name: "MySQL", x: "-32vw", y: "-5vw" },
    { id: 12, name: "Github", x: "18vw", y: "15vw" },
  ];

  return (
    <>
      <div
        id="skill"
        className="skill-section container mx-auto px-[20px] lg:px-[40px] min-h-screen pt-[3rem] skill-section flex flex-col justify-center align-middle items-center"
      >
        <div className="relative pt-3 md:pt-5 lg:pt-10 pb-10 text-center overflow-hidden w-full">
          <h2 className="text-center text-[#bebebe] text-sm md:text-lg lg:text-2xl relative z-10 mb-0 uppercase font-semibold">
            <span className="text-[#8338ec] ">M y</span>&nbsp;&nbsp; s k i l l s
          </h2>

          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary-dim ">
            <span className="absolute left-0 top-0 inline-block h-full w-2 animate-leftToRight rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 transform text-5xl md:text-6xl lg:text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Skills
          </span>
        </div>

        <div className=" w-full h-[85vh] relative flex items-center justify-center rounded-full bg-circularDark">
          <motion.div
            className=" flex items-center justify-center rounded-full font-semibold bg-transparent md:bg-[#8338ec] text-[#bebebe] p-2 sm:p-4 md:px-6 md:py-3 lg:px-8 lg:py-4 cursor-pointer shadow-md absolute text-xs md:text-base"
            whileHover={{ scale: 1.05 }}
          >
            Web
          </motion.div>

          {skills?.map((skill) => {
            return (
              <SkillElements key={skill?.id} x={skill?.x} y={skill?.y}>
                {skill?.name}
              </SkillElements>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
