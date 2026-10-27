import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description: "Services offered by the Ministry of Youth Development & Talent Hunt of the Imo State Government.",
  path: "/services",
});


export default function ServicesPage() {
    return (
        <div className="bg-white">
            <ServicesHeroSection />
            <ServicesSection />
            <CTASection heading="Ready to get started?" buttonLabel="Contact Us" buttonHref="/contact" />
            <Footer />
        </div>
    );
}