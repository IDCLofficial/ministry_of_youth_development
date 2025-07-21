import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import ReadySection from "./ReadySection";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <NewsHeroSection />
      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row gap-8 px-8 py-20">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
      <CTASection heading="Ready to Experience the New Imo?" subtext="Discover our vision for an inclusive, empowered, and connected state." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
}
