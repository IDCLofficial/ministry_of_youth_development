"use client"
import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `Before his appointment, Dr. Amadi served at the Nigerian Communications Commission (NCC), where he held key roles in departments such as Procurement, Projects, Compliance, Monitoring and Enforcement, and Research and Development. He notably headed the Emerging Technology Unit, focusing on cutting-edge ICT initiatives and fostering collaboration between academia and industry through programs like ACADOPRENEUR.
\nAs Commissioner, Dr. Amadi introduced the Digital Imo Agenda, aiming to train 100,000 youths, women, and individuals with disabilities in essential 21st-century digital skills, including software development, blockchain, and game development. This initiative is part of a broader mission to build smart cities that leverage digital technology to drive governance, innovation, and entrepreneurship, promoting transformative value creation and prosperity for all.`;

const initiatives = [
  "SkillUpImo & SkillUpImo Challenge- A flagship initiative launched to train 300,000 Imolites in digital skills (2023-2025).- Features weekly innovation competitions with cash prizes for trainees.",
  "Tech Talent to Jobs (TT2J)- Connects SkillUpImo graduates to job opportunities both locally and abroad.- Partnerships with freelancing platforms and tech employers.",
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
