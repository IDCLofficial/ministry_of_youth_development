const stats = [
  {
    value: "+25,000",
    desc: "Youths Trained Under SkillUp Imo",
  },
  {
    value: "14",
    desc: "Digital Projects Launched in 3 Years",
  },
  {
    value: "4,000+",
    desc: "Devices Distributed to Students",
  },
  {
    value: "100%",
    desc: "Growth in e-Government Service Uptake",
  },
];

export default function Stats() {
  return (
    <section className="w-full bg-[#232323] p-8 py-20">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-gray-500">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex-1 flex flex-col items-center justify-center py-6 md:py-0">
            <span className="text-white text-3xl md:text-4xl font-bold mb-2">{stat.value}</span>
            <span className="text-gray-200 text-sm md:text-base text-center leading-tight">{stat.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 