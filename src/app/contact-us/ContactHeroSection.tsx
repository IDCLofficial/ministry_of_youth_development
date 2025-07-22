import React from "react";

interface ContactHeroSectionProps {
  title: string;
}

const ContactHeroSection: React.FC<ContactHeroSectionProps> = ({ title }) => (
  <section className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center bg-[url('/images/gradient.png')] bg-cover bg-center">
    <h1 className="text-white text-4xl md:text-5xl font-bold z-10">{title}</h1>
  </section>
);

export default ContactHeroSection; 