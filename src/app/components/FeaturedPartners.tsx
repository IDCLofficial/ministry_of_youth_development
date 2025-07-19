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
    <section className="w-full py-20 bg-[#f7f9fa]">
      <h2 className="text-3xl md:text-[43px] font-medium text-center mb-10">Featured Partners</h2>
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex items-center justify-center w-[150px] h-[80px]">
              <Image src={partner.src} alt={partner.alt} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 