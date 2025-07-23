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
            <AboutUsHero ministryName="Ministry of Budget, Economic Planning & Statistics" />
            <AboutSection 
                aboutText="The Imo State Ministry of Budget, Economic Planning & Statistics is the driving force behind the state’s sustainable development and economic transformation. Our mission is to formulate transparent budgets, develop strategic economic plans, and provide reliable statistical data to guide policy decisions and resource allocation. We are committed to fostering inclusive growth, ensuring fiscal responsibility, and enhancing the quality of life for all citizens of Imo State. Through collaboration, innovation, and data-driven strategies, the ministry leads efforts to build a resilient economy, empower communities, and create opportunities for present and future generations."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Budget, Economic Planning and Statistics conference event" 
            />
            <CommissionerSection 
                imgSrc="/images/commissioner2.jpg" 
                altText="Dr. (Rt. Hon.) C.C. Osuala" 
                commissionerName="Dr. (Rt. Hon.) C.C. Osuala" 
                commissionerDescription="As Commissioner for Budget, Economic Planning & Statistics, Dr. (Rt. Hon.) C.C. Osuala is a seasoned leader and policy advocate dedicated to fostering sustainable economic growth and development in Imo State."
            />     
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Be part of Imo’s transformation with MBEPS"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}