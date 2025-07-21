import React from "react";
import Image from "next/image";

interface NewsHeroSectionProps {
  image: string;
}

const NewsHeroSection: React.FC<NewsHeroSectionProps> = ({ image }) => (
  <section className="relative w-full h-[340px] md:h-[380px] flex items-end justify-center bg-gradient-to-b from-green-900 via-green-700 to-green-400 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/images/gradient.png')] bg-cover bg-center z-0 opacity-80" />
    <div className="relative z-10 w-full flex justify-center pb-2">
      <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
        <Image src={image} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
      </div>
    </div>
  </section>
);

export default NewsHeroSection; 