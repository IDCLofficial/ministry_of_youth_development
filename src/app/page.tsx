import { AppLink } from "@/components/AppLink";
import { Hero } from "@/components/Hero";
import { Title } from "@/components/Title";
import Image from "next/image";
import AboutSection from "@/components/AboutSection";
import AboutCommisioner from "@/components/AboutCommisioner";
import QuickLinks from "@/components/QuickLinks";
import LatestNews from "@/components/LatestNews";
import FeaturedPartners from "@/components/FeaturedPartners";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Advertisement from "@/components/Advertisement";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero
        title="Transparent Governance, Accountable Finance, Sustainable Growth." 
        caption="Transparent Governance, Accountable Finance, Sustainable Growth." 
        subtitle="The Imo State Ministry of Finance is committed to managing public funds with transparency, efficiency, and accountability. We drive fiscal policy, budget planning, and revenue generation to support sustainable development and economic growth across the state." 
      />
      <AboutSection 
        title="About Us"
        subtitle="Established in 2022, the Imo State Ministry of Digital Economy and E-Government (IMDEEG) is committed to accelerating digital transformation across the state. We build a digitally empowered Imo through inclusive innovation, cutting-edge technology, and people-centered digital governance."
        image1="/images/homeImage1.png"
        image2="/images/homeImage2.png"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.png" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-8">
        <QuickLinks />
        <Advertisement />
        <LatestNews />
      </section>
      <Stats />
      <FeaturedPartners />
      <CTASection />
      <Footer 
        logo="/logo.png" 
        ministry="Ministry of Finance" 
        description="The Imo State Ministry of Finance is committed to managing public funds with transparency, efficiency, and accountability. We drive fiscal policy, budget planning, and revenue generation to support sustainable development and economic growth across the state." 
      />
    </div>
  );
}
