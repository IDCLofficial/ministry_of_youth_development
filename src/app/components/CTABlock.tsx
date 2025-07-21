import React from "react";
import { AppLink } from "./AppLink";

interface CTABlockProps {
  heading: string;
  subtext?: string;
  buttonLabel: string;
  buttonHref: string;
}

export default function CTABlock({ heading, subtext, buttonLabel, buttonHref }: CTABlockProps) {
  return (
    <section className="w-full bg-[#f7f9fa] py-10 px-18 rounded-[6px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="w-[50%]">
          <h2 className="text-2xl md:text-[36px] font-medium text-gray-900 mb-2">{heading}</h2>
          <p className="text-gray-600 text-sm md:text-base max-w-md">{subtext}</p>
        </div>
        <AppLink 
            href={buttonHref} 
            label={buttonLabel} 
            variant="primary" 
        />
      </div>
    </section>
  );
} 