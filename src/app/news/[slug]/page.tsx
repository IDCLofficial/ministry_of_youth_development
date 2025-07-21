import Image from "next/image";
import ReadySection from "../ReadySection";
import Footer from "../../components/Footer";

const latestNews = [
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND EXPANSION TO...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="w-full flex justify-center pt-8">
        <div className="w-full max-w-3xl rounded-xl overflow-hidden">
          <Image src="/images/homeImage1.png" alt="News Hero" width={900} height={400} className="object-cover w-full h-[350px]" />
        </div>
      </div>
      {/* Title & Meta */}
      <div className="w-full max-w-3xl mx-auto text-center mt-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Digitizes Public Services, Unveils New E-Government Portals</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm mb-6">
          <span>MAY 30, 2025</span>
          <span className="hidden md:inline">•</span>
          <span>Share:</span>
          <div className="flex gap-2">
            <span className="inline-block w-5 h-5 bg-gray-200 rounded-full" />
            <span className="inline-block w-5 h-5 bg-gray-200 rounded-full" />
            <span className="inline-block w-5 h-5 bg-gray-200 rounded-full" />
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-3xl mx-auto px-4 pb-12">
        <p className="text-gray-700 mb-6">In a landmark move towards building a smarter and more connected state, the Imo State Government has officially launched its new suite of e-government portals, offering digital access to a wide range of public services. This rollout forms a key component of the Digital Imo Agenda, aimed at increasing efficiency, transparency, and inclusiveness in government service delivery.</p>
        <p className="text-gray-700 mb-6">The new digital platforms allow citizens to pay taxes, apply for permits and licenses, access land records, register businesses, and track applications — all from their smartphones or computers, eliminating the need for long queues, physical visits, and paper-based processes.</p>
        <div className="w-full flex justify-center my-8">
          <div className="w-full max-w-md rounded-xl overflow-hidden">
            <Image src="/images/homeImage1.png" alt="News Detail" width={600} height={300} className="object-cover w-full h-64" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="font-semibold mb-2">Key Features of the E-Government Portals:</h2>
            <ul className="list-disc ml-6 text-gray-700 mb-6">
              <li>One-Stop Dashboard: A centralized platform for accessing multiple government departments and services.</li>
              <li>Digital Identity Verification: Seamless sign-in and secure transactions using NIN integration.</li>
              <li>Mobile Compatibility: Optimized for both desktop and mobile devices.</li>
              <li>Real-Time Notifications: SMS and email updates on service application status.</li>
              <li>Multilingual Support: Inclusive access with support for English, Igbo, and Pidgin.</li>
            </ul>
          </div>
          <div className="flex-1 flex items-center">
            <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
              <span className="font-bold">“This is a major step in democratizing access to public services. Whether you’re in a rural village or an urban center, Imo citizens now have a government that is quite literally at their fingertips.”</span>
            </blockquote>
          </div>
        </div>
        <p className="text-gray-700 mt-6">In addition, the state is partnering with key tech players like Microsoft Nigeria, SoftAlliance, and NITDA to ensure data security, system interoperability, and compliance with national digital standards.</p>
        <p className="text-gray-700 mt-2">The e-government platform also supports back-end integration with internal government systems, enabling faster processing times and better coordination between ministries.</p>
        <p className="text-gray-700 mt-2">This marks a new era of governance — one where efficiency meets accessibility, and where every citizen, regardless of location, can fully participate in the civic and economic life of Imo State.</p>
      </div>
      {/* Latest News Section */}
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
      <ReadySection />
      <Footer />
    </div>
  );
} 