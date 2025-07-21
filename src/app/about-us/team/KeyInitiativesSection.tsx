import Image from "next/image";
import React from "react";

interface KeyInitiativesSectionProps {
  initiatives: string[];
  imgSrc: string;
}

const KeyInitiativesSection: React.FC<KeyInitiativesSectionProps> = ({ initiatives, imgSrc }) => {
  return (
    <section className="w-full bg-[#f3f8fa] py-20 px-8 flex flex-col md:flex-row items-center gap-10 md:gap-20 max-w-6xl mx-auto">
      <div className="flex-1">
        <h2 className="text-2xl md:text-[43px] font-medium mb-4 text-dark-primary">Key Initiatives</h2>
        <ul className="list-disc pl-5 space-y-4 text-dark-primary-body text-base md:text-[1rem]">
          {initiatives.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex-shrink-0 w-full md:w-[400px]">
        <Image src={imgSrc} alt="Key Initiatives" width={400} height={400} className="rounded-xl object-cover shadow-lg min-h-[400px]" />
      </div>
    </section>
  );
};

export default KeyInitiativesSection; 