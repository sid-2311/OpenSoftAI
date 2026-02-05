"use client";

import { useState } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function IndustriesWeKnow({ data }) {
  if (!data) return null;

  const { header, industries } = data;
  const [active, setActive] = useState(industries[0]?.id);

  return (
    <section
      id={data.id}
      className="container mx-auto px-4 py-12 bg-[#F3F8FF] flex flex-col items-center"
    >
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          {header.title}
        </h2>
      </header>

      {/* Card */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs */}
        <div className="flex gap-6 mb-8 overflow-x-auto no-scrollbar">
          {industries.map((tab) => {
            const isActive = tab.id === active;

            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-xl min-w-[90px] ${isActive
                  ? "bg-[#0B2542] text-white border-2 border-[#243B55]"
                  : "text-gray-300 border border-[#0B2542]"
                  }`}
              >
                <DynamicIcon name={tab.icon} className="w-6 h-6" />
                <span className="text-sm font-medium text-center">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panels */}
        {industries.map((tab) => {
          const isActive = tab.id === active;

          return (
            <div key={tab.id} hidden={!isActive}>
              <div className="grid md:grid-cols-2 gap-8 items-center text-white">
                {/* Left */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {tab.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                  <Image
                    src={tab.image.src}
                    alt={tab.image.alt}
                    width={480}
                    height={360}
                    className="rounded-lg object-cover"
                    priority={isActive}
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
