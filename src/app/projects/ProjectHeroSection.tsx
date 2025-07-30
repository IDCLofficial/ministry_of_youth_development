"use client"

import { motion } from "framer-motion";

export default function ProjectHeroSection() {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-[url('/images/summit.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <motion.h1
          className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center px-4"
          initial={{ opacity: 1 }}
          animate={{}}
        >
          {"See What We've Been Up To".split("").map((char, idx) => (
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
    </section>
  );
} 