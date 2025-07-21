import Image from "next/image";

const newsList = Array(6).fill({
  title: "IMO STATE DIGITIZES PUBLIC SERVICES, UNVEILS NEW E-GOVERNMENT PORTALS",
  date: "MAY 30, 2025",
  img: "/images/homeImage1.png",
  badge: "Top News",
  desc: "From tax payments to public records, the new digital system offers citizens faster, easier access to essential se..."
});

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsList.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="relative w-full h-48">
            <Image src={item.img} alt={item.title} fill className="object-cover" />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">{item.badge}</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.desc}</p>
            <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
} 