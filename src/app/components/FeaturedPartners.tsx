import Image from "next/image";

const partners = [
    { src: "/images/huawei.png", alt: "Huawei" },
    { src: "/images/cisco.png", alt: "Cisco" },
    { src: "/images/zinox.png", alt: "Zinox" },
    { src: "/images/ncc.png", alt: "NCC" },
    { src: "/images/konga.png", alt: "Konga" },
    { src: "/images/microsoft.png", alt: "Microsoft" },
    { src: "/images/nabteb.png", alt: "Imo State" },
    { src: "/images/uspf.png", alt: "Partner 2" },
    { src: "/images/nitda.png", alt: "NITDA" }
];

export default function FeaturedPartners() {
  return (
    <section className="w-full py-10 md:py-20 bg-[#f7f9fa]">
      <h2 className="text-xl md:text-3xl lg:text-[43px] font-medium text-center mb-8 md:mb-10">Featured Partners</h2>
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-3 md:p-6 flex items-center justify-center w-[100px] h-[50px] md:w-[150px] md:h-[80px]">
              <Image src={partner.src} alt={partner.alt} width={80} height={40} className="object-contain md:w-[120px] md:h-[60px]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 