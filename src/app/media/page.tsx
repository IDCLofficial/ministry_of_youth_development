import React from "react";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import Footer from "../components/Footer";
import CTASection from "../components/CTASection";
import { media } from "./media";

export default function MediaPage() {
  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Explore Our Media Gallery"
        subtitle="Discover how the Ministry of Youth Development and Talent Hunt empowers young people and nurtures talent for a brighter future."
        backgroundImage="/images/heroImage.png"
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <MediaGalleryGrid items={media} />
      </section>
      <CTASection 
        heading="Partner with Us Today!"
        subtext="You can partner with us in various ways, including but not limited to: Sponsoring our events, providing financial support, or partnering with us on a project."
        buttonLabel="Contact Us" 
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
