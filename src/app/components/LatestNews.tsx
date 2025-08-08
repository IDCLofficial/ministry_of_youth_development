"use client"
import Image from "next/image";
import { AppLink } from "./AppLink";
import Link from "next/link";
import {motion} from "framer-motion"
import {newsList} from "../news/newsList"

export default function LatestNews() {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-16 overflow-hidden  bg-white">
      <h2 className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Latest News</h2>
      <motion.div 
        initial = {{opacity: 0, y:80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ease:"easeInOut", duration:0.8}}
        className="w-full mx-auto whitespace-nowrap gap-6 md:gap-8 px-0 md:px-4 mb-8 md:animate-infiniteScroll"
      >
        {newsList.slice(0,3).map((item, idx) => (
          <Link 
            key={idx} 
            href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
            className="md:inline-block align-middle w-full md:w-[40%] h-full mx-5 bg-white rounded-xl border border-gray-200 shadow-sm hover:scale-105 transition-all duration-300"
          >
            <div className="w-full overflow-hidden whitespace-normal flex flex-col">
              <div className="relative w-full h-[220px] md:h-[220px]">
                <Image src={item.img} alt={item.title} fill className="object-cover object-[50%_20%] h-full w-full" />
              </div>
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-dark-secondary text-base md:text-[15px] font-bold mb-2 uppercase leading-snug">{item.title}</h3>
                <p className="text-dark-primary-body text-base md:text-sm mb-2 md:mb-4 line-clamp-3 overflow-ellipsis">{item.desc}</p>
                <span className="text-dark-tertiary text-xs md:text-[15px] font-bold mt-auto">{item.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </motion.div>
      <div className="flex justify-center">
        <AppLink href="/news" label="See More" variant="secondary" className="border border-1 border-primary-green text-[14px] px-[2rem] py-[12px] rounded-[3.4px] font-medium hover:bg-primary-green/80 
        hover:text-white transition-all duration-300"/>
      </div>
    </section>
  );
} 