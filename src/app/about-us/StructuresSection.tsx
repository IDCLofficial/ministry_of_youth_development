import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
        row1: [
            {
                title: "Youth Officers Unit",
                description: "Deploys and supervises Youth Development Officers (YDOs) across all 27 LGAs, serving as grassroots liaisons for ministry programs, gathering feedback, and promoting youth participation at the community level."
            },
            {
                title: "Talent Hunt & Sports Development Unit",
                description: "Organizes and manages state-wide talent scouting programs (e.g., football tournaments, chess competitions, marathons) in collaboration with the Imo Sports Commission, discovering, training, and promoting young talents."
            },
            {
                title: "Civic Awareness & Reorientation Unit",
                description: "Promotes civic education and reorientation among youth, fostering responsible citizenship and community engagement through targeted programs and outreach."
            },
        ],
    }

    return (
        <section className="w-full bg-[#1D1D1D] py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-sm md:text-[1rem] mb-8 md:mb-16 w-full md:w-[60%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo's vision of youth empowerment, talent development, and civic engagement.
                </p>
                {/* Main Image */}
                <div className="relative w-full h-[180px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 md:mb-20">
                    <Image
                        src={imgSrc}
                        alt="Ministry Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Department Cards Grid */}
                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                        {departments.row1.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* <div className="flex flex-col md:flex-row w-full gap-2">
                        {departments.row2.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-base md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-sm md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
}; 