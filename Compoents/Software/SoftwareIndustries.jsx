"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Stethoscope,
  Plane,
  Landmark,
  GraduationCap,
  ShoppingBag,
  Truck,
  Building2,
  Factory,
} from "lucide-react";

const SOFTWARE_TABS = [
  {
    id: "Healthcare",
    title: "Healthcare",
    heading: "Healthcare",
    text: `Electronic health records, telemedicine platforms, practice management systems, and patient engagement tools that improve healthcare delivery while ensuring compliance.`,
    img: "/images/doctor-using-digital-health-technology.avif",
    alt:"doctor using digital health technology",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "Hospitality & Travel",
    title: "Hospitality",
    heading: "Hospitality & Travel",
    text: `Booking systems, property management solutions, guest experience platforms, and operational management tools that enhance customer satisfaction and business efficiency.`,
    img: "/images/hospitality-industry-word-cloud-service-hotel-restaurant.jpg",
    alt:"hospitality industry word cloud service hotel restaurant",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    id: "Finance & Banking",
    title: "Finance",
    heading: "Finance & Banking",
    text: `Trading platforms, risk management systems, digital banking solutions, and regulatory compliance tools that modernize financial services securely.`,
    img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt:"digital finance data analysis investment dashboard",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "Education",
    title: "Education",
    heading: "Education",
    text: `Learning management systems, student information systems, online assessment platforms, and administrative tools that support modern educational environments.`,
    img: "/images/creative-business-ideas-book.avif",
    alt:"creative business ideas book",
    icon: <GraduationCap className="w-6 h-6" />,
  },
  {
    id: "Retail & E-commerce",
    title: "Retail",
    heading: "Retail & E-commerce",
    text: `Inventory management, point-of-sale systems, customer relationship platforms, and e-commerce solutions that drive sales and improve customer experiences.`,
    img: "/images/ai-shopping-app-development.webp",
    alt:"ai shopping app development",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: "Logistics & Supply Chain",
    title: "Logistics",
    heading: "Logistics & Supply Chain",
    text: `Warehouse management, transportation optimization, inventory tracking, and supply chain visibility tools that reduce costs and improve efficiency.`,
    img: "/images/global-logistics-and-supply-chain-transportation-network.jpg",
    alt:"global logistics and supply chain transportation network",
    icon: <Truck className="w-6 h-6" />,
  },
  {
    id: "Real Estate",
    title: "Real Estate",
    heading: "Real Estate",
    text: `Property management systems, CRM platforms, listing management tools, and transaction processing software that streamline real estate operations.`,
    img: "/images/real-estate-handshake-property-deal.webp",
    alt:"real estate handshake property deal",
    icon: <Building2 className="w-6 h-6" />,
  },
  {
    id: "Manufacturing",
    title: "Manufacturing",
    heading: "Manufacturing",
    text: `Production planning systems, quality management tools, supply chain integration, and operational efficiency platforms that optimize manufacturing processes.`,
    img: "/images/ai-automation-manifacterng-software.jpg",
    alt:"ai automation manifacterng software",
    icon: <Factory className="w-6 h-6" />,
  },
];

export default function SoftwareIndustries() {
  const [active, setActive] = useState(SOFTWARE_TABS[0].id);

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#F9FAFB] flex flex-col items-center"
    >
      {/* SEO Heading */}
      <header className="text-center mb-10 max-w-3xl">
        <h2 className="text-xl md:text-4xl font-bold mb-3 text-slate-900">
          Industries We Transform Through Software
        </h2>
        {/* <p className="text-gray-600">
          Explore how <strong>OpenSoftAI</strong> delivers innovative software
          solutions across industries — enhancing efficiency, customer
          engagement, and digital transformation.
        </p> */}
      </header>

      {/* Card Wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs */}
        {/* Tabs */}
<nav
  role="tablist"
  aria-label="Software Industries"
  className="flex overflow-x-auto mt-1 no-scrollbar  scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-blue-100 justify-start gap-4 mb-8 pb-2 -mx-4 px-4"
>
  {SOFTWARE_TABS.map((tab) => {
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
            ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg scale-100"
            : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400 scale-95"
        }`}
      >
        <div className="w-8 h-8 flex items-center justify-center">
          {tab.icon}
        </div>
        <span className="text-sm font-medium text-center">{tab.title}</span>
      </button>
    );
  })}
</nav>


        {/* Panels */}
        {SOFTWARE_TABS.map((tab) => {
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
                {/* Text */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-300">
                    {tab.heading}
                  </h3>
                  <p className="mb-6 text-gray-200 leading-relaxed">
                    {tab.text}
                  </p>
                </div>

                {/* Image (optimized for SEO and performance) */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.img}
                      alt={tab.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-conatin"
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
