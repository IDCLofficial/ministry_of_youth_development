import Image from "next/image";
import { AppLink } from "./AppLink";

interface AboutCommisionerProps {
    imgSrc: string;
    title: string;
}

export default function AboutCommisioner({imgSrc, title}: AboutCommisionerProps) {
  return (
    <section className="w-full bg-[#f3f8fa] py-12 md:py-20 flex justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-18 w-full px-4 md:px-[3rem]">
            {/* Left: Commissioner Image */}
            <div className="bg-white rounded-xl shadow-lg flex-shrink-0 w-full md:w-auto flex justify-center">
                <div className="relative w-full h-[240px] md:w-[300px] md:h-[400px] lg:w-[500px] lg:h-[450px]">
                    <Image
                    src={imgSrc}
                    alt="Commissioner"
                    fill
                    className="object-cover object-center rounded-xl"
                    sizes="(max-width: 768px) 220px, 320px"
                    />
                </div>
            </div>
            {/* Right: Text Content */}
            <div className="flex-1 w-full md:w-auto mt-6 md:mt-0">
                <h2 className="text-xl md:text-2xl lg:text-[43px] font-bold text-dark-primary mb-4">{title}</h2>
                <p className="text-dark-primary-body text-base mb-4">
                    Dr. (Rt. Hon.) C.C. Osuala is a distinguished technocrat and scholar with a remarkable blend of academic excellence, international experience, and public service. With three doctorate degrees in General Engineering, 
                    Engineering Sciences, and Management from top U.S. universities, as well as a Bachelor’s degree in Law, Dr. Osuala brings a unique perspective to governance and economic planning.
                </p>
                <p className="text-dark-primary-body text-base mb-6 text-justify">
                    His vision for the Ministry of Budget, Economic Planning & Statistics is rooted in transparency, inclusivity, and innovation. Dr. Osuala is committed to making Imo State’s budgeting process open and accessible, exemplified by his introduction 
                    of the state’s first Citizens’ Budget—also translated into Igbo to ensure no one is left behind. He believes in participatory governance, regularly engaging all 655 autonomous communities, civil society, and youth groups to shape budget priorities that reflect the true needs of Imo people.
                    Under his leadership, the ministry has achieved unprecedented budget transparency, earning international recognition and securing significant World Bank grants that have fueled capital projects and improved revenue generation.
                    Dr. Osuala’s goal is to institutionalize citizen-driven budgeting, foster sustainable economic growth, and ensure that Imo State’s development is both inclusive and measurable. His unwavering dedication continues to position the ministry as a model for fiscal responsibility and community empowerment in Nigeria.
                </p>
            </div>
        </div>
    </section>
  );
} 