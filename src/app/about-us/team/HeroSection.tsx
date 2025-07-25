"use client"
import React from "react";
import { Title } from "../../components/Title";
import { motion } from "framer-motion";

interface HeroSectionProps {
  heading: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heading}) => {
  return (
    <section className="relative h-[350px] md:h-[85vh] px-4 md:px-[3rem] py-8 md:py-10 flex flex-col justify-center bg-gradient-to-r from-green-900/20 via-black to-black">
      <div className="absolute inset-0 bg-[url('/images/gradient.png')] bg-cover bg-center z-0" />
      <div className="relative z-10 flex justify-center">
        <Title label="Our Team" />
      </div>
      <div className="relative z-10 flex justify-center mt-4">
        <div className="w-full md:w-[65%] flex flex-col items-center text-center">
          <motion.h1
            className="text-2xl md:text-[3rem] font-bold text-white leading-tight"
            initial={{ opacity: 1 }}
            animate={{}}
          >
            {heading.split("").map((char, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.04 * idx }}
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 