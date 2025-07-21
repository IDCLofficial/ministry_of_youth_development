import Image from "next/image";
import NewsSearchBar from "./NewsSearchBar";

export default function NewsHeroSection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center bg-[url('/images/projectsHero.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-end gap-4 w-full h-full">
        <h1 className="text-white text-[3rem] md:text-5xl font-bold text-center">Empowering Imo’s Digital Future</h1>
        <NewsSearchBar />
      </div>
    </section>
  );
} 