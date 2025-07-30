import ServiceCard from "./ServiceCard";

const services = [
  {
    imgSrc: "/images/youthWithSkills.png", // Replace with actual image paths
    title: "Youth Empowerment & Capacity Building",
    description:
      "Organizes skills acquisition, vocational training, and entrepreneurship bootcamps. Provides access to start-up kits, tools, or microgrants for trained youths. Key Program: SkillUpImo - training 300,000 youths in digital and tech skills.",
  },
  {
    imgSrc: "/images/talent.png",
    title: "Talent Identification and Nurturing",
    description:
      "Hosts talent hunts, creative showcases, sports events, and innovation competitions. Partners with organizations to expose youth in sports, ICT, music, and entertainment.",
  },
  {
    imgSrc: "/images/orientation.png",
    title: "Civic Reorientation & Leadership Training",
    description:
      "Conducts summits and peace-building campaigns like the Imo Youth Civic Reorientation Summit and Running for Peace Marathon. Trains youth leaders and peer educators.",
  },
  {
    imgSrc: "/images/advocacy.png",
    title: "Advocacy & Policy Engagement",
    description:
      "Promotes youth-inclusive policies and participation in governance at all levels.",
  },
  {
    imgSrc: "/images/financialSupport.png",
    title: "Youth Grants & Financial Support",
    description:
      "Coordinates empowerment grants (e.g., N250,000 each to 15,000 youth during Youth Day). Links youth to federal/state funding programs and donor support.",
  },
  {
    imgSrc: "/images/commemorative.png",
    title: "Organizing Commemorative Events",
    description:
      "Leads International Youth Day and Imo Youth Day celebrations. Launches new initiatives and awards outstanding youth performances.",
  }

];

export default function ServicesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
} 