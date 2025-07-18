import { Title } from "./Title";

export const Hero = () => {
    return(
        <div className="relative h-[85vh]  px-[3rem] flex flex-col justify-center bg-[url('/images/heroImage.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-0"></div>
            <div className="relative z-10 py-10">
                <div className="w-[60%] flex flex-col gap-4">
                    <Title label="Imo State Ministry of Finance"/>
                    <h1 className="text-[60px] font-bold text-white">Transparent Governance, Accountable Finance, Sustainable Growth.</h1>
                    <p className="text-[1rem] font-light leading-[1.5] text-white">
                        The Imo State Ministry of Finance is committed to managing public funds with transparency, efficiency, 
                        and accountability. We drive fiscal policy, budget planning, 
                        and revenue generation to support sustainable development and economic 
                        growth across the state.
                    </p>
                </div>
            </div>
        </div>
    )
}