"use client"
import Image from "next/image";
import { AppLink } from "./AppLink";
import Link from "next/link";
import {motion} from "framer-motion"

const news = [
  {
    title: "Imo State Hosts National Youth Sports Festival",
    desc: "The Ministry of Sport and Youth Development successfully organized the National Youth Sports Festival, promoting unity and talent discovery among youths.",
    date: "20th May 2024",
    img: "/images/nationalYouthCompetition.png"
  },
  {
    title: "Youth Empowerment Program Launched in Imo State",
    desc: "A new initiative aimed at empowering youths through skills acquisition and entrepreneurship training has been launched by the ministry.",
    date: "5th April 2024",
    img: "/images/youthEmpowerment.png"
  },
  {
    title: "Civic Awareness Campaign Engages Imo Youth",
    date: "April 15, 2025",
    img: "/images/civicAwareness.jpg",
    badge: "Civic Engagement",
    desc: "A new campaign encourages youth participation in community service and responsible citizenship through outreach and school programs."
  },
];

export default function LatestNews() {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Latest News</h2>
      <motion.div 
        initial = {{opacity: 0, y:80}}
        whileInView={{opacity: 1, y: 0}}
        transition={{ease:"easeInOut", duration:0.8}}
        className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4 mb-8"
      >
        {news.map((item, idx) => (
          <Link 
            key={idx} 
            href={`/news/${item.title.toLowerCase().replace(/\s+/g, '-')}`} 
            className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:scale-105 transition-all duration-300"
          >
            <div className="relative w-full h-[140px] md:h-[180px]">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-dark-secondary text-base md:text-[15px] font-bold mb-2 uppercase leading-snug">{item.title}</h3>
              <p className="text-dark-primary-body text-base md:text-sm mb-2 md:mb-4">{item.desc}</p>
              <span className="text-dark-tertiary text-xs md:text-[15px] font-bold mt-auto">{item.date}</span>
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