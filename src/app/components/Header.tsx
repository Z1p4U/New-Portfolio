"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  //scroll value
  const [scroll, setScroll] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const nav_links = [
    { id: 1, name: "About", url: "about" },
    { id: 2, name: "Projects", url: "project" },
    { id: 3, name: "Skill", url: "skill" },
    { id: 4, name: "Contact", url: "contact" },
  ];

  const scrollHandler = () => {
    if (window.scrollY >= 100) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  // window.addEventListener("scroll", scrollHandler);

  // function scrollToTop() {
  //   let scrollTop = document.documentElement.scrollTop;
  //   scrollTop = 0;
  //   setScrollTop(0);
  // }

  window.onscroll = function () {
    scrollHandler();
    scrollPoint();
  };

  function scrollPoint() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let getclientHeight = document.documentElement.clientHeight;

    let calcHeight = scrollHeight - getclientHeight;
    let final = Math.round((scrollTop * 100) / calcHeight);
    scrollTop = final;
    setScrollTop(scrollTop);
  }

  //Menu
  const [burger, setBurger] = useState(false);
  let [clipPath, setClipPath] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (burger === true && clipPath < 150) {
        setClipPath((prev) => prev + 30);
      }
      if (burger === false && clipPath > 0) {
        setClipPath((prev) => prev - 30);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [burger, clipPath]);

  return (
    <div
      className={` ${
        scroll
          ? "header top-0 left-0 z-50 h-auto w-full absolute"
          : "header top-0 left-0 z-50 h-auto animate-slidedown w-full fixed border-b border-white border-opacity-20 bg-grey bg-opacity-80 backdrop-blur backdrop-filter"
      } w-full`}
    >
      <div className=" container h-[90px] mx-auto px-[20px] md:px-[40px] w-full flex justify-between items-center opacity-70">
        <Link href={"/"} className=" z-[200]">
          <div className=" ms-[20px] sm:ms-[40px] content w-[200px] z-[200]">
            <h1>Zip</h1>
            <h1>Zip</h1>
          </div>
        </Link>

        <div className=" hidden md:flex flex-row justify-end text-center align-middle">
          <ul className=" mb-0 inline-flex no-underline list-none gap-7 pl-0">
            {nav_links?.map((nav_link) => {
              return (
                <li
                  key={nav_link?.id}
                  className="inline-block align-middle nav_link"
                >
                  <Link
                    href={nav_link?.url}
                    className="group no-underline relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
                  >
                    {nav_link?.name}
                    <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
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
