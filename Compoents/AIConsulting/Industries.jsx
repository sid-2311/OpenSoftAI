"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "Finance & Banking",
    title: "Finance & Banking",
    heading: "Finance & Banking",
    text: `AI for fraud detection, risk assessment, algorithmic trading, and customer service automation.`,
    img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt:"digital finance data analysis investment dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M5 6h14M4 14h16M3 18h18" />
      </svg>
    ),
  },
  {
    id: "Healthcare",
    title: "Healthcare",
    heading: "Healthcare",
    text: `Clinical decision support, medical imaging analysis, patient care optimization, and administrative automation.`,
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m4-4H8m-5 0a9 9 0 1118 0 9 9 0 01-18 0z" />
      </svg>
    ),
  },
  {
    id: "Retail & eCommerce",
    title: "Retail & eCommerce",
    heading: "Retail & eCommerce",
    text: `Personalization engines, demand forecasting, inventory optimization, and customer behavior analysis.`,
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
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v13H3V3zm0 13l3 5h12l3-5" />
      </svg>
    ),
  },
  {
    id: "Manufacturing",
    title: "Manufacturing",
    heading: "Manufacturing",
    text: `Predictive maintenance, quality control, supply chain optimization, and production planning.`,
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
      </svg>
    ),
  },
  {
    id: "SaaS & Technology",
    title: "SaaS & Technology",
    heading: "SaaS & Technology",
    text: `Product intelligence, user behavior analysis, automated customer support, and feature optimization.`,
    img: "/images/saas.jpg",
    alt: "AI in SaaS and technology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 8h18M3 12h18M3 16h18M3 20h18" />
      </svg>
    ),
  },
  {
    id: "Education",
    title: "Education",
    heading: "Education",
    text: `Personalized learning platforms, administrative automation, and student performance analytics.`,
    img: "/images/creative-business-ideas-book.avif",
    alt:"creative business ideas book",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L2 9l10 6 10-6-10-6zm0 18v-6" />
      </svg>
    ),
  },
  {
    id: "Logistics",
    title: "Logistics",
    heading: "Logistics",
    text: `Route optimization, demand forecasting, warehouse automation, and delivery prediction.`,
    img: "/images/global-logistics-and-supply-chain-transportation-network.jpg",
    alt:"global logistics and supply chain transportation network",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18v4H3v-4zM3 6h18M3 18h18" />
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
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
        >
          Industries We Serve
        </h2>
        <p className="text-gray-600">
          Explore how we help businesses across industries unlock the full potential of AI.
        </p>
      </header>

      {/* Tabs Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Navigation */}
        <nav
          role="tablist"
          aria-label="Industries"
          className="flex justify-start gap-6 mb-8 overflow-x-auto"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
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
