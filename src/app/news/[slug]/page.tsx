import Image from "next/image";
import Footer from "../../components/Footer";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";
import CTASection from "@/app/components/CTASection";
import SocialShareBar from "../SocialShareBar";
import newsList from "../newsList";

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export async function generateStaticParams() {
  return newsList.map(news => ({ slug: slugify(news.title) }));
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsList.find(item => item.title === decodeURIComponent(slug));

  if (!news) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">News Not Found</h1>
      </div>
    );
  }

  // Get other news for latestNews section (excluding current)
  const latestNews = newsList.filter(item => item.title !== news.title).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]">
        <NewsHeroSection />
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
            <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
              <Image src={news.img} alt={news.title} width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{news.title}</h1>
            <SocialShareBar date={news.date} />
          </div>
          {/* Main Content */}
          <div>
            <p className="text-gray-700 mb-6">{news.desc}</p>
            {/* You can add more fields or sections here if needed */}
          </div>
        </NewsBodySection>
      </section>
      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
      <CTASection heading="Ready to Experience the New Imo?" subtext="Discover our vision for an inclusive, empowered, and connected state." buttonLabel="Contact Us" buttonHref="/contact-us"/>
      <Footer />
    </div>
  );
} 