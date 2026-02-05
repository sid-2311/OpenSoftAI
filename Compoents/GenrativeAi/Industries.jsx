"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function Industries({ data }) {
  const section = data?.industries || {};
  const industriesListData = section.tabs || section.list || [];

  const [active, setActive] = useState(null);

  const tabs = industriesListData.map((i) => ({
    id: i.id,
    title: i.title,
    heading: i.heading,
    text: i.text,
    img: i.img,
    alt: i.alt,
    icon: <DynamicIcon name={i.icon || "Globe"} className="w-6 h-6" />,
  }));

  useEffect(() => {
    if (tabs.length > 0) {
      setActive(tabs[0].id);
    }
  }, [tabs.length]);

  if (!section.title) return null;

  return (
    <section
      className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* Header from CMS */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-2xl md:text-4xl font-bold mb-3 text-gray-900"
        >
          {section.title}
        </h2>
        <p className="text-gray-600">{section.description}</p>
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
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[100px] ${isActive
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
                  <h3 className="text-2xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p>{tab.text}</p>
                </div>

                <div className="flex justify-end">
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
