import React from "react";
import { courses } from "../../data/data";

export default function TrendingCourses() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Trending Courses
        </h2>

        {/* Courses List */}
        <div className="flex flex-wrap justify-center gap-1 md:gap-2">
          {courses.map((course, index) => (
            <button
              key={index}
              className="px-6 py-2 md:px-6 md:py-2 border border-red-500 
              text-red-600 text-sm md:text-[15px] font-medium rounded-full 
              whitespace-nowrap hover:bg-red-500 hover:text-white transition"
            >
              {course}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
