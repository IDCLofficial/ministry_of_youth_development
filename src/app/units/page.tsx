import UnitsHeroSection from "./UnitsHeroSection";
import UnitsTabsSection from "./UnitsTabsSection";
import UnitsCTASection from "./UnitsCTASection";
import Footer from "../components/Footer";

export default function UnitsPage() {
  return (
    <div className="bg-white">
      <UnitsHeroSection />
      <UnitsTabsSection />
      <UnitsCTASection />
      <Footer />
    </div>
  );
}
