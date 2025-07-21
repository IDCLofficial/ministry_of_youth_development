import NewsHeroSection from "./NewsHeroSection";
import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import ReadySection from "./ReadySection";
import Footer from "../components/Footer";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <NewsHeroSection />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
      <ReadySection />
      <Footer />
    </div>
  );
}
