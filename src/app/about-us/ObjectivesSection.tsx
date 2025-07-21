export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Promote Digital Literacy",
            description: "Train citizens with the digital skills needed in today's economy."
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
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-16">
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        IMDEEG&apos;s objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 