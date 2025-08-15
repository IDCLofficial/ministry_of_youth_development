import { Hero } from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import AboutCommisioner from "@/app/components/AboutCommisioner";
import QuickLinks from "@/app/components/QuickLinks";
import LatestNews from "@/app/components/LatestNews";
import Stats from "@/app/components/Stats";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import FeaturedInitiatives from "./components/FeaturedInitiatives";
import { getNewsList } from "./news/newsList";
import { getProject } from "./projects/projects";
import { NewsPost, Project } from "../../lib/types";

export default async function Home() {
  const getNews = await getNewsList();
  const getProjects = await getProject();
  
  return (
    <div className="h-screen w-full bg-red-400">
      <Hero
        title="Imo State Ministry of Youth Development and Talent Hunt" 
        caption="Enlighten, Engage, Empower Imo Youth for a More Productive Workforce." 
        subtitle="The Imo State Ministry of Youth Development and Talent Hunt is dedicated to nurturing talent, fostering innovation, and creating opportunities for youth empowerment through community engagement, building a vibrant and productive future for all Imolites."
      />
      <AboutSection 
        title="About Us"
        subtitle="Enlighten, engage, and empower Imo youth through purposeful policies, training programs, and development initiatives. The Ministry serves as a catalyst for nurturing talent, building character, and fostering community-driven growth through civic participation."
        image1="/images/homeImage1.jpg"
        image2="/images/homeImage2.jpg"
      />
      <AboutCommisioner 
        imgSrc="/images/commissioner.jpg" 
        title="About The Commissioner" 
      />
      <section className="w-full flex flex-col gap-4">
        <FeaturedInitiatives projects={getProjects as unknown as Project[]}/>
        <QuickLinks />
        {/* <Advertisement /> */}
        <LatestNews newsList={getNews as unknown as NewsPost[]}/>
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
