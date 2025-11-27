import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function CollegeCard({ logo, name, location, learnMore, bottomText }) {
  return (
    <div className="min-w-[350px] bg-white border  shadow-sm overflow-hidden">
      <div className="flex items-center gap-2 p-2">
        <img src={logo} alt={name} className="w-16 h-16 object-contain" />
        <div className="flex-1">
          <h3 className="font-bold text-[#0a3bb4] text-sm ">
            {name}
          </h3>

          <div className="flex items-center gap-1 text-gray-600 text-sm ">
            <FaMapMarkerAlt className="text-gray-600 text-xs" />
            <span className="capitalize">{location}</span>
          </div>
        </div>

        <a
          href={learnMore}
          className="text-gray-700 underline text-xs hover:text-[#0a3bb4]"
        >
          Learn More
        </a>
      </div>

      <div className="bg-[#002b6e] text-white text-xs p-2 text-center">
        {bottomText}
      </div>
    </div>
  );
}
