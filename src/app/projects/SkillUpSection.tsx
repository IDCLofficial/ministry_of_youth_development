import Image from "next/image";

export default function SkillUpSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center gap-10 px-6 md:px-20">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">SkillUp Imo: Equipping 100,000 Youths with Digital Skills</h2>
        <p className="text-gray-700">A flagship digital literacy initiative designed to empower Imo State youths by providing hands-on training in IT, software development, cloud computing, cybersecurity, and more. Through strategic partnerships with global tech leaders, SkillUp Imo is accelerating the development of a new generation of digital professionals.</p>
        <button className="bg-green-600 text-white px-6 py-2 rounded w-max font-semibold">Meet Our Talents</button>
        <div className="flex gap-10 mt-4">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">100,000</span>
            <span className="text-gray-500 text-sm">youths targeted</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">50+</span>
            <span className="text-gray-500 text-sm">training centers nationwide</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold">200+</span>
            <span className="text-gray-500 text-sm">certified instructors</span>
          </div>
        </div>
        <div className="flex gap-6 mt-6">
          <Image src="/images/cisco.png" alt="Cisco" width={70} height={30} />
          <Image src="/images/huawei.png" alt="Huawei" width={70} height={30} />
          <Image src="/images/microsoft.png" alt="Microsoft" width={70} height={30} />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/homeImage2.png" alt="SkillUp Imo" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 