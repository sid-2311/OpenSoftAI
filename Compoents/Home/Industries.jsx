"use client";

import { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Image from "next/image";

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
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[90px] ${isActive
                  ? "bg-[#15375F] text-white"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <DynamicIcon name={tab.icon} className="w-8 h-8" />
                </div>
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
