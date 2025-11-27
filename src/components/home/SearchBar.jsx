import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-md overflow-hidden flex mx-auto shadow-md">
      <input
        type="text"
        placeholder="Search Colleges, Courses, Exams, Questions and Articles"
        className="flex-grow px-4 py-3 outline-none text-black"
      />
      <button className="px-6 py-3 bg-orange-500 text-white font-semibold hover:bg-orange-600">
        Search
      </button>
    </div>
  );
}
