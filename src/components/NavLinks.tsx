import Link from "next/link";
import React from "react";

const NavLinks = () => {
    return (
        <nav>
            <ul className="flex items-center gap-6 list-none p-0 m-0">                
                <li><Link href="/" className="text-white">Home</Link></li>
                <li><Link href="/about-us" className="text-white">About Us</Link></li>
                <li><Link href="/projects" className="text-white">Projects</Link></li>
                <li><Link href="/news" className="text-white">News</Link></li>
                <li><Link href="/units" className="text-white">Units</Link></li>
                <li><Link href="/events" className="text-white">Events</Link></li>
                <li><Link href="/media" className="text-white">Media</Link></li>
                <li><Link href="/contact-us" className="text-white">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default NavLinks; 