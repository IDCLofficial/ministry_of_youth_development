"use client"

import React from "react";
import SearchBar from "../components/SearchBar";
import { SubsequentHero } from "../components/Hero";
import { motion } from "framer-motion";

interface MediaHeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const MediaHeroSection: React.FC<MediaHeroSectionProps> = ({ title, subtitle }) => {
  return (
    <SubsequentHero
      className={`bg-[url('/images/gradient.png')] bg-cover bg-center`}
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-end gap-0 h-full px-4 text-center">
        <motion.h1
          className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg"
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
        <SearchBar
          placeholder="Search"
          value=""
          onChange={() => {}}
          onSearch={() => {}}
        />
      </div>
    </SubsequentHero>
  );
};

export default MediaHeroSection; 