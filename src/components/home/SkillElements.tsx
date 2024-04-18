import React from "react";
import { motion } from "framer-motion";
import { once } from "events";

const SkillElements = ({ children, x, y }: any) => {
  return (
    <>
      <motion.div
        className=" flex items-center justify-center rounded-full font-semibold bg-[#8338ec] text-[#bebebe] py-3 px-6 cursor-pointer shadow-md absolute"
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SkillElements;
