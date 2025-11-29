"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "Financial Services",
    title: "Financial Services",
    heading: "Financial Services",
    text: `We've built trading platforms that don't crash during market volatility. Payment systems that actually process payments. Compliance tools that keep regulators happy.`,
    img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt: "digital finance data analysis investment dashboard.webp",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 4h18M3 8h18M8 16l-2 2 2 2m8-4l2 2-2 2M3 12h18"
        />
      </svg>
    ),
  },
  {
    id: "Healthcare",
    title: "Healthcare",
    heading: "Healthcare",
    text: `Electronic health records that doctors don't hate. Telemedicine platforms that work when patients need them most. Everything HIPAA-compliant because nobody has time for lawsuits.`,
    img: "/images/doctor-using-digital-health-technology.avif",
    alt:"doctor using digital health technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4a4 4 0 00-4 4v1H7a3 3 0 000 6h1v1a4 4 0 004 4m0-16a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-4 4"
        />
      </svg>
    ),
  },
  {
    id: "Retail & E-commerce",
    title: "Retail & E-commerce",
    heading: "Retail & E-commerce",
    text: `Shopping platforms that convert browsers into buyers. Inventory systems that know what you have before you run out. Recommendation engines that actually recommend useful things.`,
     img: "/images/ai-shopping-app-development.webp",
    alt:"ai shopping app development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: "Manufacturing",
    title: "Manufacturing",
    heading: "Manufacturing",
    text: `Supply chains that talk to each other. IoT systems that prevent expensive breakdowns. Quality control that catches problems before customers do.`,
        img: "/images/ai-automation-manifacterng-software.jpg",
    alt:"ai automation manifacterng software",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: "Technology",
    title: "Technology",
    heading: "Technology",
    text: `SaaS platforms that scale. APIs that other developers actually want to use. Cloud migrations that don't give you nightmares.`,
    img: "/images/ai-and-human-brain-collaboration.jpg",
    alt:"ai and human brain collaboration",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v12l-7 4-7-4V6l7-4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
      </svg>
    ),
  },
];

export default function Industries() {
  const [active, setActive] = useState(TABS[0].id);

  return (
    <section
      className="container mx-auto px-4 py-12 bg-[#EAF5FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-xl md:text-4xl font-bold mb-3 text-gray-900"
        >
          Industries OpenSoftAI is Working With
        </h2>
        <p className="text-gray-600 text-sm">
          Explore how we transform various industries with innovative technology.
        </p>
      </header>

      {/* Tabs Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Navigation */}
        <nav
          role="tablist"
          aria-label="Industries"
          className="flex justify-start gap-6 mb-8 overflow-x-auto no-scrollbar"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
              suppressHydrationWarning
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                id={`tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-[#15375F] text-white border-2 border-[#243B55] shadow-lg"
                    : "text-gray-300 hover:text-white border border-[#0B2542]"
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

        {/* Tab Panels */}
        {TABS.map((tab) => {
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 whitespace-pre-line">{tab.text}</p>
                </div>

                {/* Right: Optimized Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <Image
                    src={tab.img}
                    alt={tab.alt}
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
