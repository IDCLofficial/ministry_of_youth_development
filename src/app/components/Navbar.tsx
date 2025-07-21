import { AppLink } from "./AppLink"
import NavLinks from "./NavLinks"

export const Navbar = () => {
    return(
        <header className="flex justify-between items-center px-[3rem] py-[1.5rem] fixed top-0 left-0 right-0 z-50 border-b border-b-[0.1px] border-[#FFFFFF]
        bg-[#232c39]/50 backdrop-blur-sm">
            <div>
                {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
                <h1 className="text-white text-[1.5rem] font-bold">Logo</h1>
            </div>
            <div>
                <NavLinks />
            </div>
        </header>
    )
}