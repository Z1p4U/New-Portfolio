import React from "react";

const AboutSection = () => {
  return (
    <>
      <div
        id="about"
        className=" container mx-auto px-[20px] lg:px-[40px] min-h-screen pt-[3rem] about-section flex flex-col justify-center items-center align-middle"
      >
        <div className="relative pt-3 md:pt-5 lg:pt-10 pb-10 text-center overflow-hidden w-full">
          <h2 className="text-center text-[#bebebe] md:text-lg lg:text-2xl relative z-10 mb-0 uppercase font-semibold">
            A B O U T &nbsp;&nbsp; <span className="text-[#8338ec] ">M E</span>
          </h2>

          <span className="relative z-10 inline-block h-1.5 w-32 overflow-hidden rounded-full bg-primary-dim ">
            <span className="absolute left-0 top-0 inline-block h-full w-2 animate-leftToRight rounded-full bg-primary"></span>
          </span>
          <span
            className="pointer-events-none absolute left-1/2 top-0 z-0 -translate-x-1/2 transform text-5xl md:text-6xl lg:text-9xl font-bold uppercase text-heading opacity-5"
            style={{ willChange: "transform" }}
          >
            About
          </span>
        </div>

        <div className=" grid grid-cols-2 items-center gap-12 md:gap-16">
          <div className=" col-span-2 lg:col-span-1">
            <div className="about-image overflow-hidden">
              <div className="about-image-inner fix_image relative border-10 border-primary border-opacity-20">
                <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerLeftRight rounded-full bg-gradient-to-r from-transparent to-[#8338ec]"></span>
                <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerRightLeft rounded-full bg-gradient-to-l from-transparent to-[#8338ec]"></span>
                <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerBottomTop rounded-full bg-gradient-to-t from-transparent to-[#8338ec]"></span>
                <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgerTopBottom rounded-full bg-gradient-to-b from-transparent to-[#8338ec]"></span>
                <span className=" box-border block w-full h-full bg-none opacity-100 border-0 p-0 m-0">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: 0,
                      margin: 0,
                      padding: "63.9394% 0px 0px",
                    }}
                  ></span>
                  <div className=" bg-[url('/edited.jpg')] bg-cover bg-center absolute inset-0"></div>
                </span>
              </div>
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 text-center text-[#bebebe]">
            <div
              className="about-content"
              // style={{ opacity: 1, transform: "none" }}
            >
              <div className=" text-[#bebebe] text-base md:text-lg text-justify">
                My full name is{" "}
                <span className=" text-[#8338ec]">Thant Zin Htet</span>. I am
                Burmese and I was born and raised in Myanmar. I am eager to
                explore new skills and opportunities to step up my career. I
                dropped out of My University in early{" "}
                <span className=" text-[#8338ec] font-bold text-xl ">2021</span>{" "}
                but I&apos;d never stopped learning and keep grinding
                experiences to become Full Stack Web Developer in future. As I
                am not graduated but I learned till third year in{" "}
                <span className=" text-[#8338ec]">
                  Computer Science Specialization
                </span>{" "}
                from Dagon University (DU). Moreover, I would like to utilize my
                Competences and Experiences I have learned throughout my career
                journey by expanding my professional skill set.
              </div>
              <a
                href=""
                download={""}
                className="btn download mt-10 md:mt-3 hover:no-underline hover:text-black"
              >
                <span>Download my Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
