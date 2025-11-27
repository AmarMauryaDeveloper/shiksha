import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import app from "../../assets/app.png"
export default function GetAppSection() {
  return (
    <section className="w-full bg-[#e7edff]">
      {/* Top Section */}
      <div className=" pt-14 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Get Shiksha App
            </h2>
            <p className="text-gray-700 mt-2 text-base md:text-lg">
              Download App to get Updates on Colleges & Exams
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-7">
              <button className="flex items-center gap-2 bg-[#4B0DBA] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
                <FaGooglePlay size={20} />
                Get on Play Store
              </button>
              <button className="flex items-center gap-2 bg-[#4B0DBA] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition">
                <FaApple size={20} />
                Get on App Store
              </button>
            </div>

            {/* Rating */}
            <p className="text-gray-600 mt-4 text-sm md:text-base">
              1M+ Downloads • 4.4 ★
            </p>
          </div>

          {/* Mobile Phone Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={app}
              alt="App Preview"
              className="w-[250px] md:w-[350px] lg:w-[420px] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Ask Question Section */}
      <div className="bg-[#222222] text-white py-10 px-6 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">
            Get our experts to answer your questions within 24 Hrs
          </h3>

          <div className="bg-white rounded-md flex items-center p-2 gap-3">
            <input
              type="text"
              placeholder="Write your questions here"
              className="flex-1 outline-none px-2 text-gray-800 text-sm h-12"
            />
            <button className="bg-[#f38224] hover:bg-[#e27519] transition text-white font-semibold px-6 py-3 rounded-md">
              Ask Question
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
