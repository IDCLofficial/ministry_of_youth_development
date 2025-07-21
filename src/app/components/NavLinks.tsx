"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Projects", href: "/projects" },
    { label: "News", href: "/news" },
    { label: "Units", href: "/units" },
    { label: "Events", href: "/events" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact-us" }
];

const NavLinks = () => {
    const pathname = usePathname();
    console.log(pathname.split("/")[1]);
    return (
        <nav>
            <ul className="flex items-center gap-6 list-none p-0 m-0">                
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <Link href={link.href} className={`hover:text-tertiary-green transition-colors duration-200 ${pathname.split("/")[1] === link.href.split("/")[1] ? "text-tertiary-green" : "text-white "}`}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks; 