"use client";

import { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Image from "next/image";

// Dynamic data from API - use data prop to access section data

export default function Industries({ data }) {
  const [active, setActive] = useState(null);

  // Extract section data
  const section = data?.industries || {};
  const heading = section.heading || {};
  const industriesData = section.items || [];

  const industries = industriesData.map(i => ({
    id: i.id,
    title: i.title,
    heading: i.heading,
    text: i.text,
    img: i.img,
    alt: i.alt,
    icon: <DynamicIcon name={i.icon} className="w-6 h-6" />,
  }));

  // Set initial active tab
  if (active === null && industries.length > 0) {
    setActive(industries[0].id);
  }

  if (!section.heading) return null;

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#F9FAFB] flex flex-col items-center"
    >
      {/* SEO Heading */}
      <header className="text-center mb-10 max-w-4xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-slate-900">
          {heading.main || "Industries We Transform Through AI Chatbots"}
        </h2>
        <p className="text-gray-600 text-md">
          {heading.description}
        </p>
      </header>

      {/* Card Wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs */}
        <nav
          role="tablist"
          aria-label="Software Industries"
          className="flex flex-nowrap overflow-x-auto whitespace-nowrap gap-3 mb-8 py-2 px-1 no-scrollbar"
        >
          {industries.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl min-w-[90px] transition-all duration-300 ${isActive
                  ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg scale-105"
                  : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-sm font-medium text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Panels */}
        {industries.map((tab) => {
          const isActive = tab.id === active;
          return (
            <article
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"} transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {tab.text}
                  </p>
                </div>

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.img}
                      alt={tab.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-contain"
                      priority={isActive}
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
