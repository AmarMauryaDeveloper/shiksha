import React from "react";

const boards = [
  "Maharashtra HSC", "Maharashtra SSC", "Karnataka 2nd PUC", "UP 12th", "SEBA",
  "GSEB HSC", "BSEB 12th", "CBSE 12th", "RBSE 12th", "Karnataka SSLC",
];

const universities = [
  "Parul University", "Chandigarh University (CU)", "IIT Bombay",
  "Amity University Noida UP", "Christ University Bangalore India", "BITS Pilani",
  "Lovely Professional University", "Delhi University", "VIT Vellore",
  "Banaras Hindu University", "DTU", "IIT Madras", "IIT Delhi",
  "SRM Institute of Science and Technology", "Jadavpur University", "MIT-WPU, Pune",
  "IIM Ahmedabad", "Jamia Millia Islamia", "Jain Bangalore",
  "Mumbai University", "NIT Trichy", "JNU", "Galgotias University Greater Noida",
  "UIM, Karnavati University", "NMIMS Mumbai", "IIT Kharagpur",
];

export default function BoardsAndUniversities() {
  return (
    <section className="w-full bg-[#f7f8f9] py-14">
      <div className="container mx-auto px-4 md:px-12">

        {/* Top Boards */}
        <h2 className="text-xl md:text-2xl font-bold  mb-10">
          Top Boards in India
        </h2>

        <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-20">
          {boards.map((item, index) => (
            <span
              key={index}
              className="px-6 py-2 text-gray-700 border-[1.5px] border-gray-300 rounded-full text-sm md:text-base hover:shadow-md transition"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Trending Colleges & Universities */}
        <h2 className="text-xl md:text-2xl font-bold  mb-10">
          Trending Colleges & Universities
        </h2>

        <div className="flex flex-wrap justify-center gap-1 md:gap-2">
          {universities.map((item, index) => (
            <span
              key={index}
              className="px-6 py-2 text-[#1976ea] border-[1px] border-[#1976ea] rounded-full text-sm  hover:bg-[#1976ea] hover:text-white transition"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
