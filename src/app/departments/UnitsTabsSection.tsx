"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Youth Development",
    image: "/images/youthDevDept.jpg",
    description: "Program design, skills acquisition, talent hunts, youth empowerment coordination",
  },
  {
    name: "Administration & Supplies",
    image: "/images/admin.jpeg",
    description: "HR, logistics, procurement, correspondence",
  },
  {
    name: "Finance & Accounts",
    image: "/images/finance.jpg",
    description: "Budgeting, financial controls, audits",
  },
  {
    name: "Planning, Research & Statistics",
    image: "/images/planning.jpeg",
    description: "Monitoring, evaluation, data collection, policy planning",
  },
  {
    name: "Public Affairs / Media & Publicity",
    image: "/images/publicrel.jpeg",
    description: "Communications, events coverage, press liaison",
  },
  {
    name: "Youth Mobilization & Outreach",
    image: "/images/youthMob.jpeg",
    description: "Grassroots engagement, local government liaisons, volunteer coordination",
  },
];

export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full mx-auto flex flex-col md:flex-row gap-8 py-16 px-4 md:px-8">
      {/* Tabs */}
      <div className="w-full md:w-2/6 border-r pr-4">
        <ul className="space-y-2 flex gap-2 md:flex-col md:gap-2 overflow-x-auto">
          {departments.map((dept, idx) => (
            <li key={dept.name} className="flex-1">
              <button
                className={`w-full text-left px-4 py-2 rounded border text-nowrap ${activeIdx === idx ? 'bg-green-600 text-white' : 'bg-white text-black border-gray-300 md:border-transparent'} transition`}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1 px-4 md:px-10">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">{active.name}</h2>
        <div className="w-full mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-fit h-[400px]" />
        </div>
        <p className="text-dark-primary-body text-base md:text-[1rem] text-dark-primary-body">{active.description}</p>
      </div>
    </section>
  );
} 