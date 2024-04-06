"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import MagnetBtn from "./MagnetBtn";
import { usePathname } from "next/navigation";

const Header = () => {
  //scroll value
  const [scroll, setScroll] = useState(true);
  const [isOpen, setOpen] = useState(false);
  let pathName = usePathname();
  console.log(pathName);

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

  //Menu
  const [burger, setBurger] = useState(false);
  let [clipPath, setClipPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(clipPath);
      if (burger === true && clipPath < 150) {
        setClipPath((prev) => prev + 30);
      }
      if (burger === false && clipPath > 0) {
        setClipPath((prev) => prev - 30);
      }
    }, 150);

    return () => clearInterval(interval);
  });

  return (
    <div
      className={` ${
        scroll
          ? "header top-0 left-0 z-50 h-auto w-full absolute"
          : "header top-0 left-0 z-50 h-auto animate-slidedown w-full fixed border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
      } w-full`}
    >
      <div className=" container h-[90px] mx-auto px-[20px] md:px-[40px] w-full flex justify-between items-center opacity-70">
        <MagnetBtn className="">
          <Link href={"/"} className="">
            <div className=" px-[20px] sm:px-[40px] py-5 content z-[200]">
              <h1>Zip</h1>
              <h1>Zip</h1>
            </div>
          </Link>
        </MagnetBtn>

        <div className="hidden mb-0 md:flex flex-row justify-end text-center align-middle list-none gap-3">
          {nav_links?.map((nav_link) => (
            <div key={nav_link?.id} className=" px-3 ">
              <MagnetBtn>
                <div
                  className={`nav_link ${
                    pathName == nav_link?.url ? " active" : ""
                  } no-underline py-5 px-2 cursor-pointer text-sm font-medium uppercase tracking-wider `}
                >
                  <Link href={nav_link?.url}>{nav_link?.name}</Link>
                </div>
              </MagnetBtn>
            </div>
          ))}
        </div>

        <div className="relative md:hidden">
          <button className=" burger " onClick={() => setBurger(!burger)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>

          <div
            className={burger ? "bg-clip-path" : "bg-clip-path active"}
            style={{
              clipPath: `circle(${clipPath}% at 92% 3rem)`,
              transition: "clip-path 0.7s",
              transitionTimingFunction:
                "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            }}
          >
            <ul className={burger ? "nav-items active" : "nav-items"}>
              {nav_links?.map((nav_link) => {
                return (
                  <li
                    key={nav_link?.id}
                    className={
                      burger
                        ? `anniSlideDown  ani_delay_${nav_link?.id}`
                        : `anniSlideUp ani_delay_${nav_link?.id}`
                    }
                  >
                    <Link
                      href={nav_link?.url}
                      className=" hover:no-underline hover:text-[#5c5c5c]"
                    >
                      {nav_link?.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
