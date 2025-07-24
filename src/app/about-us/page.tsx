import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { CommissionerSection } from "./CommissionerSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Sports and Youth Development" />
            <AboutSection 
                aboutText="The Imo State Ministry of Sports and Youth Development is dedicated to empowering the youth and advancing sports as a catalyst for personal and community growth. Our vision is to nurture talent, promote healthy lifestyles, and create inclusive opportunities for all Imolites through innovative sports programs, leadership initiatives, and youth engagement. We are committed to fostering excellence, teamwork, and resilience, while building a vibrant sporting culture that inspires achievement and unity across Imo State. By collaborating with stakeholders and leveraging resources, we strive to develop future leaders and athletes who will contribute positively to the state’s progress and well-being."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <CommissionerSection 
                imgSrc="/images/commissioner.jpg" 
                altText="Hon. Dr. Emeka Mandelaa" 
                commissionerName="Hon. Dr. Emeka Mandela" 
                commissionerDescription="As Commissioner for Sports and Youth Development, Dr. (Rt. Hon.) Emeka Mandela is a seasoned leader and policy advocate dedicated to fostering sustainable sports and youth development in Imo State."
            />     
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Be part of Imo’s transformation with MSYD"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}