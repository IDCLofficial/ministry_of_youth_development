import Image from "next/image";

export default function DigitalAgendaSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center gap-10 px-6 md:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl font-bold">Digital Imo Agenda: Building a Connected State</h2>
        <p className="text-gray-700">A comprehensive plan focused on upgrading Imo State’s digital infrastructure, expanding broadband access, and improving e-government services to ensure seamless connectivity and digital inclusion.</p>
        <div className="mb-4">
          <span className="font-semibold">Initiatives:</span>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Digital Infrastructure Improvement: Expansion of fiber-optic networks and 4G/5G rollout.</li>
            <li>Enhanced E-Government Services: Digitization of public service portals for easier citizen access.</li>
            <li>Community Wi-Fi Projects: Establishing free Wi-Fi zones in public spaces.</li>
          </ul>
        </div>
        <div className="flex gap-10 mt-6">
          <div className="flex flex-col items-center">
            <span className="font-bold">Lorem ipsum</span>
            <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet</span>
            <span className="font-semibold mt-2">Sponsor</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">Lorem ipsum</span>
            <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet</span>
            <span className="font-semibold mt-2">Sponsor</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold">Lorem ipsum</span>
            <span className="text-xs text-gray-500">Lorem ipsum dolor sit amet</span>
            <span className="font-semibold mt-2">Sponsor</span>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/building.png" alt="Digital Agenda" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 