"use client";
import { useState, useEffect } from "react";
import {
  DollarSign,
  Smile,
  TrendingDown,
  TrendingUp,
  BarChart3,
  MapPin,
  Lock,
  AlertTriangle,
  Frown,
  FileWarning,
  Sliders,
} from "lucide-react";

export default function IMImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ Business Benefits of Smart Inventory Management
  const benefits = [
    {
      icon: DollarSign,
      title: "Optimize Cash Flow and Working Capital",
      description:
        "Maintain optimal stock levels that balance customer service with cash flow requirements. Free up capital tied up in excess inventory for more productive investments.",
      stat: "+25%",
      statLabel: "Cash Flow",
    },
    {
      icon: Smile,
      title: "Improve Customer Satisfaction",
      description:
        "Consistent product availability leads to better customer experiences, increased sales, and long-term customer loyalty.",
      stat: "↑",
      statLabel: "Loyalty",
    },
    {
      icon: TrendingDown,
      title: "Reduce Total Inventory Costs",
      description:
        "Lower carrying costs, minimize waste from obsolescence, and make smarter purchasing decisions to improve overall profitability.",
      stat: "-18%",
      statLabel: "Costs",
    },
    {
      icon: TrendingUp,
      title: "Scale Operations Efficiently",
      description:
        "Automated inventory processes handle growth seamlessly without proportional increases in management complexity or overhead.",
      stat: "Auto",
      statLabel: "Scaling",
    },
    {
      icon: BarChart3,
      title: "Make Data-Driven Purchasing Decisions",
      description:
        "Base purchasing on real demand patterns, analytics, and insights rather than guesswork — for better turnover and profit margins.",
      stat: "AI",
      statLabel: "Insights",
    },
    {
      icon: MapPin,
      title: "Streamline Operations Across Locations",
      description:
        "Gain unified visibility across all warehouses and stores with smart transfer recommendations for balanced stock levels.",
      stat: "Multi",
      statLabel: "Location",
    },
  ];

  // ⚠️ The Hidden Costs of Poor Inventory Management
  const pitfalls = [
    {
      icon: DollarSign,
      title: "Cash Flow Strangulation",
      description:
        "Excess inventory ties up valuable working capital that could be used for growth opportunities.",
      solution:
        "Smart inventory management ensures every rupee of stock is working for your business.",
    },
    {
      icon: Frown,
      title: "Customer Frustration from Stockouts",
      description:
        "Repeatedly running out of products damages customer relationships and long-term loyalty.",
      solution:
        "Our system predicts demand and ensures you never disappoint your customers again.",
    },
    {
      icon: Lock,
      title: "Carrying Cost Accumulation",
      description:
        "Storage, insurance, handling, and obsolescence costs quickly erode profit margins.",
      solution:
        "Track and minimize carrying costs through automated alerts and turnover analytics.",
    },
    {
      icon: Sliders,
      title: "Manual Process Inefficiency",
      description:
        "Spreadsheet-based inventory tracking leads to human errors, delays, and poor scalability.",
      solution:
        "Automate and centralize your inventory operations with intelligent process control.",
    },
    {
      icon: FileWarning,
      title: "Inaccurate Financial Reporting",
      description:
        "Poor tracking makes it impossible to calculate accurate cost of goods sold or profitability by product.",
      solution:
        "Real-time valuation ensures precise financial data for better strategic planning.",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full animate-pulse opacity-30"></div>
        <div
          className="absolute bottom-20 left-20 w-80 h-80 border-2 border-blue-300 rounded-full animate-pulse opacity-20"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Business Benefits of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Smart Inventory Management
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world advantages that enhance cash flow, efficiency, and
            customer satisfaction while reducing operational costs.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-24 mb-32">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isLeft = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : `opacity-0 ${isLeft ? "-translate-x-10" : "translate-x-10"}`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon Section */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${
                          isActive ? "-rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-xs text-gray-600 font-semibold whitespace-nowrap">
                          {benefit.statLabel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">
                      Benefit {index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pitfalls Section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            The Hidden Costs of{" "}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Poor Inventory Management
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common financial and operational pitfalls caused by outdated or
            manual inventory practices — and how smart systems fix them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {pitfalls.map((pitfall, index) => {
            const Icon = pitfall.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-6 mb-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-500 w-20 h-12 rounded-xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {pitfall.title}
                    </h4>
                    <p className="text-gray-600 mb-2">{pitfall.description}</p>
                    <p className="text-blue-700 font-semibold">
                      {pitfall.solution}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
