"use client";

import React from "react";
import Typewriter from "typewriter-effect";
import {
  FiArrowDown,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div
        className=" container mx-auto px-[20px] lg:px-[40px] min-h-screen pt-[9.5rem]"
        id="hero-section"
      >
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-[4.5rem] md:gap-5">
          <div className=" md:col-span-7 flex flex-col justify-center align-middle">
            <div className=" hidden mb-8 text-[#bebebe] text-xs lg:text-sm align-middle md:grid grid-cols-12">
              <div className=" col-start-1 col-span-9 lg:col-span-7 mb-2">
                C R A F T I N G &nbsp;&nbsp; E X P E R I E N C E S
              </div>
              <div className=" col-start-5 col-span-9 lg:col-start-4 lg:col-span-7">
                B U I L D I N G &nbsp;&nbsp; C O N N E C T I O N S
              </div>
            </div>

            <div className=" text-[40px] text-start md:text-6xl font-bold text-[#bebebe] ">
              <h1>Hi!</h1>
              <h1 className=" inline-block">I&apos;m</h1>
              <span className=" text-[#8338ec]">
                {" "}
                <p className="wow animate__fadeInRight inline-block">
                  Thant Zin
                </p>
              </span>
            </div>

            <div className=" text-start typetext text-xl lg:text-2xl mt-8 w-[300px] lg:w-[550px] xl:w-[650px] h-[60px] xl:h-fit">
              <div className="">
                <Typewriter
                  options={{
                    autoStart: true,
                    delay: 50,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span style='color: #8338ec;'>I </span> am a Full Stack Web Developer."
                      )
                      .changeDeleteSpeed(0.5)
                      .pauseFor(1500)
                      .deleteChars(31)

                      // .typeString("Have Strong Passion And Eager To Learn.")
                      // .changeDeleteSpeed(0.3)
                      // .pauseFor(1500)
                      // .deleteChars(39)

                      .typeString(
                        "love building beautiful and maintainable websites."
                      )
                      .changeDeleteSpeed(0.3)
                      .pauseFor(1500)
                      .deleteChars(45)

                      .changeDelay(100)
                      .typeString("Web Development!")
                      .pauseFor(1500)

                      .start();
                  }}
                />
              </div>
            </div>

            <div className=" mt-8 md:me-5">
              <p className=" text-[#bebebe] text-sm text-center md:text-justify leading-6 md:tracking-wide md:leading-7">
                Welcome to my portfolio! I am a passionate and dedicated web
                developer with a focus on crafting impactful web experiences.
                <span className="hidden lg:inline">
                  {" "}
                  I love creating beautiful and user-friendly websites.
                </span>{" "}
                Let&apos;s collaborate and bring your web ideas to life!
              </p>
            </div>

            <div className="my-6 flex flex-col gap-3 lg:gap-0 lg:flex-row justify-start md:justify-between align-middle items-center md:me-10 lg:me-12">
              <ul className=" flex list-none flex-wrap gap-3 sm:gap-4 text-violet-700">
                <li className="inline-block align-middle ">
                  <a
                    href="https://www.facebook.com/profile.php?id=100010478018386"
                    target="_blank"
                    className="group focus:text-violet-700 relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none rounded "
                  >
                    <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-transparent transition duration-500 group-hover:-translate-y-full">
                      <FiFacebook />
                    </span>
                    <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-[#131313] focus:text-[#131313] transition duration-500 group-hover:translate-y-0">
                      <FiFacebook />
                    </span>
                  </a>
                </li>
                <li className="inline-block align-middle">
                  <a
                    href="https://twitter.com/Thant_Zin_Htet"
                    target="_blank"
                    className=" hove focus:text-violet-700 group relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none rounded "
                  >
                    <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-transparent transition duration-500 group-hover:-translate-y-full ">
                      <FiTwitter />
                    </span>
                    <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-[#131313] focus:text-[#131313] transition duration-500 group-hover:translate-y-0">
                      <FiTwitter />
                    </span>
                  </a>
                </li>
                <li className="inline-block align-middle">
                  <a
                    href="https://github.com/Z1p4U"
                    target="_blank"
                    className="group focus:text-violet-700 relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none rounded"
                  >
                    <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-transparent transition duration-500 group-hover:-translate-y-full">
                      <FiGithub />
                    </span>
                    <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-[#131313] focus:text-[#131313] transition duration-500 group-hover:translate-y-0">
                      <FiGithub />
                    </span>
                  </a>
                </li>
                <li className="inline-block align-middle">
                  <a
                    href="https://www.linkedin.com/in/zip-p-aa3154204/"
                    target="_blank"
                    className="group focus:text-violet-700 relative inline-block h-10 w-10 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none rounded"
                  >
                    <span className=" front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-transparent transition duration-500 group-hover:-translate-y-full">
                      <FiLinkedin />
                    </span>
                    <span className=" back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-[#131313] focus:text-[#131313] transition duration-500 group-hover:translate-y-0">
                      <FiLinkedin />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center align-middle items-center">
            <div className="pf_blob"></div>
            {/* <Image
              src={"/aaa.png"}
              loading="lazy"
              width={400}
              height={400}
              alt="mypic"
              className="rounded-full"
            /> */}
          </div>
        </div>
        <Link
          href={"#about"}
          className="hover:text-[#bebebe] hover:no-underline focus:no-underline transition duration-500"
        >
          <div className=" text-center cursor-pointer flex justify-center gap-2 align-middle items-center mt-10">
            Explore My Portfolio{" "}
            <span>
              <FiArrowDown className="" />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
