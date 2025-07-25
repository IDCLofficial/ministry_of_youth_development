import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = [
        {
            title: "Administration & Supplies",
            description: "Deploys and supervises Youth Development Officers (YDOs) across all 27 LGAs, serving as grassroots liaisons for ministry programs, gathering feedback, and promoting youth participation at the community level."
        },
        {
            title: "Finance & Accounts",
            description: "Organizes and manages state-wide talent scouting programs (e.g., football tournaments, chess competitions, marathons) in collaboration with the Imo Sports Commission, discovering, training, and promoting young talents."
        },
        {
            title: "Planning, Research & Statistics",
            description: "Promotes civic education and reorientation among youth, fostering responsible citizenship and community engagement through targeted programs and outreach."
        },
        {
            title: "Public Affairs / Media & Publicity",
            description:"Communications, events coverage, press liaison"
        },
        {
            title:"Youth Mobilization & Outreach",
            description:"Grassroots engagement, local government liaisons, volunteer coordination"
        }
        
    ]
    

    return (
        <section className="w-full bg-[#1D1D1D] py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-2xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-base md:text-[1rem] mb-8 md:mb-16 w-full md:w-[60%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo&apos;s vision of youth empowerment, talent development, and civic engagement.
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
                        {departments.slice(0,3).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-xl md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-base md:text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                        {departments.slice(3,5).map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-4 md:p-8 shadow-md border border-gray-200 mb-2 md:mb-0">
                                <h3 className="font-bold text-xl md:text-[22px] text-dark-primary mb-2 md:mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-base md:text-[16px]">
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