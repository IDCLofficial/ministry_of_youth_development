import Image from "next/image";

const links = [
  {
    title: "Projects",
    desc: "See how we're digitally transforming Imo.",
    img: "/images/homeImage1.png",
    href: "/projects"
  },
  {
    title: "Events",
    desc: "Join upcoming tech summits & training programs.",
    img: "/images/homeImage2.png",
    href: "/events"
  },
  {
    title: "Media",
    desc: "Watch our journey in action.",
    img: "/images/heroImage.png",
    href: "/media"
  },
  {
    title: "About Us",
    desc: "Who we are and what we stand for.",
    img: "/images/gradient.png",
    href: "/about-us"
  },
];

export default function QuickLinks() {
  return (
    <section className="w-full p-8 py-16 bg-white">
      <h2 className="text-dark-primary text-[3xl] md:text-[43px] font-medium text-center mb-12">Quick Links</h2>
      <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {links.map((link, idx) => (
          <div key={link.title} className="bg-white flex flex-col items-center h-full relative">
            <div className="relative w-full h-[200px] z-0">
              <Image src={link.img} alt={link.title} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col justify-between p-6 absolute bg-white top-[80%] w-[90%] h-[180px] mx-auto shadow-md">
              <div>
                <h3 className={`text-dark-secondary text-lg font-bold mb-2 ${idx === 0 ? 'underline underline-offset-4' : ''}`}>{link.title}</h3>
                <p className="text-dark-primary-body text-[1rem] mb-6">{link.desc}</p>
              </div>
              <a href={link.href} className="self-end bg-green-700 hover:bg-green-800 text-white w-8 max-h-8 flex items-center justify-center transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 