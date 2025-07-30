"use client"
import Image from "next/image";
import { AppLink } from "./AppLink";
import {motion} from 'framer-motion'

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 md:py-20 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-18 w-full px-4 md:px-[3rem]">
            {/* Left: Commissioner Image */}
            <motion.div 
                initial={{opacity:0, y:80}}
                whileInView={{opacity: 1, y:0}}
                transition={{ease:"easeInOut", duration:0.8}}
                className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full md:w-auto flex justify-center"
            >
                <div className="relative w-full h-[240px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    fill
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 768px) 220px, 320px"
                    />
                </div>
            </motion.div>
            {/* Right: Text Content */}
            <motion.div 
                initial={{opacity:0, y:80}}
                whileInView={{opacity: 1, y:0}}
                transition={{ease:"easeInOut", duration:0.8}}
                className="flex-1 w-full md:w-auto mt-6 md:mt-0"
            >
                <h2 
                    className="text-xl md:text-2xl lg:text-[43px] font-bold text-dark-primary mb-4"
                >
                    {title}
                </h2>
                <p className="text-dark-primary-body text-base mb-4">
                    Hon. Dr. Emeka Mandela Ukaegbu, Imo State&apos;s Commissioner for Youth Development and Talent Hunt, leads transformative programs that harness youth potential across sports, ICT, agriculture, and business. 
                    By collaborating with SWAN and state ministries, he implements a robust Talent-Hunt platform that promotes chess, javelin, marathons, and digital innovation. His flagship event, the &quot;Running for Peace&quot; Marathon (May 2025), awarded ₦500,000 to winners, promoting fitness and civic unity. 
                    Dr. Mandela regularly engages with youth bodies like I.N.Y, NUISS, and the Boys&apos; Brigade to foster leadership and inclusive participation. 
                    He also partners with security agencies to deliver reorientation and skill-building programs for at-risk youth. Recognized by the Young Surveyors Network for exemplary leadership, his vision empowers Imo youth to become engaged, skilled, and hope‑driven contributors.
                </p>
            </motion.div>
        </div>
    </section>
  );
} 