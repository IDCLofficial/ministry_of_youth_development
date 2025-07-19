import Image from "next/image";

interface AboutSectionProps {
    aboutText: string;
    imgSrc: string;
    altText: string;
}

export const AboutSection = ({ aboutText, imgSrc, altText }: AboutSectionProps) => {
    return (
        <section className="w-full py-20">
            <div className="mx-auto px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Left Section - Text Content */}
                    <div className=" w-[50%] p-10 rounded-xl">
                        <h2 className="text-[43px] font-medium text-black mb-8">
                            About the Ministry
                        </h2>
                        <p className="text-dark-primary-body text-[1rem] leading-8">
                            {aboutText}
                        </p>
                    </div>
                    
                    {/* Right Section - Image */}
                    <div className="relative h-[500px] w-[30%] bg-[#F1F1F1]">
                        
                            <Image 
                                src={imgSrc}
                                alt={altText}                       
                                className="object-cover absolute -left-[50%] top-[50px]"
                                width={400}
                                height={400}
                                priority
                            />
                      
                    </div>
                </div>
            </div>
        </section>
    );
}; 