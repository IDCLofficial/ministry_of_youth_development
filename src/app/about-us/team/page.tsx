import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `Before his appointment, Dr. Amadi served at the Nigerian Communications Commission (NCC), where he held key roles in departments such as Procurement, Projects, Compliance, Monitoring and Enforcement, and Research and Development. He notably headed the Emerging Technology Unit, focusing on cutting-edge ICT initiatives and fostering collaboration between academia and industry through programs like ACADOPRENEUR.
\nAs Commissioner, Dr. Amadi introduced the Digital Imo Agenda, aiming to train 100,000 youths, women, and individuals with disabilities in essential 21st-century digital skills, including software development, blockchain, and game development. This initiative is part of a broader mission to build smart cities that leverage digital technology to drive governance, innovation, and entrepreneurship, promoting transformative value creation and prosperity for all.`;

const initiatives = [
  "Statewide Youth Talent Hunt Programs: Organizing football scouting tournaments, chess competitions, and athletics events to discover and nurture young talents.",
  "Annual Imo Youth Marathon and Fitness Challenge: Promoting healthy lifestyles and community participation through large-scale fitness events.",
  "Grassroots Sports Development: Implementing sports programs and competitions in all 27 LGAs to ensure broad youth engagement.",
  "Youth Empowerment and Skills Acquisition Workshops: Providing training and mentorship in leadership, entrepreneurship, and life skills for Imo youth.",
  "Civic Awareness and Reorientation Campaigns: Fostering responsible citizenship and community service among young people.",
  "Scholarships and Grants for Outstanding Youths: Supporting academic and athletic excellence through targeted financial aid.",
  "Community Volunteerism and Leadership Training: Encouraging youth to take active roles in community development and leadership.",
  "Partnership with Imo Sports Commission: Collaborating to develop elite athletes and promote sports excellence across the state."
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
        heading="Leadership Behind the Ministry of Sports and Youth Development"
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
            Hon. Dr. Emeka Mandela, the Commissioner for Sports and Youth Development in Imo State, is a visionary leader dedicated to empowering the youth and advancing sports as a catalyst for personal and community growth. With a strong background in public service and a passion for youth engagement, Dr. Mandela has championed innovative programs that nurture talent, promote healthy lifestyles, and create inclusive opportunities for all Imolites. Under his leadership, the ministry has launched grassroots sports initiatives, youth empowerment workshops, and talent discovery events across the state. Dr. Mandela’s commitment to excellence, teamwork, and resilience continues to inspire a vibrant sporting culture and foster the next generation of leaders and athletes in Imo State.
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
