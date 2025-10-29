"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Landmark,
  Stethoscope,
  ShoppingBag,
  Factory,
  Truck,
  Cpu,
  GraduationCap,
  Banknote,
} from "lucide-react";

const INDUSTRY_TABS = [
  {
    id: "Finance & Banking",
    title: "Finance",
    heading: "Finance & Banking",
    text: `Automated loan processing, compliance monitoring, fraud detection workflows, and customer onboarding processes that reduce processing time while improving accuracy and regulatory compliance.`,
     img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt:"digital finance data analysis investment dashboard",
    icon: <Banknote className="w-6 h-6" />,
  },
  {
    id: "Healthcare & Life Sciences",
    title: "Healthcare",
    heading: "Healthcare & Life Sciences",
    text: `Patient data management, appointment scheduling, billing automation, and clinical workflow optimization that improves patient care while reducing administrative burden on healthcare professionals.`,
   img: "/images/doctor-using-digital-health-technology.avif",
    alt:"doctor using digital health technology",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "Retail & eCommerce",
    title: "Retail",
    heading: "Retail & eCommerce",
    text: `Inventory management, order processing, customer service automation, and supply chain optimization that enhance customer experience while reducing operational costs.`,
    img: "/images/ai-shopping-app-development.webp",
    alt:"ai shopping app development",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: "Manufacturing & Production",
    title: "Manufacturing",
    heading: "Manufacturing & Production",
    text: `Quality control automation, production scheduling, supply chain coordination, and predictive maintenance workflows that increase efficiency and reduce downtime.`,
   img: "/images/ai-automation-manifacterng-software.jpg",
    alt:"ai automation manifacterng software",
    icon: <Factory className="w-6 h-6" />,
  },
  {
    id: "Logistics & Transportation",
    title: "Logistics",
    heading: "Logistics & Transportation",
    text: `Route optimization, shipment tracking, warehouse automation, and delivery coordination systems that improve service levels while reducing operational complexity.`,
    img: "/images/global-logistics-and-supply-chain-transportation-network.jpg",
    alt:"global logistics and supply chain transportation network",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: "SaaS & Technology",
    title: "Technology",
    heading: "SaaS & Technology",
    text: `Customer onboarding automation, support ticket routing, product analytics, and user engagement workflows that scale customer success operations efficiently.`,
    img: "/images/saas.jpg",
    alt: "AI in SaaS and technology",
    icon: <Cpu className="w-6 h-6" />,
  },
  {
    id: "Education & Training",
    title: "Education",
    heading: "Education & Training",
    text: `Student enrollment processes, course management automation, performance tracking, and administrative workflow optimization that allows educators to focus on teaching.`,
     img: "/images/creative-business-ideas-book.avif",
    alt:"creative business ideas book",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

export default function Industries() {
  const [active, setActive] = useState(INDUSTRY_TABS[0].id);

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#EAF5FF] flex flex-col items-center"
    >
      {/* Section Header */}
      <header className="text-center mb-10 max-w-3xl">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-slate-900">
          Industries We're Transforming with AI Automation
        </h2>
      </header>

      {/* Tabs + Panels Container */}
      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs Navigation */}
        <nav
          role="tablist"
          aria-label="Industries"
          className="flex overflow-x-auto mt-1 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 justify-start gap-4 mb-8 pb-2 -mx-4 px-4"
        >
          {INDUSTRY_TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-xl min-w-[90px] transition-all duration-300 ${
                  isActive
                    ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg scale-105"
                    : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  {tab.icon}
                </div>
                <span className="text-sm font-medium text-center whitespace-nowrap">
                  {tab.title}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Panels */}
        {INDUSTRY_TABS.map((tab) => {
          const isActive = tab.id === active;
          return (
            <article
              key={tab.id}
              id={`panel-${tab.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${tab.id}`}
              hidden={!isActive}
              className={`${isActive ? "block" : "hidden"} transition-all`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
                {/* Text Content */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {tab.text}
                  </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.img}
                      alt={tab.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-contain"
                      priority={isActive}
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/480x320?text=Image+Unavailable";
                      }}
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
