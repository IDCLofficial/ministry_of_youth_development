import Image from "next/image";
import Link from "next/link";

const advert = {
    title: "SKill-Up Imo",
    desc: "The Imo State Ministry of Digital Economy and eGovernment heralds an enabling environment to galvanize ground-breaking innovations that will address societal challenges and enhance efficient public service delivery through the intensive and extensive deployment of digital technology.",
    img: "/images/advert_flier.png",
    link: "/register",
    linkText: "Register Now",
    link2: "/talents",
    link2Text: "Meet Our Talents",
}

export default function Advertisement() {
  return (
    <section className="w-full px-8 py-12 mt-28 bg-white flex justify-between items-center">
      <div className="w-full w-full flex flex-col md:flex-row justify-center items-center gap-18 px-4">
        {/* Flier Image */}
        <div className="w-full md:w-[500px] border border-[#7d7dbb] bg-[#d6f5d6] rounded-sm flex-shrink-0">
          <div className="relative w-full h-[260px] md:h-[280px]">
            <Image src="/images/advert_flier.png" alt="SkillUp Imo Flier" fill className="object-cover" />
          </div>
        </div>
        {/* Text and Actions */}
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{advert.title}</h2>
          <p className="text-gray-700 text-sm md:text-base mb-6 max-w-xl">
            {advert.desc}
          </p>
          <div className="flex gap-3">
            <Link href={advert.link} className="bg-green-700 hover:bg-green-800 text-white font-medium px-5 py-2 rounded shadow transition text-sm">{advert.linkText}</Link>
            <Link href={advert.link2} className="border border-green-700 text-green-700 font-medium px-5 py-2 rounded shadow-sm transition text-sm hover:bg-green-50">{advert.link2Text}</Link>
          </div>
        </div>
      </div>
    </section>
  );
} 