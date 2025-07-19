import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
        row1 : [
            {
                title: "IT Strategy & Partnerships",
                description: "Aligning technology goals with business growth through strategic collaboration."
            },
            {
                title: "Knowledge Management",
                description: "Capturing, organizing, and sharing information to drive smarter decisions."
            },
            {
                title: "E-Government",
                description: "Digitizing government services for improved accessibility and efficiency."
            },
        ],
        row2: [
            {
                title: "IT Infrastructure & Data Centers",
                description: "Building robust, scalable systems for reliable IT operations."
            },
            {
                title: "Cyber Security & Data Protection",
                description: "Safeguarding digital assets and ensuring data privacy."
            },
        ]
    }

    return (
        <section className="w-full bg-[#1D1D1D] py-20">
            <div className="max-w-7xl mx-auto px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-[1rem] mb-16 w-[40%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo's digital agenda
                </p>

                {/* Main Image */}
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
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
                    <div className="flex flex-row gap-2 w-full justify-between">
                        {departments.row1.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                                <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row w-full gap-2">
                        {departments.row2.map((department, index) => (
                            <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                                <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                                    {department?.title}
                                </h3>
                                <p className="text-dark-secondary-body text-[16px]">
                                    {department?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 