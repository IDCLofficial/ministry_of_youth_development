import Image from "next/image";

export default function EventsHeroSection() {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center">
      <Image src="/images/initiatives.png" alt="Events Hero" fill className="object-cover w-full h-full" priority />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">Empowering Imo Through Events & Innovation</h1>
      </div>
    </section>
  );
} 