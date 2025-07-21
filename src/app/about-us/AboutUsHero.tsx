import { Title } from "../components/Title";

interface AboutUsHeroProps {
    ministryName: string;
}

export const AboutUsHero = ({ ministryName }: AboutUsHeroProps) => {
    return (
        <div className="relative h-[400px] px-[3rem] py-10 flex flex-col justify-center bg-gradient-to-r from-green-900/20 via-black to-black">
            <div className="absolute inset-0 bg-[url('/images/gradient.png')] bg-cover bg-center z-0"></div>
            
            {/* Navigation Highlight */}
            <div className="relative z-10 flex justify-center">
                <Title label="About Us" />
            </div>
            
            <div className="relative z-10 flex justify-center mt-4">
                <div className="w-[60%] flex flex-col items-center text-center">
                    <h1 className="text-[3rem] font-bold text-white leading-tight">
                        Our Story - {ministryName}
                    </h1>
                </div>
            </div>
        </div>
    );
}; 