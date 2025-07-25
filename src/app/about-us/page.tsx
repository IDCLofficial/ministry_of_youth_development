import { AboutUsHero } from "./AboutUsHero";
import { AboutSection } from "./AboutSection";
import { ObjectivesSection } from "./ObjectivesSection";
import { StructuresSection } from "./StructuresSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import { MVSSection } from "./MVSSection";
import { AppLink } from "../components/AppLink";
import TeamGridSection from "./team/TeamGridSection";

const teamMembers = Array(4).fill({
    name: "Magreth Nonso",
    position: "Position",
    imgSrc: "/images/team.png" // Use a placeholder or real image if available
  });

export default function AboutUs() {
    return (
        <div className="h-screen">
            <AboutUsHero ministryName="Ministry of Sports and Youth Development" />
            <AboutSection 
                aboutText="The Imo State Ministry of Youth Development & Talent Hunt is dedicated to building a dynamic, empowered, and innovative youth population in Imo State. Under the leadership of Hon. Emeka Mandela Ukaegbu, the Ministry works to foster strong synergy between the state government and its youth by discovering, nurturing, and projecting young talents across diverse sectors such as sports, creative arts, ICT, agriculture, and entrepreneurship. Through this collaborative approach, the Ministry partners with key stakeholders like the Imo State Sports Commission, Sports Writers Association of Nigeria (SWAN), Nigerian Army (34 Artillery Brigade, Obinze), and DSS, to deliver impactful programs—ranging from football scouting and civic reorientation to mentorship and security awareness initiatives."
                imgSrc="/images/homeImage1.jpg" 
                altText="Ministry of Sports and Youth Development conference event" 
            />
            <MVSSection />   
            <ObjectivesSection />
            <StructuresSection 
                imgSrc="/images/building.png"
            />
            <section className="w-full py-10 md:py-16 px-2 md:px-4 bg-white mx-auto flex flex-col items-center">
                <TeamGridSection members={teamMembers} />
                <AppLink href="/about-us/team" label="Learn More" variant="primary" className="hover:bg-primary-green/80 transition-all duration-300"/>
            </section>
            <CTASection 
                heading="Join Us to Transform the Imo Youths"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            <Footer />
        </div>
    )
}