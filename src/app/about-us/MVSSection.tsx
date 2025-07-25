import { MVSCard } from "./MVSCard"

const mvs = [
    {
        title: "Our Mission",
        description: "To empower Imo State’s youth by creating platforms that discover, develop, and showcase their talents, ensuring these young individuals contribute meaningfully to the state and economy."
    },
    {
        title: "Our Vision",
        description: "To position Imo State as a hub for youth excellence by aligning grassroots talent development with global opportunities."
    }
]   

export const MVSSection = () => {
    return(
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 md:p-8 py-20 justify-center items-center w-full bg-[#F1F1F1]">
            {mvs.map((mvs, index) => (
                <MVSCard key={index} title={mvs.title} description={mvs.description} />
            ))}
        </div>
    )
}