import React from "react";
import ContactHeroSection from "./ContactHeroSection";
import ContactInfoSection from "./ContactInfoSection";
import ContactFormSection from "./ContactFormSection";
import ContactImageSection from "./ContactImageSection";
import ContactCTASection from "./ContactCTASection";
import Footer from "../components/Footer";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <ContactHeroSection title="Contact Us" />
      <section className="w-full mx-auto py-20 px-12 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row gap-8 relative">    
            <div className="w-[50%]">
              <ContactInfoSection />
            </div>
            <div className="w-[40%] flex justify-center items-start absolute right-0 z-5">
              <ContactFormSection />
            </div>
        </div>
        <ContactImageSection />
      </section>
      <ContactCTASection />
      <Footer />
    </main>
  );
}
