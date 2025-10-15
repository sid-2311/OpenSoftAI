"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ShoppingBag,
  Stethoscope,
  Landmark,
  Laptop,
  Plane,
  GraduationCap,
} from "lucide-react";

const SOFTWARE_TABS = [
  {
    id: "E-commerce & Retail",
    title: "E-commerce",
    heading: "E-commerce & Retail",
    text: `Product questions, size guides, shipping info, returns. One fashion retailer's chatbot handles 90% of their customer inquiries and actually improves conversion rates by suggesting complementary items.`,
    img: "/images/ai-shopping-app-development.webp",
    alt: "E-commerce chatbot assisting customers with shopping",
    icon: <ShoppingBag className="w-6 h-6" />,
  },
  {
    id: "Healthcare & Medical",
    title: "Healthcare",
    heading: "Healthcare & Medical",
    text: `Appointment scheduling, symptom checking, prescription refills. Always HIPAA-compliant, always secure, and smart enough to escalate serious concerns to medical professionals.`,
    img: "/images/doctor-using-digital-health-technology.avif",
    alt: "Doctor using digital health technology",
    icon: <Stethoscope className="w-6 h-6" />,
  },
  {
    id: "Financial Services",
    title: "Finance",
    heading: "Financial Services",
    text: `Account balances, transaction history, loan applications. Built with bank-level security and the ability to authenticate users before sharing sensitive information.`,
    img: "/images/digital-finance-data-analysis-investment-dashboard.webp",
    alt: "Digital finance data analysis dashboard",
    icon: <Landmark className="w-6 h-6" />,
  },
  {
    id: "SaaS & Technology",
    title: "SaaS",
    heading: "SaaS & Technology",
    text: `Onboarding help, feature explanations, technical troubleshooting. These bots understand your product as well as your documentation does—sometimes better.`,
    img: "/images/saas.jpg",
    alt: "SaaS dashboard and technology interface",
    icon: <Laptop className="w-6 h-6" />,
  },
  {
    id: "Travel & Hospitality",
    title: "Travel",
    heading: "Travel & Hospitality",
    text: `Booking changes, local recommendations, check-in assistance. One hotel chain's chatbot handles 70% of guest service requests and gets higher satisfaction scores than their call center.`,
    img: "/images/hospitality-industry-word-cloud-service-hotel-restaurant.jpg",
    alt: "Hospitality industry word cloud hotel restaurant",
    icon: <Plane className="w-6 h-6" />,
  },
  {
    id: "Education & Training",
    title: "Education",
    heading: "Education & Training",
    text: `Course information, enrollment help, progress tracking. Perfect for handling the administrative stuff so educators can focus on actual education.`,
    img: "/images/creative-business-ideas-book.avif",
    alt: "Education technology learning platform",
    icon: <GraduationCap className="w-6 h-6" />,
  },
];

export default function Industries() {
  const [active, setActive] = useState(SOFTWARE_TABS[0].id);

  return (
    <section
      id="industries"
      className="container mx-auto px-4 py-16 bg-[#F9FAFB] flex flex-col items-center"
    >
      {/* SEO Heading */}
      <header className="text-center mb-10 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-900">
          Industries We Transform Through AI Chatbots
        </h2>
        <p className="text-gray-600">
          Discover how <strong>OpenSoft AI</strong> helps businesses across
          sectors automate support, improve customer experience, and increase
          operational efficiency with intelligent chat solutions.
        </p>
      </header>

      {/* Card Wrapper */}
      <div className="bg-[#0B2542] rounded-2xl shadow-xl p-6 md:p-10 w-full max-w-6xl">
        {/* Tabs */}
        <nav
          role="tablist"
          aria-label="Software Industries"
          className="flex flex-wrap justify-start gap-3 mb-8"
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
                className={`flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-xl min-w-[90px] transition-all duration-300 ${
                  isActive
                    ? "bg-[#1E3A8A] text-white border-2 border-blue-400 shadow-lg scale-105"
                    : "text-gray-300 hover:text-white border border-transparent hover:border-blue-400"
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

                {/* Image */}
                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-[480px] h-[320px] rounded-lg overflow-hidden">
                    <Image
                      src={tab.img}
                      alt={tab.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-contain"
                      priority={isActive}
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
