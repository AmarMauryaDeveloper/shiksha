import React from "react";
import { cardData } from "../../data/data";
import CustomCard from "../../ui/card/CustomCard";

export default function CardsSection() {
  return (
    <section className="w-full pb-12 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Divider Line */}
        <div className="w-full flex justify-center mb-12">
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Responsive Cards Grid */}
        <div className="
          grid grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-x-5 
          gap-y-10
        ">
          {cardData.map((item) => (
            <CustomCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
