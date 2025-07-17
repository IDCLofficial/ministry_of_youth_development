import { AppLink } from "./AppLink"
import NavLinks from "./NavLinks"

export const Navbar = () => {
    return(
        <header className="flex justify-between items-center px-[3rem] py-[2rem] fixed top-0 left-0 right-0 z-50 border-b border-[#FFFFFF]">
            <div>
                {/* <Image src="/logo.png" alt="logo" width={100} height={100} /> */}
                <h1>Logo</h1>
            </div>
            <div>
                <NavLinks />
            </div>
        </header>
    )
}