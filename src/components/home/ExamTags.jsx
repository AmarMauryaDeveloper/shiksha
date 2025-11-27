import React from "react";

const exams = [
  "RRB Group D", "CUET", "JEE Main", "CMAT", "NEET", "CLAT", "NIFT Entrance Exam", 
  "JENPAS UG", "CSEET", "WBJEE JECA", "MAH B.Ed CET", "Ashoka Aptitude Test", 
  "JMI Entrance Exam", "SAT India", "CUET-PG", "CFA Exam", 
  "CUCET Chandigarh University", "SSAT", "RRB NTPC", "MHT CET", "CAT", 
  "NEET PG", "AIBE", "NID Entrance Exam", "RUHS", "CA Foundation", 
  "MAH MCA CET", "UP B.Ed JEE", "NCHMCT JEE", "MAH AAC CET",
];

export default function ExamTags() {
  return (
   <div className="relative bg-gray-50 ">
    <div className="container mx-auto">
     <section className= " w-full py-12 ">
      <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-8">
        Top Exams this month
      </h2>

      <div className="flex  flex-wrap gap-1 md:gap-2 justify-center px-4 md:px-24">
        {exams.map((exam, index) => (
          <button
            key={index}
            className="text-[#639] border border-[#639] rounded-full px-6 py-2 text-sm font-medium hover:bg-[#639] hover:text-white transition"
          >
            {exam}
          </button>
        ))}
      </div>
    </section></div>
   </div>
  );
}
