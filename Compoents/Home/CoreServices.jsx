"use client";

import { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Image from "next/image";
import Link from "next/link";

export default function CoreServices({ data }) {
  const tabs = data.tabs;
  const [active, setActive] = useState(tabs[0].id);

  return (
    <section className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-8 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          {data.section.heading}
        </h2>
        <p className="text-gray-600 text-sm">
          {data.section.description}
        </p>
      </div>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Core Services"
          className="flex gap-6 mb-8 overflow-x-auto no-scrollbar"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                suppressHydrationWarning
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[90px] transition ${isActive
                  ? "bg-[#0B2542] text-white border-2 border-[#243B55] shadow-lg"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <DynamicIcon name={tab.icon} className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panels */}
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              hidden={!isActive}
              className={isActive ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">
                    {tab.text}
                  </p>

                  <Link
                    href={tab.link}
                    className="inline-block px-6 py-3 bg-[#1E3A8A] rounded-lg hover:bg-[#243B55]"
                  >
                    Explore More →
                  </Link>
                </div>

                {/* Image */}
                <div className="relative w-full max-w-[480px] h-[300px] md:h-[320px]">
                  <Image
                    src={tab.image.src}
                    alt={tab.image.alt}
                    fill
                    className="object-contain rounded-lg"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
