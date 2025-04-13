"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


import ThemeToggle from "@/app/theme/Theme-toggle";

function Navbar() {

  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <nav className="flex justify-between items-center px-4 h-14 bg-slate-700 ">
      {/* Logo */}
      <div className="flex text-lg font-bold">
        <Image
          src="/bite.webp" // put your image in public folder
          alt="Avatar"
          width={30}
          height={30}
          className="rounded-full"
        />{" "}
        <span className="text-white">Links</span>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 items-center">
        
        <li>
          <button>
        <Link
          href={isHome ? "/shorten" : "/"}
          className="bg-blue-400 text-black  font-semibold px-4 py-1.5 rounded-md shadow-md transition duration-300"
        >
          {isHome ? "Try Now" : "Home"}
        </Link>
        </button>
        </li>
       
        <li>
        <button className="bg-blue-400 text-black  font-semibold px-4 py-1.5 rounded-md shadow-md transition duration-300"><Link
          href={"/login"}
          
        >Login </Link></button>
        </li>
      

        {/* Optional: Avatar or Icon */}
        <li>
          <Link href="https://github.com/Ayan1024" target="_blank" title="Github">
            <Image
              src="/github-mark.svg" // put your image in public folder
              alt="Avatar"
              width={30}
              height={30}
              className="rounded-full"
            />
          </Link>
        </li>

        {/* Theme Toggle */}
        <li>
        <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
