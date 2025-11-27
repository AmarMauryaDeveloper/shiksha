// src/components/CollegeCard.jsx
import React from "react";
import { MdLocationOn } from "react-icons/md";

export default function CollegeCard({ logo, name, location, learnMore, bottomText }) {
  return (
    <div className="w-[400px] bg-white shadow-md rounded-md overflow-hidden border">
      {/* Main Content */}
      <div className="flex items-center gap-4 p-4">
        <img src={logo} alt={name} className="w-16 h-16 object-contain" />

        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-bold text-[#003D92]">{name}</h3>

          <div className="flex items-center text-gray-600 text-sm gap-1">
            <MdLocationOn className="text-gray-500" size={18} />
            {location}
          </div>
        </div>

        <a href={learnMore} className="ml-auto text-sm font-semibold text-gray-700 underline hover:text-blue-600">
          Learn More
        </a>
      </div>

      {/* Bottom Blue Strip */}
      <div className="bg-[#002766] text-white text-sm font-medium px-3 py-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {bottomText}
      </div>
    </div>
  );
}
