"use client"

import Image from "next/image";
import { AppLink } from "./AppLink";
import {motion} from 'framer-motion'
import { projects } from "../projects/projects";

export default function FeaturedInitiatives() {
  return (
    <section className="w-full p-4 md:p-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-12">Featured Initiatives</h2>
      <motion.div 
        initial = {{opacity: 0, y:80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ease:"easeInOut", duration:0.8}}
        className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-0 md:px-4"
      >
        {projects.map((project) => (
          <div key={project.title} className="bg-white flex flex-col items-center h-full relative cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="relative w-full h-[250px] md:h-[180px] z-0">
              <Image src={project.image} alt={project.title} fill className="object-fit" />
            </div>
            <div className="max-md:w-full flex-1 flex flex-col justify-between md:items-end px-2 py-4 md:p-4 bg-white mx-auto shadow-md">
                <div>
                    <h3 className={`text-dark-secondary text-base font-bold mb-2`}>{project.title}</h3>
                    <p className="text-dark-primary-body text-[1rem] mb-4 md:mb-6">{project.description}</p>
                </div>
                <AppLink href={`/projects/#${project.id}`} label="Learn More" variant="secondary" className="border border-1 border-primary-green text-[14px] px-[10px] py-[6px] rounded-[3.4px] 
                font-medium hover:bg-primary-green hover:text-white transition-all duration-300 w-max"/>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
} 