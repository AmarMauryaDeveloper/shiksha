import React, { useState, useRef, useEffect } from "react";

export default function CategoryNavbar() {
  const tabs = ["MBA", "B.TECH", "MEDICAL", "DESIGN", "MORE"];
  const [activeTab, setActiveTab] = useState("MBA");
  const [underlineStyle, setUnderlineStyle] = useState({});
  const tabRefs = useRef([]);

  useEffect(() => {
    const index = tabs.indexOf(activeTab);

    if (tabRefs.current[index]) {
      const tab = tabRefs.current[index];

      setUnderlineStyle({
        width: tab.offsetWidth + "px",
        left: tab.offsetLeft + "px",
      });
    }
  }, [activeTab]);

  return (
    <section className="w-full">
      <div className="container mx-auto px-4">
        
        {/* TOP NAV */}
        <nav className="relative flex justify-center gap-6 sm:gap-10 md:gap-14 py-4 overflow-x-auto scrollbar-hide">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              ref={(el) => (tabRefs.current[i] = el)}
              onClick={() => setActiveTab(tab)}
              className={`text-base sm:text-lg font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === tab ? "text-[#207981]" : "text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* UNDERLINE */}
        <div className="relative h-1 mt-1">
          <div
            className="absolute h-1 bg-[#207981] rounded-full transition-all duration-300"
            style={underlineStyle}
          ></div>
        </div>
      </div>
    </section>
  );
}
