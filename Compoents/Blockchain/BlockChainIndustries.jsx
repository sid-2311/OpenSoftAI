"use client";

import { useState } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data



export default function BlockchainIndustries({ data }) {
  if (!data || !data.tabs || !Array.isArray(data.tabs) || data.tabs.length === 0) return null;
  const [active, setActive] = useState(data.tabs[0].id);

  return (
    <section className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center" aria-labelledby="blockchain-industries-heading">
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2 id="blockchain-industries-heading" className="text-xl md:text-3xl font-bold mb-3 text-gray-900">
          {data.header?.title || "Blockchain Services OpenSoftAI is Excelling In"}
        </h2>
        <p className="text-gray-600">
          {data.header?.description || "Discover our blockchain solutions transforming industries with decentralization and security."}
        </p>
      </header>

      {/* Tabs Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Navigation */}
        <nav role="tablist" aria-label="Blockchain Industries" className="flex justify-start gap-6 mb-8 overflow-x-auto no-scrollbar">
          {data.tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${isActive
                  ? "bg-[#15375F] text-white border-2 border-[#243B55] shadow-lg"
                  : "text-gray-300 hover:text-white border border-[#0B2542]"
                  }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <DynamicIcon name={tab.icon} className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Tab Panels */}
        {data.tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <article
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left: Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{tab.heading}</h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                </div>

                {/* Right: Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <Image
                    src={tab.image?.src || tab.img}
                    alt={tab.image?.alt || tab.alt}
                    width={480}
                    height={320}
                    className="w-full max-w-[480px] rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
