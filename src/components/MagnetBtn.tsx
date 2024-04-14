"use client";

import { motion } from "framer-motion";
import { MutableRefObject, useRef, useState } from "react";

const MagnetBtn = ({ children }: any, className: any) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: any) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const positionX = clientX - (left + width / 2);
    const positionY = clientY - (top + height / 2);
    setPosition({ x: positionX, y: positionY });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={className}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagnetBtn;
