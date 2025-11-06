"use client";
import { useState, useEffect } from "react";
import {
  Smartphone,
  HeartHandshake,
  DollarSign,
  Workflow,
  Layers,
  BarChart3,
} from "lucide-react";

export default function ADSBenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Smartphone,
      title: "Engage Customers Anytime, Anywhere",
      description:
        "Mobile apps put your business directly into customers’ hands, enabling engagement opportunities that websites can’t match. Push notifications, location-based features, and personalized experiences build stronger relationships.",
      stat: "24/7",
      statLabel: "Customer Access",
    },
    {
      icon: HeartHandshake,
      title: "Improve Brand Loyalty & Customer Experience",
      description:
        "Well-designed mobile apps create daily touchpoints that strengthen brand trust. Personalized experiences, convenience, and consistent value encourage customers to return again and again.",
      stat: "90%",
      statLabel: "Customer Retention",
    },
    {
      icon: DollarSign,
      title: "Unlock New Revenue Streams & Business Models",
      description:
        "Apps enable new monetization options like subscriptions, in-app purchases, and premium services. Direct relationships with users increase lifetime value and revenue predictability.",
      stat: "+35%",
      statLabel: "Revenue Growth",
    },
    {
      icon: Workflow,
      title: "Streamline Internal Operations & Productivity",
      description:
        "Enterprise mobile apps eliminate paperwork and manual data entry. Real-time access to business systems improves team productivity, data accuracy, and decision-making speed.",
      stat: "2×",
      statLabel: "Efficiency Boost",
    },
    {
      icon: Layers,
      title: "Build Scalable Foundations for Future Innovation",
      description:
        "Modern app architecture supports growth without needing full rebuilds. Add new features, scale users, and evolve business models efficiently to stay ahead of changing markets.",
      stat: "∞",
      statLabel: "Scalability",
    },
    {
      icon: BarChart3,
      title: "Generate Valuable Customer Data & Insights",
      description:
        "Apps provide detailed analytics about customer behavior and preferences. These insights inform better marketing, smarter product development, and more effective personalization.",
      stat: "100%",
      statLabel: "Data Visibility",
    },
  ];

  return (
    <section className="relative bg-white py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-50 to-transparent"></div>

        {/* Animated circles */}
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
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Business Benefits That Drive{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Real Growth
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how mobile applications create measurable value across
            customer engagement, operations, and business innovation.
          </p>
        </div>

        {/* Benefits Layout */}
        <div className="space-y-24">
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
                    : `opacity-0 ${
                        isLeft ? "-translate-x-10" : "translate-x-10"
                      }`
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Icon and Stat Side */}
                <div className="lg:w-5/12 flex justify-center">
                  <div className="relative">
                    <div className="relative w-62 h-62 flex items-center justify-center">
                      {/* Animated rings */}
                      <div
                        className={`absolute inset-0 rounded-full border-4 border-blue-200 transition-transform duration-700 ${
                          isActive ? "rotate-180" : "rotate-0"
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-8 rounded-full border-4 border-blue-300 transition-transform duration-700 ${
                          isActive ? "-rotate-180" : "rotate-0"
                        }`}
                        style={{ animationDelay: "0.2s" }}
                      ></div>

                      {/* Center icon */}
                      <div className="relative z-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-500 hover:scale-110">
                        <Icon className="w-16 h-16 text-white" />
                      </div>

                      {/* Stat badge */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border-4 border-blue-100 px-6 py-4 transform transition-all duration-500 hover:scale-110">
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

                {/* Text Content Side */}
                <div className="lg:w-7/12">
                  <div className="max-w-2xl">
                    <div className="inline-block mb-4">
                      <span className="text-sm font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                        Benefit {index + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-md text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-8 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-700 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isActive ? "100%" : "0%",
                          transitionDelay: "200ms",
                        }}
                      ></div>
                    </div>
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
