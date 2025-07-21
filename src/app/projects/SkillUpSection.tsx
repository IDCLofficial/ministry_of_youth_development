import Image from "next/image";
import { AppLink } from "../components/AppLink";

export default function SkillUpSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center gap-22 px-6 md:px-20">
      <div className="flex-1 flex flex-col gap-6 w-[60%]">
        <h2 className="text-3xl md:text-[43px] font-medium">SkillUp Imo: Equipping 100,000 Youths with Digital Skills</h2>
        <p className="text-dark-primary-body text-[1rem] leading-relaxed">
          A flagship digital literacy initiative designed to empower Imo State youths by providing hands-on training in IT, 
          software development, cloud computing, cybersecurity, and more. Through strategic partnerships 
          with global tech leaders, SkillUp Imo is accelerating the development of a new generation of 
          digital professionals.
        </p>
        <AppLink href="/projects/skillup" variant="primary" label="Meet Our Talents" className="w-max" />
        <div className="w-max flex gap-10 justify-between mt-4 divide-y md:divide-y-0 md:divide-x divide-gray-500">
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-[18px] font-bold">100,000</span>
            <span className="text-gray-500 text-sm">youths targeted</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-[18px] font-bold">50+</span>
            <span className="text-gray-500 text-sm">training centers nationwide</span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="text-[18px] font-bold">200+</span>
            <span className="text-gray-500 text-sm">certified instructors</span>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <Image src="/images/cisco.png" alt="Cisco" width={70} height={30} />
          <Image src="/images/huawei.png" alt="Huawei" width={70} height={30} />
          <Image src="/images/microsoft.png" alt="Microsoft" width={70} height={30} />
        </div>
      </div>
      <div className="">
        <div className="w-full max-w-md relative rounded-lg overflow-hidden">
          <Image src="/images/skillUp.png" alt="SkillUp Imo" width={500} height={500} className="object-cover height-[400px]" />
        </div>
      </div>
    </section>
  );
} 