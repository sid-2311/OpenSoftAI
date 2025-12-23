"use client";

import { useState } from "react";
import Image from "next/image";

/* 🔹 SVG Icon Map */
const ICONS = {
  finance: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 4h18M3 8h18M8 16l-2 2 2 2m8-4l2 2-2 2M3 12h18" />
    </svg>
  ),
  healthcare: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4a4 4 0 00-4 4v1H7a3 3 0 000 6h1v1a4 4 0 004 4m0-16a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-4 4" />
    </svg>
  ),
  retail: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
    </svg>
  ),
  manufacturing: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
    </svg>
  ),
  technology: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6" />
    </svg>
  )
};

export default function Industries({ data }) {
  const tabs = data.tabs;
  const [active, setActive] = useState(tabs[0].id);

  return (
    <section className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center">
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-gray-900">
          {data.section.heading}
        </h2>
        <p className="text-gray-600 text-sm">
          {data.section.description}
        </p>
      </header>

      {/* Tabs */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        <nav className="flex gap-6 mb-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
              suppressHydrationWarning
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[90px] ${
                  isActive
                    ? "bg-[#15375F] text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <div className="w-8 h-8">{ICONS[tab.icon]}</div>
                <span className="text-sm font-medium text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Panels */}
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div key={tab.id} className={isActive ? "block" : "hidden"}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                </div>

                <Image
                  src={tab.image.src}
                  alt={tab.image.alt}
                  width={480}
                  height={320}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
