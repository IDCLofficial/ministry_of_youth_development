import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ServicesHeroSection from "./ServicesHeroSection";
import ServicesSection from "./ServicesSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Youth Empowerment, Talent Hunt and Leadership Programmes",
  description: "Skills acquisition and vocational training, talent identification, civic reorientation and leadership training, youth grants and policy advocacy in Imo State.",
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