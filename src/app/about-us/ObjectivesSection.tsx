export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Promote Digital Literacy",
            description: "Train citizens with the digital skills needed in today&apos;s economy."
        },
        {
            title: "Enhance E-Governance",
            description: "Digitize public services for greater transparency and efficiency."
        },
        {
            title: "Foster Innovation & Entrepreneurship",
            description: "Support startups and tech-driven ventures through policy and infrastructure."
        }
    ];

    const coreValues = [
        "Teamwork",
        "Innovation", 
        "Integrity",
        "Professionalism",
        "Excellency",
        "Commitment"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        IMDEEG&apos;s objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-lg md:text-[22px] mb-2 md:mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-sm md:text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-bold text-base md:text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 