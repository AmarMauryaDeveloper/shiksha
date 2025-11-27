import React from "react";

export default function CustomCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6 space-y-3">
      <img src={image} alt={title} className="w-16 h-10 object-contain" />
      <h3 className="text-[#007b7f] font-bold text-md md:text-lg uppercase">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
