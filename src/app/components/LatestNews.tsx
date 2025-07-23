import Image from "next/image";
import { AppLink } from "./AppLink";

const news = [
  {
    title: "2024 Imo State Budget Signed into Law",
    desc: "Governor Hope Uzodimma signs the 2024 Appropriation Bill, focusing on infrastructure, education, and economic growth.",
    date: "15th January 2024",
    img: "/images/homeImage1.jpg"
  },
  {
    title: "Imo State Launches Citizens’ Budget Portal",
    desc: "The Ministry unveils a new online portal to promote transparency and public participation in the budgeting process.",
    date: "2nd March 2024",
    img: "/images/homeImage2.jpg"
  },
  {
    title: "World Bank Commends Imo for Fiscal Transparency",
    desc: "Imo State receives recognition from the World Bank for outstanding performance in budget transparency and accountability.",
    date: "10th April 2024",
    img: "/images/homeImage3.jpg"
  },
];

export default function LatestNews() {
  return (
    <section className="w-full px-4 md:px-8 py-10 md:py-16 bg-white">
      <h2 className="text-dark-primary text-xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Latest News</h2>
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-0 md:px-4 mb-8">
        {news.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
            <div className="relative w-full h-[140px] md:h-[180px]">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-4 md:p-5 flex-1 flex flex-col">
              <h3 className="text-dark-secondary text-xs md:text-[15px] font-bold text-gray-900 mb-2 uppercase leading-snug">{item.title}</h3>
              <p className="text-dark-primary-body text-gray-700 text-xs md:text-sm mb-2 md:mb-4">{item.desc}</p>
              <span className="text-dark-tertiary text-xs md:text-[15px] font-bold text-gray-900 mt-auto">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <AppLink href="/news" label="See More" variant="primary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium"/>
      </div>
    </section>
  );
} 