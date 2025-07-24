export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Empower Youth Through Skills and Leadership Training",
            description: "Provide platforms and programs for Imo youth to develop leadership, entrepreneurial, and life skills for personal and professional growth."
        },
        {
            title: "Promote Grassroots Sports Development",
            description: "Identify and nurture sporting talent at the community level through regular competitions, talent hunts, and school sports programs."
        },
        {
            title: "Enhance Access to Youth Empowerment Opportunities",
            description: "Facilitate scholarships, grants, and mentorship programs to support youth education, innovation, and career advancement."
        },
        // {
        //     title: "Foster Social Inclusion and Civic Engagement",
        //     description: "Encourage youth participation in civic activities, volunteerism, and community service to build responsible and engaged citizens."
        // },
        {
            title: "Develop and Maintain Sports Infrastructure",
            description: "Invest in the construction, renovation, and maintenance of modern sports facilities accessible to all communities."
        },
        {
            title: "Promote Healthy Lifestyles and Wellness",
            description: "Organize fitness campaigns, marathons, and health education programs to encourage physical activity and well-being among youth."
        },
        {
            title: "Strengthen Partnerships for Youth and Sports Development",
            description: "Collaborate with local, national, and international organizations to expand opportunities and resources for youth and sports initiatives."
        }
    ];

    const coreValues = [
        "Enlightenment",
        "Engagement",
        "Empowerment",
        "Inclusiveness",
        "Integrity",
        "Excellence",
        "Social Responsibility"
    ];

    return (
        <section className="w-full bg-white py-10 md:py-20">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                {/* IMDEEG's Objectives */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-xl md:text-[43px] font-medium text-center mb-8 md:mb-12">
                        MSYD objectives
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
                                <span className="font-medium text-base md:text-lg text-dark-primary-body">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 