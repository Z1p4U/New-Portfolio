"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import MagnetBtn from "./MagnetBtn";
import { usePathname } from "next/navigation";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  //scroll value
  const [scroll, setScroll] = useState(true);
  const [burger, setBurger] = useState(false);

  let pathName = usePathname();
  // console.log(pathName);

  const nav_links = [
    { id: 1, name: "About", url: "/about" },
    { id: 2, name: "Projects", url: "/project" },
    { id: 3, name: "Skill", url: "/skill" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    // window.onscroll = function () {
    //   scrollHandler();
    // };
  });

  //disabling scroll when menu is active in mobile view
  useEffect(() => {
    if (burger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [burger]);

  return (
    <div
      className={` ${
        scroll
          ? " absolute"
          : " fixed nav_slide_down border-b border-white border-opacity-20 bg-opacity-80 backdrop-blur backdrop-filter"
      } top-0 left-0 z-50 h-auto w-full`}
    >
      <div className=" container h-[90px] mx-auto px-[20px] lg:px-[40px] w-full flex justify-between items-center">
        <Link href={"/"} className="">
          <div className=" px-[20px] sm:px-[40px] py-5 content z-[200]">
            <h1>Zip</h1>
            <h1>Zip</h1>
          </div>
        </Link>

        <div className="hidden mb-0 md:flex flex-row justify-end text-center align-middle lg:gap-5">
          {nav_links?.map((nav_link) => (
            <div key={nav_link?.id} className=" px-3 ">
              <Link href={nav_link?.url}>
                <MagnetBtn>
                  <div
                    className={`nav_link ${
                      pathName == nav_link?.url ? " active" : ""
                    } no-underline py-7 px-0 lg:px-2 cursor-pointer text-sm font-medium uppercase tracking-wider `}
                  >
                    {nav_link?.name}
                  </div>
                </MagnetBtn>
              </Link>
            </div>
          ))}
          <DarkModeBtn />
        </div>

        <div className=" md:hidden">
          <button className=" burger ">
            <Hamburger toggled={burger} toggle={() => setBurger(!burger)} />
          </button>

          <div className={`bg-clip-path ${burger ? " active" : " "}`}>
            <div
              className={`flex flex-col justify-center align-middle items-center gap-5`}
            >
              <div
                className={
                  burger
                    ? `ani_slide_down ani_delay_1`
                    : `ani_slide_up ani_delay_1`
                }
              >
                <Link
                  href={"/"}
                  onClick={() => setBurger(false)}
                  className={`nav_link ${
                    pathName == "/" ? " active" : " "
                  } hover:no-underline `}
                >
                  Home
                </Link>
              </div>
              {nav_links?.map((nav_link) => {
                return (
                  <div
                    key={nav_link?.id}
                    className={
                      burger
                        ? `ani_slide_down ani_delay_${nav_link?.id + 1}`
                        : `ani_slide_up ani_delay_${nav_link?.id + 1}`
                    }
                  >
                    <Link
                      href={nav_link?.url}
                      onClick={() => setBurger(false)}
                      className={`nav_link ${
                        pathName == nav_link?.url ? " active" : " "
                      } hover:no-underline `}
                    >
                      {nav_link?.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
