"use client"

import PageTransition from "./PageTransition";
import { Title } from "./Title";
import {motion} from 'framer-motion'

interface HeroProps {
    title: string;
    caption: string;
    subtitle: string;
}

export const Hero = ({title, caption, subtitle}: HeroProps) => {
    return(
        <div className={`h-screen px-4 md:px-[3rem] flex flex-col justify-center bg-[url('/images/heroImage.jpg')] bg-cover bg-center`}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-transparent z-0"></div>
            <motion.div
                initial = {{opacity: 0, y:80}}
                whileInView={{opacity: 1, y: 0}}
                transition={{ease:"easeInOut", duration:0.8}}
                className="relative z-10 py-10"
            >
                <div className="w-full md:w-[60%] flex flex-col gap-8">
                    <PageTransition type="fadeUp">
                        <Title label={title}/>
                        <h1 className="text-[2rem] md:text-[3rem] font-bold text-white leading-tight py-4">{caption}</h1>
                        <p className="text-[1rem] leading-[1.5] text-white">
                            {subtitle}
                        </p>
                        {/* <AppLink href="/about-us" label="Explore Opportunities" variant="secondary" className="block w-max border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] 
                font-medium hover:bg-primary-green hover:text-white transition-all duration-300"/> */}
                    </PageTransition>
                </div>
            </motion.div>
        </div>
    )
}

import { ReactNode } from "react";

interface SubsequentHeroProps {
    children: ReactNode,
    className?: string;
}

export const SubsequentHero = ({ children, className }: SubsequentHeroProps) => {
    return (
        <div className="relative h-[85vh] px-2 md:px-[3rem] py-8 md:py-10 flex flex-col justify-center bg-gradient-to-r from-green-900/20 via-black to-black">
            <div className={`absolute inset-0 bg-cover bg-center z-0 ${className}`}></div>
            {children}
        </div>
    );
}