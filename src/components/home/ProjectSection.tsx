"use client";

import React from "react";

const ProjectSection = () => {
  return (
    <>
      <div
        id="projects"
        className="projects-section container mx-auto px-[20px] lg:px-[40px] min-h-screen pt-[3rem] skill-section flex flex-col justify-center align-middle items-center"
      >
        <div className="relative pt-3 md:pt-5 lg:pt-10 pb-10 text-center overflow-hidden w-full">
          <h2 className="text-center text-[#bebebe] text-sm md:text-lg lg:text-2xl relative z-10 mb-0 uppercase font-semibold">
            M Y &nbsp;&nbsp;{" "}
            <span className="text-[#8338ec] ">P R O J E C T S</span>
          </h2>

          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary-dim ">
            <span className="absolute left-0 top-0 inline-block h-full w-2 animate-leftToRight rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 transform text-5xl md:text-6xl lg:text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            Projects
          </span>
        </div>

        <div></div>
      </div>
    </>
  );
};

export default ProjectSection;
