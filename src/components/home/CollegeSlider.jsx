import React from "react";
import CollegeCard from "./CollegeCard";
import { collegeData } from "../../data/data";

export default function CollegeSlider() {
  return (
    <section className="w-full bg-gray-100 py-2">
      <div className="container mx-auto px-4">

        {/* Horizontal Slider */}
        <div
          className="
            flex gap-4 
            overflow-x-auto 
            no-scrollbar 
            pb-3 
            scroll-smooth
          "
        >
          {collegeData.map((item) => (
            <CollegeCard
              key={item.id}
              logo={item.logo}
              name={item.name}
              location={item.location}
              learnMore={item.learnMore}
              bottomText={item.bottomText}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
