"use client"
import React, { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Image from "next/image";

export default function Industries({ data }) {
  const section = data?.industries || {};
  const industriesData = section.list || [];

  const [active, setActive] = useState(null);

  const tabs = industriesData.map((i) => ({
    id: i.id,
    title: i.title,
    heading: i.heading,
    text: i.text,
    img: i.img,
    alt: i.alt,
    icon: <DynamicIcon name={i.icon} className="w-8 h-8" />,
  }));

  // ✅ Correct way to set initial tab
  useEffect(() => {
    if (tabs.length > 0) {
      setActive(tabs[0].id);
    }
  }, [tabs.length]);

  if (!section.heading) return null;

  return (
    <section
      className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* ✅ Correct heading & description */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
        >
          {section.heading}
        </h2>
        <p className="text-gray-600">
          {section.description}
        </p>
      </header>

      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs */}
        <nav
          role="tablist"
          className="flex gap-6 mb-8 overflow-x-auto no-scrollbar"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[90px] ${isActive
                  ? "bg-[#15375F] text-white border-2 border-[#243B55]"
                  : "text-gray-300"
                  }`}
              >
                {tab.icon}
                <span className="text-sm font-medium">{tab.title}</span>
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
              hidden={!isActive}
              className={isActive ? "block" : "hidden"}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center text-white">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">
                    {tab.text}
                  </p>
                </div>

                <div className="flex justify-center md:justify-end">
                  <Image
                    src={tab.img}
                    alt={tab.alt}
                    width={480}
                    height={320}
                    className="rounded-lg object-cover"
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
