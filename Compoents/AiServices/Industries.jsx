"use client";

import { useState } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function IndustriesWeKnow({ data }) {
  // Extract section data
  const section = data?.industries || {};
  const itemsData = section.items || [];

  const industries = itemsData.map(item => ({
    id: item.id,
    title: item.title,
    heading: item.heading,
    text: item.text,
    bullets: item.bullets || [],
    img: item.img,
    alt: item.alt,
    icon: item.icon,
  }));

  const initialActive = industries.length > 0 ? industries[0].id : "";
  const [active, setActive] = useState(initialActive);

  // Update initial active when industries load
  if (active === "" && initialActive !== "") {
    setActive(initialActive);
  }

  if (industries.length === 0) return null;

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-12 bg-[#F3F8FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-2xl md:text-4xl font-bold mb-3"
        >
          {section.heading || "Industries We Transform with Custom AI"}
        </h2>
      </header>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Row */}
        <div className="flex justify-start gap-6 mb-8 overflow-x-auto no-scrollbar">
          {industries.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${isActive
                  ? "bg-[#1e3a8a] text-white border-2 border-blue-400 shadow-lg"
                  : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400/30"
                  }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <DynamicIcon name={tab.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {industries.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              hidden={!isActive}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">{tab.text}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {tab.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className="w-full h-[360px] flex justify-center md:justify-end relative rounded-lg overflow-hidden">
                  {tab.img && (
                    <Image
                      src={tab.img}
                      alt={tab.alt || tab.heading}
                      fill
                      className="object-cover"
                      priority={isActive}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/480x360?text=Image+Unavailable";
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
