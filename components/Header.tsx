"use client";
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-200 dark:bg-[#0f0f0f]/70 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <Image src="/Logos.png" alt="Logo" width={42} height={42} />
          <h1 className="text-2xl font-bold tracking-widest text-red-500 hover:text-red-600 transition">
            LocaLink
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-6 text-lg font-medium text-gray-800 dark:text-gray-200">
            {["Home", "About", "Contact"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer group transition-all"
              >
                <span className="group-hover:text-red-500 transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
