import React, { useState } from "react";
import Image from "next/image";
import category from "@/data/category";

const Hero = ({userInput}:any) => {
  const [searchInput,setSerchInput]=useState<string>();
  return (
    <section className="relative w-full h-[65vh] overflow-hidden rounded-lg shadow-lg opacity-80">
      {/* Background Image */}
      <Image
        src="/display1.png"
        alt="Hero Background"
      
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h2 className="text-5xl md:text-6xl text-red-500 font-bold tracking-widest drop-shadow-lg">
          LocaLink
        </h2>
        <p className="mt-2 text-2xl md:text-3xl font-light drop-shadow-sm">
          Discover your amazing city
        </p>

        {/* Search Bar */}
        <div className="mt-6 gap-4 flex items-center w-full max-w-md ">
          <input
            onChange={(e) => setSerchInput(e.target.value)}
            type="text"
            placeholder="Search..."
            className="flex-1 border border-gray-300 rounded-md py-2 px-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-600 transition"
          />
          <button onClick={()=>userInput(searchInput)} className="bg-red-600 hover:bg-red-700 text-white rounded-md  px-6 py-2 transition"  >
            Search
          </button>
        </div>

        {/* Categories */}
        <div className="mt-8 text-center">
          <h4 className="text-lg mb-4">Or Browse </h4>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
