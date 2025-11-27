import React from "react";

export default function NewsCard({ item }) {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 pb-3 w-full">

      {/* Mobile Image */}
      <img
        src={item.image}
        alt="news"
        className="w-full max-w-[100px] h-20 object-cover rounded-md md:hidden"
      />

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start gap-2">

          {item.badge && (
            <span className="text-red-600 bg-red-100 text-[10px] md:text-xs font-bold px-2 py-[2px] rounded-md flex-shrink-0 whitespace-nowrap">
              🔴 {item.badge}
            </span>
          )}

          <h2 className="text-[10px] md:text-[12px] font-semibold leading-tight line-clamp-2">
            {item.title}
          </h2>
        </div>

        <p className="text-gray-600 text-sm mt-1 md:mt-2 line-clamp-2 md:line-clamp-3">
          {item.desc}
        </p>

        {/* Author + Date */}
        <div className="flex flex-wrap items-center gap-2 text-gray-500 text-[11px] md:text-[12px] mt-2">
          <span className="whitespace-nowrap">{item.author}</span>
          <span>·</span>
          <span className="whitespace-nowrap">{item.date}</span>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] md:text-xs text-gray-500 mt-2">
          {item.comments && <span>💬 {item.comments}</span>}
          {item.shares && <span>🔁 {item.shares}</span>}
          {item.views && <span>👁 {item.views}</span>}
        </div>
      </div>

      {/* Desktop Image */}
      <img
        src={item.image}
        alt="news"
        className="hidden md:block w-28 h-24 lg:w-36 lg:h-28 object-cover rounded-md flex-shrink-0"
      />
    </div>
  );
}
