import React from "react";
import SearchBar from "./SearchBar";
import paur from "../../assets/paur.jpg"
export default function Hero() {
  return (
    <section
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${paur})` }}
    >
      <div className="absolute w-full h-full"></div>

      {/* Content */}
      <div className="relative text-center text-white  bg-black/40 p-3 rounded-xl">
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Find Colleges, Courses & Exams that are Best for You
        </h2>

        <p className="text-sm md:text-base mb-6 font-medium">
          65,000+ Colleges • 4,70,000+ Courses • 6,75,000+ Reviews • 1,150+ Exams
        </p>

        <SearchBar />
      </div>
    </section>
  );
}
