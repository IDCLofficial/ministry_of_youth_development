import CTABlock from "./CTABlock";

export default function CTASection() {
  return (
    <section className="w-full bg-[#232c39] relative py-20 flex justify-center items-center" style={{ minHeight: '220px' }}>
      <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-[#22d060] z-0" style={{ minHeight: '80px' }} />
      <div className="relative z-10 w-full max-w-6xl px-4">
        <CTABlock
            heading="Ready to Experience the New Imo?"
            subtext="Discover our vision for an inclusive, empowered, and connected state."
            buttonLabel="Contact Us"
            buttonHref="/contact-us"
        />
      </div>
    </section>
  );
} 