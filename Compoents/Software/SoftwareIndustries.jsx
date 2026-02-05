"use client";

import { useState } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function SoftwareIndustries({ data }) {
  // Extract section data
  const section = data?.softwareIndustriesSection || {};
  const header = section.header || {};
  const tabsData = section.tabs || [];

  const tabs = tabsData.map(t => ({
    id: t.id,
    title: t.title,
    heading: t.heading,
    text: t.text,
    img: t.image?.src,
    alt: t.image?.alt,
    icon: t.icon,
  }));

  const initialActive = tabs.length > 0 ? tabs[0].id : "";
  const [active, setActive] = useState(initialActive);

  // Update initial active when tabs load if necessary
  if (active === "" && initialActive !== "") {
    setActive(initialActive);
  }

  if (!section.header && tabs.length === 0) return null;

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#F9FAFB] flex flex-col items-center"
    >
      <header className="text-center mb-10 max-w-3xl">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-slate-900">
          {header.title}
        </h2>
      </header>

      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs */}
        <nav
          role="tablist"
          aria-label="Software Industries"
          className="flex overflow-x-auto mt-1 no-scrollbar scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 justify-start gap-4 mb-8 pb-2 -mx-4 px-4"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-xl min-w-[90px] transition-all duration-300 ${isActive
                  ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg scale-100"
                  : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400 scale-95"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <DynamicIcon name={tab.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Panels */}
        {tabs.map((tab) => {
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
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {tab.text}
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[320px] rounded-lg overflow-hidden">
                    {tab.img && (
                      <Image
                        src={tab.img}
                        alt={tab.alt || tab.heading}
                        fill
                        sizes="(max-width: 768px) 100vw, 480px"
                        className="object-cover"
                        priority={isActive}
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://via.placeholder.com/480x320?text=Image+Unavailable";
                        }}
                      />
                    )}
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
