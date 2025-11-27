import React, { useState } from "react";
import logo from "../../assets/logo1.png";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-[#007075] text-white w-full shadow-md">
      {/* Top Section */}
      <div className="container mx-auto flex items-center justify-between px-4 py-2">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Shiksha Logo"
            className="w-40"
          />
        </div>

        {/* Search - Hidden in mobile */}
        <div className="hidden md:flex md:w-[60%] bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Colleges, Courses, Exams, QnA, & Articles"
            className="flex-grow px-4 py-2 text-black outline-none"
          />
          <button className="bg-orange-500 px-6 py-2 font-semibold hover:bg-orange-600">
            Search
          </button>
        </div>

        {/* Right buttons + mobile search icon */}
        <div className="flex items-center space-x-4 text-sm font-semibold">
          {/* Mobile Search Icon */}
          {/* <button className="md:hidden text-xl">🔍</button> */}

          {/* Auth buttons */}
          <button className="hover:text-gray-300">Login</button>
          <button className="hover:text-gray-300">Sign Up</button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="md:hidden text-2xl ml-2"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-2">
        <div className="w-full bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search Colleges, Courses, Exams, QnA, & Articles"
            className="w-full px-4 py-2 text-black outline-none"
          />
        </div>
      </div>

      {/* Desktop Menus */}
      <div className="hidden md:flex justify-center space-x-3 py-1 bg-[#007075] text-[10px]">
        {[
          "MBA",
          "ENGINEERING",
          "MEDICAL",
          "DESIGN",
          "STUDY ABROAD",
          "COUNSELING",
          "SHIKSHA ONLINE"
        ].map((menu, i) => (
          <button key={i} className="hover:text-orange-300">
            {menu} ▼
          </button>
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {openMenu && (
        <div className="md:hidden bg-[#007075] px-4 py-3 space-y-2 text-sm">
          {[
            "MBA",
            "ENGINEERING",
            "MEDICAL",
            "DESIGN",
            "STUDY ABROAD",
            "COUNSELING",
            "SHIKSHA ONLINE"
          ].map((menu, i) => (
            <button
              key={i}
              className="block w-full text-left py-2 border-b border-white/20 hover:text-orange-300"
            >
              {menu} ▼
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
