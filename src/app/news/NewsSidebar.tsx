import Image from "next/image";

const categories = [
  { name: "Latest Updates", count: 12 },
  { name: "Policies", count: 12 },
  { name: "Latest Updates", count: 12 },
  { name: "Latest Updates", count: 12 },
];

const popularNews = [
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
  {
    title: "IMO STATE LAUNCHES MAJOR BROADBAND...",
    date: "MAY 30, 2025",
    img: "/images/homeImage1.png",
  },
];

export default function NewsSidebar() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 bg-[#F9F9F9] p-4">
      <div className="mb-8">
        <h3 className="font-medium text-[18px] mb-4">CATEGORIES</h3>
        <ul className="space-y-2">
          {categories.map((cat, idx) => (
            <li key={idx} className="flex justify-between text-gray-700 text-[15px]">
              <span>{cat.name}</span>
              <span>{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-medium text-[18px] mb-4">POPULAR NEWS</h3>
        <ul className="space-y-4">
          {popularNews.map((news, idx) => (
            <li key={idx} className="flex gap-3 items-center">
              <div className="w-auto h-[50px] relative rounded overflow-hidden">
                <Image src={news.img} alt={news.title} width={100} height={100} className="object-cover h-full" />
              </div>
              <div>
                <div className="text-[14px] font-medium leading-tight line-clamp-2">{news.title}</div>
                <div className="text-[10px] text-gray-500 mt-1">{news.date}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
} 