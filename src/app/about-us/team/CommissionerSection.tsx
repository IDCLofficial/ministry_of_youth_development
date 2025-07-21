import Image from "next/image";
import React from "react";

interface CommissionerSectionProps {
  imgSrc: string;
  heading: string;
  description: string;
}

const CommissionerSection: React.FC<CommissionerSectionProps> = ({ imgSrc, heading, description }) => {
  return (
    <section className="w-full bg-white py-20 px-8 flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full mx-auto">
      <div className="flex-shrink-0">
        <Image src={imgSrc} alt="Commissioner" width={400} height={340} className="rounded-xl object-cover" />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl md:text-[43px] font-medium mb-4 text-dark-primary">{heading}</h2>
        <p className="text-gray-700 text-base md:text-[1rem] leading-relaxed text-justify whitespace-pre-line">{description}</p>
      </div>
    </section>
  );
};

export default CommissionerSection; 