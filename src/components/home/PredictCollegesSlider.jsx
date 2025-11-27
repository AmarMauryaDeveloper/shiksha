import React, { useRef } from "react";
import design from "../../assets/design.jpg";
import be from "../../assets/be.jpg";
import low from "../../assets/law.jpg";

const data = [
  { title: "Medical", exams: "86 Exams", img: design },
  { title: "M. Tech", exams: "32 Exams", img: be },
  { title: "Design", exams: "10 Exams", img: design },
  { title: "Law", exams: "29 Exams", img: low },
  { title: "Hospitality", exams: "8 Exams", img: design },
  { title: "Science", exams: "40 Exams", img: design },
];

export default function PredictCollegesSlider() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-gray-50 relative">
      <div className="container mx-auto py-10 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-8">
          Predict Colleges based on exams you have taken
        </h2>

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            onClick={scrollLeft}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-xl shadow-lg hidden md:flex"
          >
            <span className="text-4xl text-gray-500">&#8249;</span>
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 scrollbar-hide scroll-smooth py-2"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer shrink-0"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-28 md:h-32 lg:h-36 object-cover rounded-t-xl"
                />
                <div className="text-center py-4">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.exams}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={scrollRight}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white p-4 rounded-xl shadow-lg hidden md:flex"
          >
            <span className="text-4xl text-gray-500">&#8250;</span>
          </button>

        </div>
      </div>
    </section>
  );
}
