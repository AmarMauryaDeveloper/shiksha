import React from "react";
import { newsData } from "../data/data";
import NewsCard from "../components/home/NewsCard";

export default function LatestNews() {
  return (
    <section className="w-full py-12 bg-[#f7f8f9]">
      <div className="container mx-auto px-4 ">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Latest News & Articles
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {newsData.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="px-6 py-3 rounded-md border border-[#207981] text-[#207981] font-semibold hover:bg-[#207981] hover:text-white transition">
            View All Updates →
          </button>
        </div>

      </div>
    </section>
  );
}
