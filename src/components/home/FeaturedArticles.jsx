import React from "react";
import { FaComment, FaShareAlt, FaEye } from "react-icons/fa";
import { articles } from "../../data/data";

export default function FeaturedArticles() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-10">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Featured Articles
        </h2>

        {/* Articles List */}
        <div className="flex flex-col gap-10">
          {articles.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-between gap-4 md:gap-6"
            >
              {/* Left Text Section */}
              <div className="flex-1">

                {item.live && (
                  <span className="text-red-600 bg-red-100 text-xs font-bold px-2 py-1 rounded-md mr-2">
                    🔴 LIVE
                  </span>
                )}

                <h3 className="mt-1 font-bold text-lg md:text-xl leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm md:text-[15px] mt-2">
                  {item.desc}
                </p>

                {/* Author */}
                <div className="mt-3 text-sm text-gray-600 flex items-center gap-1">
                  <span className="font-medium text-black">{item.author}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                {/* Stats */}
                {(item.views || item.comments || item.shares) && (
                  <div className="flex flex-wrap gap-4 items-center text-gray-600 text-sm mt-3">
                    {item.views !== 0 && (
                      <span className="flex items-center gap-1">
                        <FaEye size={14} /> {item.views} Views
                      </span>
                    )}
                    {item.comments !== 0 && (
                      <span className="flex items-center gap-1">
                        <FaComment size={14} /> {item.comments} Comments
                      </span>
                    )}
                    {item.shares !== 0 && (
                      <span className="flex items-center gap-1">
                        <FaShareAlt size={14} /> {item.shares} Shares
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Right Image */}
              <div className="w-full md:w-auto flex justify-start md:justify-end">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-[200px] md:w-[140px] h-[120px] md:h-[100px] rounded-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md text-blue-600 font-semibold border border-blue-400 hover:bg-blue-50 transition">
            View All Articles →
          </button>
        </div>

      </div>
    </section>
  );
}
