import { AppLink } from "@/components/AppLink";
import { Hero } from "@/components/Hero";
import { Title } from "@/components/Title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <section className="px-[3rem] py-[5rem] bg-[url('/images/gradient.png')] bg-cover bg-center bg-no-repeat flex flex-col justify-center">
        <div className="w-full flex flex-[1fr 1fr] justify-center items-center gap-20">
          <div className="flex flex-col gap-2 w-[2/4]">
            <Title label="About Us"/>
            <h2 className="text-white text-[43px] font-bold">Our Mandate – <br/>Ministry of Finance</h2>
          </div>
          <div className="max-w-2/4 flex flex-col gap-8">
            <p className="text-white text-[16px] leading-relaxed text-justify">
              Established in 2022, the Imo State Ministry of Digital Economy and E-Government (IMDEEG) 
              is committed to accelerating digital transformation across the state. We build a digitally 
              empowered Imo through inclusive innovation, cutting-edge technology, and people-centered 
              digital governance.
            </p>
            <div>
              <AppLink href="/about-us" label="Learn More" variant="secondary" className="border border-1 border-primary-green text-[15px] px-[2rem] py-[12px] rounded-[3.4px] font-medium"/>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Image src="/images/homeImage1.png" alt="about-us" width={500} height={500}  className="rounded-[10px] h-full" />
          <Image src="/images/homeImage2.png" alt="about-us" width={300} height={500} className="rounded-[10px] h-full"/>
        </div>
      </section>
    </div>
  );
}
