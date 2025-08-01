import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import TeamGridSection from "./TeamGridSection";

const teamMembers = [
    {
        name: "Hon. Dr. Emeka Mandela Ukaegbu",
        position: "Commissioner",
        imgSrc: "/images/commissioner.jpg"
    },
    {
        name: "Dr. Mirikwe Dorathy Ekeoma",
        position: "Permanent Secretary",
        imgSrc: "/images/permSec.jpeg"
    }
]

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Youth Development and Talent Hunt" />
            <AboutSection 
                aboutText="The Imo State Ministry of Youth Development & Talent Hunt is dedicated to building a dynamic, empowered, and innovative youth population in Imo State. Under the leadership of Hon. Emeka Mandela Ukaegbu, the Ministry works to foster strong synergy between the state government and its youth by discovering, nurturing, and projecting young talents across diverse sectors such as sports, creative arts, ICT, agriculture, and entrepreneurship. Through this collaborative approach, the Ministry partners with key stakeholders like the Imo State Sports Commission, Sports Writers Association of Nigeria (SWAN), Nigerian Army (34 Artillery Brigade, Obinze), and DSS, to deliver impactful programs—ranging from football scouting and civic reorientation to mentorship and security awareness initiatives."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection /> 
            <TeamGridSection members={teamMembers} />
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <CTASection 
                heading="Join Us to Transform the Imo Youths"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}