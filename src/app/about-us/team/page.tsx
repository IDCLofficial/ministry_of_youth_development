import HeroSection from "./HeroSection";
import CommissionerSection from "./CommissionerSection";
import KeyInitiativesSection from "./KeyInitiativesSection";
import TeamGridSection from "./TeamGridSection";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const commissionerDescription = `Before his appointment, Dr. Amadi served at the Nigerian Communications Commission (NCC), where he held key roles in departments such as Procurement, Projects, Compliance, Monitoring and Enforcement, and Research and Development. He notably headed the Emerging Technology Unit, focusing on cutting-edge ICT initiatives and fostering collaboration between academia and industry through programs like ACADOPRENEUR.
\nAs Commissioner, Dr. Amadi introduced the Digital Imo Agenda, aiming to train 100,000 youths, women, and individuals with disabilities in essential 21st-century digital skills, including software development, blockchain, and game development. This initiative is part of a broader mission to build smart cities that leverage digital technology to drive governance, innovation, and entrepreneurship, promoting transformative value creation and prosperity for all.`;

const initiatives = [
  "SkillUpImo Project: This flagship program has trained thousands of young people in digital skills, providing them with tools like laptops and smartphones to kickstart their tech careers. The initiative has positioned Imo State as a leading digital skills hub in Nigeria.",
  "Broadband Expansion: Under Dr. Amadi&apos;s leadership, efforts have been made to enhance broadband penetration across all local government areas in Imo State, ensuring that even underserved and unserved communities have access to quality telecommunication services.",
  "Collaboration with Federal Initiatives: The Ministry has partnered with federal programs like the Three Million Technical Talent (3MTT) initiative to further empower youths with digital skills, aiming to position Nigeria as a net exporter of tech talent."
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
        heading="Leadership Behind the Digital Imo Agenda"
      />
      <CommissionerSection
        imgSrc="/images/commissioner.png"
        heading="Background and Vision"
        description={commissionerDescription}
      />
      <KeyInitiativesSection
        initiatives={initiatives}
        imgSrc="/images/initiatives.png"
      />
      <TeamGridSection members={teamMembers} />
      <div className="w-full bg-dark-primary text-center py-8 px-4">
        <p className="text-center text-[1rem] font-regular text-white w-[60%] mx-auto">
            Dr. Amadi’s proactive approach and strategic initiatives have significantly contributed to the digital transformation of Imo State, fostering an environment conducive to innovation, entrepreneurship, and inclusive economic growth.
        </p>
      </div>
      <CTASection
        heading="Join our mission to make Imo the digital heart of Nigeria"
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />    
      <Footer />
    </main>
  );
}
