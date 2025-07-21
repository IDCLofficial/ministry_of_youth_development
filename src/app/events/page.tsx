import EventsHeroSection from "./EventsHeroSection";
import EventsListSection from "./EventsListSection";
import ReadySection from "../news/ReadySection";
import Footer from "../components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <EventsHeroSection />
      <EventsListSection />
      <ReadySection />
      <Footer />
    </div>
  );
}
