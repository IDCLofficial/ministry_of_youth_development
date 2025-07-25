"use client"
import React from "react";
import { motion } from "framer-motion";

interface ContactHeroSectionProps {
  title: string;
}

const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({ title }) => (
  <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-[url('/images/gradient.png')] bg-cover bg-center">
    <motion.h1
      className="text-white text-4xl md:text-5xl font-bold z-10"
      initial={{ opacity: 1 }}
      animate={{}}
    >
      {title.split("").map((char, idx) => (
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
  </section>
);

export default ContactHeroSection; 