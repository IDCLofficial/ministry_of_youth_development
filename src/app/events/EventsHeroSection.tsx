"use client"

import { motion } from "framer-motion";
import { Title } from "../components/Title";

export default function EventsHeroSection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center bg-[url('/images/gradient.png')] bg-cover bg-center">
      <div className="flex items-center justify-center flex-col gap-2">
        <Title label="Events" />
        <motion.h1
          className="text-white text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 1 }}
          animate={{}}
        >
          {"Upcoming Events".split("").map((char, idx) => (
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