import Link from "next/link";
import React from "react";

const NavLinks = () => {
    return (
        <nav>
            <ul className="flex items-center gap-6 list-none p-0 m-0">                
                <li><Link href="/" className="text-white hover:text-tertiary-green transition-colors duration-200">Home</Link></li>
                <li><Link href="/about-us" className="text-white hover:text-tertiary-green transition-colors duration-200">About Us</Link></li>
                <li><Link href="/projects" className="text-white hover:text-tertiary-green transition-colors duration-200">Projects</Link></li>
                <li><Link href="/news" className="text-white hover:text-tertiary-green transition-colors duration-200">News</Link></li>
                <li><Link href="/units" className="text-white hover:text-tertiary-green transition-colors duration-200">Units</Link></li>
                <li><Link href="/events" className="text-white hover:text-tertiary-green transition-colors duration-200">Events</Link></li>
                <li><Link href="/media" className="text-white hover:text-tertiary-green transition-colors duration-200">Media</Link></li>
                <li><Link href="/contact-us" className="text-white hover:text-tertiary-green transition-colors duration-200">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default NavLinks; 