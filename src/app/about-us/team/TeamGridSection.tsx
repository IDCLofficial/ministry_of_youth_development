import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
}

const TeamGridSection: React.FC<TeamGridSectionProps> = ({ members }) => {
  return (
    <section className="w-full py-16 px-4 bg-white mx-auto">
      <h2 className="text-3xl md:text-[43px] font-medium text-center mb-10 text-dark-primary">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {members.map((member, idx) => (
          <div key={idx} className="flex flex-col rounded-xl">
            <div className="w-full mb-4 relative">
              <Image src={member.imgSrc} alt={member.name} width={100} height={100} className="w-full h-[350px] object-fit" />
            </div>
            <h3 className="text-lg font-semibold text-[#232c39] mb-1">{member.name}</h3>
            <span className="text-green-600 text-sm font-medium">{member.position}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGridSection; 