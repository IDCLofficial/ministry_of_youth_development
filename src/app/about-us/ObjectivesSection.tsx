export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Talent Discovery & Development",
            description: "Coordinating state-wide programs like multi-sport scouting, innovation competitions, and creative showcases."
        },
        {
            title: "Sports Writers Association of Nigeria (SWAN)",
            description: "A key publicity partner promoting the state’s youth initiatives and talent exposure."
        },
        {
            title: "Nigerian Army & DSS",
            description: "Collaborate on civic and peace-building activities, ensuring youth are channeled towards positive societal contribution."
        }
    ];

    const coreValues = [
        "Enlightenment",
        "Engagement",
        "Empowerment",
        "Integrity"  
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Strategic Objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <h3 className="font-medium text-xl md:text-[22px] mb-2 md:mb-3">
                                    {objective.title}
                                </h3>
                                <p className="text-dark-primary-body text-base md:text-[1rem]">
                                    {objective.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-2xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-6">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md border border-gray-200 text-center w-full">
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 