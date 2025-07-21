import ProjectHeroSection from "./ProjectHeroSection";
import SkillUpSection from "./SkillUpSection";
import DigitalAgendaSection from "./DigitalAgendaSection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <SkillUpSection />
      <DigitalAgendaSection />
      <CTASection heading="Ready to Experience the New Imo?" subtext="Discover our vision for an inclusive, empowered, and connected state." buttonLabel="Contact Us" buttonHref="/contact-us" />
      <Footer />
    </div>
  );
}