"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "Marketing & Advertising",
    title: "Marketing & Advertising",
    heading: "Marketing & Advertising",
    text: `AI-powered campaign creation, personalized ad copy, visual asset generation, and content optimization that increases engagement and conversion rates.`,
    img: "/images/Advertising-and-marketing-word-cloud-with-related-terms-like-media-publicity-sales-and-awareness.jpeg",
    alt: "Advertising and marketing word cloud with related terms like media publicity sales and awareness",
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
          d="M3 10h18M5 6h14M4 14h16M3 18h18"
        />
      </svg>
    ),
  },
  {
    id: "eCommerce & Retail",
    title: "eCommerce & Retail",
    heading: "eCommerce & Retail",
    text: `Product description generation, visual merchandising, personalized marketing content, and customer communication automation that drives sales and improves customer experience.`,
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h18v13H3V3zm0 13l3 5h12l3-5"
        />
      </svg>
    ),
  },
  {
    id: "Media & Entertainment",
    title: "Media & Entertainment",
    heading: "Media & Entertainment",
    text: `Automated content creation, video production assistance, audio content generation, and creative asset development that accelerates production timelines.`,
    img: "/images/Advertising-channels-concept-diagram.jpeg",
    alt: "AI in media and entertainment",
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
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.868v4.264a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: "Education & Training",
    title: "Education & Training",
    heading: "Education & Training",
    text: `Educational content creation, personalized learning materials, interactive course development, and training video production that enhances learning outcomes.`,
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3L2 9l10 6 10-6-10-6zm0 18v-6"
        />
      </svg>
    ),
  },
  {
    id: "Finance & Banking",
    title: "Finance & Banking",
    heading: "Finance & Banking",
    text: `Compliance-friendly content generation, client communication automation, report creation, and marketing material development that maintains regulatory standards.`,
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M5 6h14M4 14h16M3 18h18"
        />
      </svg>
    ),
  },
  {
    id: "Healthcare & Life Sciences",
    title: "Healthcare & Life Sciences",
    heading: "Healthcare & Life Sciences",
    text: `Patient education materials, medical content creation, research documentation, and communication tools that improve patient care and operational efficiency.`,
     img: "/images/doctor-using-digital-health-technology.avif",
    alt: "doctor using digital health technology",
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
          d="M12 8v8m4-4H8m-5 0a9 9 0 1118 0 9 9 0 01-18 0z"
        />
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
      {/* Section Header */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-3xl md:text-4xl font-bold mb-3 text-gray-900"
        >
          Industries We Transform with Generative AI
        </h2>
        <p className="text-gray-600">
          Discover how we empower diverse industries to innovate, automate, and
          scale using generative AI.
        </p>
      </header>

      {/* Tabs Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tab Navigation */}
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
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[100px] cursor-pointer ${
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

                {/* Right: Image */}
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
