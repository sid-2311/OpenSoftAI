"use client";

import { useState } from "react";
import Image from "next/image";
import { Stethoscope, Landmark, Factory, Truck, ShoppingCart, GraduationCap } from "lucide-react";

const INDUSTRIES = [
  {
    id: "Healthcare & Life Sciences",
    title: "Healthcare",
    heading: "Healthcare & Life Sciences",
    text: `AI is redefining how healthcare organizations operate, diagnose, and innovate. From improving diagnostic accuracy to accelerating drug discovery, AI enables better patient outcomes and faster breakthroughs.`,
    bullets: [
      "Diagnostic imaging AI that helps radiologists identify conditions 40% faster",
      "Drug discovery acceleration through molecular analysis",
      "Patient outcome prediction for personalized treatment plans",
    ],
    img: "/images/doctor-using-digital-health-technology.jpg",
    alt: "doctor using digital health technology",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "Financial Services",
    title: "Finance",
    heading: "Financial Services",
    text: `Financial institutions are turning to AI for security, efficiency, and smarter decision-making. With real-time fraud detection and AI-powered trading, banks can deliver trust and performance at scale.`,
    bullets: [
      "Fraud detection systems processing millions of transactions in real-time",
      "Algorithmic trading models with risk management built-in",
      "Credit scoring AI that reduces default rates by 25%",
    ],
    img: "/images/digital-finance-data-analysis-investment-dashboard.jpg",
    alt:"digital finance data analysis investment dashboard",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "Manufacturing & Logistics",
    title: "Manufacturing",
    heading: "Manufacturing & Logistics",
    text: `AI brings precision and foresight to the industrial world. Predictive systems prevent downtime, optimize supply chains, and ensure quality with machine-level accuracy.`,
    bullets: [
      "Predictive maintenance reducing equipment downtime by 60%",
      "Supply chain optimization saving 15–20% on logistics costs",
      "Quality control AI detecting defects with 99.7% accuracy",
    ],
    img: "/images/global-logistics-and-supply-chain-transportation-network.jpg",
     alt:"global logistics and supply chain transportation network",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: "Retail & E-commerce",
    title: "Retail",
    heading: "Retail & E-commerce",
    text: `Personalization at scale is the new retail advantage. AI helps brands understand customers, predict trends, and manage inventory with precision that feels almost human.`,
    bullets: [
      "Personalization engines increasing conversion rates by 35%",
      "Dynamic pricing optimization based on real-time market conditions",
      "Inventory forecasting reducing stockouts while minimizing overstock",
    ],
    img: "/images/ai-shopping-app-development.jpg",
   alt:"ai shopping app development",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: "Education Technology",
    title: "EdTech",
    heading: "Education Technology",
    text: `AI is personalizing education like never before—helping teachers focus on teaching while adaptive systems guide every learner along their own best path.`,
    bullets: [
      "Adaptive learning platforms personalizing education for individual students",
      "Automated essay grading and feedback systems",
      "Student performance prediction for early intervention",
    ],
   img: "/images/creative-business-ideas-book.avif",
    alt:"creative business ideas book",
    icon: <GraduationCap className="w-6 h-6" />,
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
          Industries We Transform with Custom AI
        </h2>
      </header>

      {/* Card wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-6xl">
        {/* Tabs Row */}
        <div className="flex justify-start gap-6 mb-8 overflow-x-auto no-scrollbar">
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
                  {/* <p className="mb-6 whitespace-pre-line">{tab.text}</p> */}
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
