"use client"
import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `No information available`;

const initiatives = [
  "Youth Talent Discovery & Talent Hunt Programs- Talent hunts in sports, ICT, agriculture, business, and arts.- Talents are referred to relevant state agencies for further development.",
  "Youth Security & Civic Reorientation Summit- Statewide summit promoting peace, civic engagement, and anti-crime orientation.- Held in partnership with security agencies.",
  "Grassroots Youth Engagement via Youth Officers- Deployment of youth officers in 27 LGAs to implement development programs.",
  "Youth Empowerment & Economic Intervention (IMYEIP)- A N6 billion state intervention to empower 500,000 youths with training and capital.- N2 billion takeoff fund announced in late 2025.",
  "Additional Youth Programs- Youth Farms Master Class, Youth Leadership Training Centers, 'Youth Must Work' Scheme.- Over N520 million distributed in the LGA Youth Empowerment Program.- Launch of Imo Youth Data Bank for digital youth engagement tracking.",
];

const teamMembers = Array(6).fill({
  name: "Magreth Nonso",
  position: "Position",
  imgSrc: "/images/team.png" // Use a placeholder or real image if available
});

export default function TeamPage() {
  return (
    <main className="min-h-screen w-full bg-[#f3f8fa] flex flex-col">
      <HeroSection
        heading="Leadership Behind the Ministry of Youth Development and Talent Hunt"
      />
      <CommissionerSection
        imgSrc="/images/commissioner.jpg"
        heading="Background and Vision"
        description={commissionerDescription}
      />
      <KeyInitiativesSection
        initiatives={initiatives}
        imgSrc="/images/homeImage3.jpg"
      />
      <TeamGridSection members={teamMembers} />
      <div className="w-full bg-dark-primary text-center py-8 px-4">
        <p className="text-center text-[1rem] font-regular text-white w-[90%] lg:w-[60%] mx-auto">
            The Imo State Ministry of Youth Development and Talent Hunt is committed to empowering young people and unlocking their full potential through innovative programs, digital skills training, and inclusive opportunities. Guided by visionary leadership, the ministry drives initiatives that nurture talent, foster entrepreneurship, and promote civic engagement among Imo’s youth. Through projects like SkillUpImo, talent discovery events, and youth empowerment workshops, the ministry is building a generation equipped for the challenges and opportunities of the 21st century. By prioritizing digital literacy, leadership development, and economic empowerment, the Ministry of Youth Development and Talent Hunt is shaping a brighter future for all Imolites and inspiring the next wave of innovators, leaders, and change-makers in the state.
        </p>
      </div>
      <CTASection
        heading="Empowering Imo’s Youth, Inspiring Champions."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />    
      <Footer />
    </main>
  );
}
