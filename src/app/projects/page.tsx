import ProjectHeroSection from "./ProjectHeroSection";
import SkillUpSection from "./SkillUpSection";
import DigitalAgendaSection from "./DigitalAgendaSection";
import ReadySection from "./ReadySection";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="bg-white">
      <ProjectHeroSection />
      <SkillUpSection />
      <DigitalAgendaSection />
      <ReadySection />
      <Footer />
    </div>
  );
}