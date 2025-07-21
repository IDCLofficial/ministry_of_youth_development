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
            <AboutUsHero ministryName="Ministry of Digital Economy E-Government" />
            <AboutSection 
                aboutText="Established in 2022, the Imo State Ministry of Digital Economy and E-Government (IMDEEG) is responsible for implementing and managing the state's digital economy strategies. From enhancing public service delivery to building digital literacy, our goal is to transform Imo into a leading digital hub in Nigeria." 
                imgSrc="/images/aboutUs1.png" 
                altText="Ministry of Digital Economy and E-Government conference event" 
            />
            <CommissionerSection 
                imgSrc="/images/commissioner2.png" 
                altText="Hon. Commissioner Dr. Chimezie Amadi" 
                commissionerName="Dr. Chimezie Amadi" 
                commissionerDescription="As Commissioner for Digital Economy and E-Government, Dr. Chimezie Amadi is a seasoned leader and policy advocate dedicated to bridging the digital divide. Under his direction, IMDEEG has empowered thousands of citizens through tech training and expanded digital services across Imo State."
            />     
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Join our mission to make Imo the digital heart of Nigeria"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}