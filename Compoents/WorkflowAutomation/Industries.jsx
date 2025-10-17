"use client";

import { useState } from "react";
import Image from "next/image";

const TABS = [
  {
    id: "Finance & Banking",
    title: "Finance & Banking",
    heading: "Finance & Banking",
    text: `Automated loan processing, compliance monitoring, fraud detection workflows, and customer onboarding processes that reduce processing time while improving accuracy and regulatory compliance.`,
    img: "/images/finance-banking-ai.webp",
    alt: "AI in finance and banking",
  },
  {
    id: "Healthcare & Life Sciences",
    title: "Healthcare & Life Sciences",
    heading: "Healthcare & Life Sciences",
    text: `Patient data management, appointment scheduling, billing automation, and clinical workflow optimization that improves patient care while reducing administrative burden on healthcare professionals.`,
    img: "/images/healthcare-lifesciences-ai.webp",
    alt: "AI in healthcare and life sciences",
  },
  {
    id: "Retail & eCommerce",
    title: "Retail & eCommerce",
    heading: "Retail & eCommerce",
    text: `Inventory management, order processing, customer service automation, and supply chain optimization that enhance customer experience while reducing operational costs.`,
    img: "/images/ecommerce-retail-ai.webp",
    alt: "AI in retail and eCommerce",
  },
  {
    id: "Manufacturing & Production",
    title: "Manufacturing & Production",
    heading: "Manufacturing & Production",
    text: `Quality control automation, production scheduling, supply chain coordination, and predictive maintenance workflows that increase efficiency and reduce downtime.`,
    img: "/images/manufacturing-ai.webp",
    alt: "AI in manufacturing and production",
  },
  {
    id: "Logistics & Transportation",
    title: "Logistics & Transportation",
    heading: "Logistics & Transportation",
    text: `Route optimization, shipment tracking, warehouse automation, and delivery coordination systems that improve service levels while reducing operational complexity.`,
    img: "/images/logistics-ai.webp",
    alt: "AI in logistics and transportation",
  },
  {
    id: "SaaS & Technology",
    title: "SaaS & Technology",
    heading: "SaaS & Technology",
    text: `Customer onboarding automation, support ticket routing, product analytics, and user engagement workflows that scale customer success operations efficiently.`,
    img: "/images/saas-tech-ai.webp",
    alt: "AI in SaaS and technology",
  },
  {
    id: "Education & Training",
    title: "Education & Training",
    heading: "Education & Training",
    text: `Student enrollment processes, course management automation, performance tracking, and administrative workflow optimization that allows educators to focus on teaching.`,
    img: "/images/education-training-ai.webp",
    alt: "AI in education and training",
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
          Industries We're Transforming with AI Automation
        </h2>
        <p className="text-gray-600">
          Discover how our AI workflow automation solutions streamline operations,
          reduce costs, and enhance customer and employee experiences across
          diverse sectors.
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
                <span className="text-sm font-medium text-center">{tab.title}</span>
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{tab.heading}</h3>
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
