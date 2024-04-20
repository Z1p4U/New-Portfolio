"use client";

import gsap from "gsap";
import React, { MutableRefObject, useEffect, useRef } from "react";

const MagnetBtn = ({ children }: any, className: any) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const currentRef = ref.current;

    const mouseMove = (e: any) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = currentRef.getBoundingClientRect();
      const positionX = clientX - (left + width / 2);
      const positionY = clientY - (top + height / 2);

      xTo(positionX);
      yTo(positionY);

      // xTo(positionX * 0.5);
      // yTo(positionY * 0.5);
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    currentRef.addEventListener("mousemove", mouseMove);
    currentRef.addEventListener("mouseleave", mouseLeave);

    return () => {
      currentRef.removeEventListener("mousemove", mouseMove);
      currentRef.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.cloneElement(children, { ref });
};

export default MagnetBtn;
