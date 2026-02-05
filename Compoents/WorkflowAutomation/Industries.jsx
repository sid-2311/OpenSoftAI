"use client";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function Industries({ data }) {
  const section = data?.industries || {};
  const tabsData = section.tabs || [];

  const [active, setActive] = useState(null);

  useEffect(() => {
    if (tabsData.length > 0) {
      setActive(tabsData[0].id);
    }
  }, [tabsData.length]);

  const tabs = useMemo(
    () =>
      tabsData.map((t) => {
        return {
          ...t,
          Icon: <DynamicIcon name={t.icon || "Landmark"} className="w-6 h-6" />,
        };
      }),
    [tabsData]
  );

  if (!section.title) return null;

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#EAF5FF] flex flex-col items-center"
    >
      {/* Header */}
      <header className="text-center mb-10 max-w-3xl">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-slate-900">
          {section.title}
        </h2>
      </header>

      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs */}
        <nav
          role="tablist"
          className="flex overflow-x-auto gap-4 mb-8 pb-2"
        >
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center gap-2 px-6 py-3 rounded-xl min-w-[90px] transition-all ${isActive
                  ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg"
                  : "text-gray-300 hover:text-white"
                  }`}
              >
                {tab.Icon}
                <span className="text-sm font-medium whitespace-nowrap">
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
            <article key={tab.id} hidden={!isActive}>
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
                    <Image
                      src={tab.img}
                      alt={tab.alt}
                      fill
                      sizes="(max-width:768px) 100vw, 480px"
                      className="object-contain"
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
