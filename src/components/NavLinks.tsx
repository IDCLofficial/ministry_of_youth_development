import Link from "next/link";
import React from "react";

const NavLinks = () => {
    return (
        <nav>
            <ul className="flex gap-6 list-none p-0 m-0">                
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/units">Units</Link></li>
                <li><Link href="/events">Events</Link></li>
                <li><Link href="/media">Media</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default NavLinks; 