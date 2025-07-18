import Image from "next/image";
import { Title } from "./Title";

interface AboutSectionProps {
    title: string;
    subtitle: string;
    image1: string;
    image2: string;
}

export default function AboutSection({title, subtitle, image1, image2}: AboutSectionProps) {
  return (
    <section className={`relative w-full p-8 py-20 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover shadow-lg overflow-hidden`}>
      <div className="flex flex-col gap-8 items-center w-[90%] mx-auto">
        {/* Left: Text Content */}
        <div className="flex items-center h-full justify-between w-full">
            <div className="flex flex-col gap-2">
                <Title label={title}/>
                <h2 className="text-3xl md:text-[43px] font-bold text-white leading-tight mb-4">
                    Our Mandate —<br/>
                    Ministry of Digital Economy <br className="hidden md:block" />
                    <span className="text-green-400">& E-Government</span>
                </h2>
            </div>
            <div>
                <p className="text-gray-200 text-xs md:text-[16px] mb-6 max-w-lg text-justify">
                    {subtitle}
                </p>
                <button className="bg-white text-gray-900 font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition w-fit">Learn More</button>
            </div>
        </div>
        {/* Right: Images */}
        <div className="flex flex-row items-center gap-8 w-full justify-center">
          <div className="relative rounded-lg overflow-hidden w-[70%] h-[280px]">
            <Image src={image1} alt="Mandate 1" fill className="object-cover" />
          </div>
          <div className="relative rounded-lg overflow-hidden w-[335px] h-[280px] flex items-center justify-center">
            <Image src={image2} alt="Mandate 2" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
