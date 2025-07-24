import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
import LatestNews from "@/app/components/LatestNews";
import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";

export default function Home() {
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Youth Development" 
        caption="Enlighten, Engage, Empower Imo Youth for a More Productive Workforce." 
        subtitle="The Imo State Ministry of Youth Development is dedicated to nurturing talent, fostering innovation, and creating opportunities for youth empowerment through community engagement, building a vibrant and productive future for all Imolites."
      />
      <AboutSection 
        title="About Us"
        subtitle="The Imo State Ministry of Sport and Youth Development is committed to providing a transparent and effective sports and youth development system while strengthening sports and youth development across the state."
        image1="/images/homeImage1.jpg"
        image2="/images/homeImage2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.jpg" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives />
        <QuickLinks />
        {/* <Advertisement /> */}
        <LatestNews />
      </section>
      <Stats />
      {/* <FeaturedPartners /> */}
      <CTASection 
        heading="Partner with Us Today!"
        subtext="You can partner with us in various ways, including but not limited to: Sponsoring our events, providing financial support, or partnering with us on a project."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer/>
    </div>
  );
}
