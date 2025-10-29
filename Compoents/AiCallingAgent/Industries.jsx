"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Stethoscope,
  ShoppingCart,
  Landmark,
  Building2,
  Car,
} from "lucide-react";

const INDUSTRIES = [
  {
    id: "Healthcare & Medical Services",
    title: "Healthcare",
    heading: "Healthcare & Medical Services",
    text: `Voice AI is transforming patient engagement, administrative workflows, and healthcare communication — enabling faster responses, higher patient satisfaction, and reduced operational costs.`,
    bullets: [
      "Appointment scheduling and confirmation calls reducing no-shows by 40%",
      "Patient follow-up calls for medication adherence and wellness checks",
      "Insurance verification and pre-authorization handling",
      "24/7 nurse hotline support for non-emergency medical questions",
    ],
    img: "/images/doctor-using-digital-health-technology.avif",
    alt: "doctor using digital health technology",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "E-commerce & Retail",
    title: "Retail",
    heading: "E-commerce & Retail",
    text: `Voice AI helps retailers personalize experiences and boost conversions through conversational automation that feels human — across order tracking, support, and upselling.`,
    bullets: [
      "Order confirmation and shipping notification calls",
      "Customer service for returns, exchanges, and product questions",
      "Abandoned cart recovery calls that convert 25% back to purchases",
      "Personalized product recommendation calls based on purchase history",
    ],
    img: "/images/ai-shopping-app-development.webp",
    alt: "ai shopping app development",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: "Financial Services & Banking",
    title: "Finance",
    heading: "Financial Services & Banking",
    text: `Voice AI empowers banks and financial institutions to deliver real-time assistance, fraud prevention, and seamless customer engagement across every touchpoint.`,
    bullets: [
      "Account verification and fraud detection calls",
      "Payment reminder calls that maintain customer relationships",
      "Loan application follow-ups and document collection",
      "Investment consultation scheduling and client check-ins",
    ],
    img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt: "digital finance data analysis investment dashboard",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "Real Estate & Property Management",
    title: "Real Estate",
    heading: "Real Estate & Property Management",
    text: `From lead qualification to tenant communication, Voice AI helps real estate professionals build stronger client relationships and streamline operations.`,
    bullets: [
      "Lead qualification and property showing appointments",
      "Tenant communication for maintenance requests and lease renewals",
      "Market research calls for property valuations",
      "Client follow-ups throughout the buying/selling process",
    ],
     img: "/images/real-estate-handshake-property-deal.webp",
    alt:"real estate handshake property deal",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "Automotive & Insurance",
    title: "Automotive",
    heading: "Automotive & Insurance",
    text: `Voice AI accelerates communication across dealerships, insurers, and service centers — improving customer satisfaction and reducing manual workload.`,
    bullets: [
      "Claim processing and status update calls",
      "Service appointment reminders and scheduling",
      "Policy renewal conversations and coverage updates",
      "Customer satisfaction surveys following service interactions",
    ],
    img: "/images/transforming-automotive-components.webp",
    alt: "transforming automotive components",
    icon: <Car className="w-6 h-6" />,
  },
];

export default function IndustriesWeKnow() {
  const [active, setActive] = useState(INDUSTRIES[0].id);

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-12 bg-[#F3F8FF] flex flex-col items-center"
      aria-labelledby="industries-heading"
    >
      {/* Heading */}
      <header className="text-center mb-8 max-w-3xl">
        <h2
          id="industries-heading"
          className="text-2xl md:text-4xl font-bold mb-3"
        >
          Industries We Revolutionize with Voice AI
        </h2>
      </header>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Row */}
        <div className="flex justify-start gap-6 mb-8 overflow-x-auto">
          {INDUSTRIES.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-xl transition min-w-[90px] cursor-pointer ${
                  isActive
                    ? "bg-[#0B2542] text-white border-2 border-[#243B55] shadow-lg"
                    : "text-gray-300 hover:text-white border border-[#0B2542]"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-sm font-medium text-center">{tab.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Panels */}
        {INDUSTRIES.map((tab) => {
          const isActive = tab.id === active;
          return (
            <div
              key={tab.id}
              hidden={!isActive}
              role="tabpanel"
              aria-labelledby={tab.id}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Left Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {tab.heading}
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {tab.bullets.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* Right Image */}
                <div className="w-full flex justify-center md:justify-end">
                  <Image
                    src={tab.img}
                    alt={tab.alt}
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
