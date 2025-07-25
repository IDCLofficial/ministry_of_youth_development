"use client"
import { SubsequentHero } from "../components/Hero";
import { Title } from "../components/Title";
import { motion } from "framer-motion";

export default function UnitsHeroSection() {
  return (
    <SubsequentHero className="bg-[url('/images/gradient.png')] bg-cover bg-center">
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <Title label="Departments" />
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold text-center leading-tight py-2"
          initial={{ opacity: 1 }}
          animate={{}}
        >
          {"Departments Driving Our Vision".split("").map((char, idx) => (
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
    </SubsequentHero>
  );
} 