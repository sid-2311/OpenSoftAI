"use client";
import { useState, useEffect } from "react";
import {
  Salad,
  ClipboardList,
  Users2,
  Star,
  Building2,
  BarChart3,
  Wrench,
  Cpu,
  Frown,
  AlertTriangle,
} from "lucide-react";

export default function RMSImpactSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ✅ Business Benefits Section
  const benefits = [
    {
      icon: Salad,
      title: "Reduce Food Waste and Control Costs",
      description:
        "Precise inventory tracking and automated reordering prevent overordering while ensuring popular items never run out. Track waste and identify cost-saving opportunities.",
      stat: "-20%",
      statLabel: "Waste",
    },
    {
      icon: Users2,
      title: "Optimize Labor Efficiency",
      description:
        "Schedule staff based on actual demand, track productivity, and reduce overtime costs with better workforce planning and management tools.",
      stat: "+15%",
      statLabel: "Efficiency",
    },
    {
      icon: Star,
      title: "Improve Customer Experience Consistently",
      description:
        "Faster order processing, accurate wait estimates, and consistent food quality drive repeat customers and positive reviews.",
      stat: "↑",
      statLabel: "Satisfaction",
    },
    {
      icon: BarChart3,
      title: "Increase Average Order Value",
      description:
        "Integrated upselling suggestions, loyalty rewards, and personalized recommendations boost your revenue per customer visit.",
      stat: "+12%",
      statLabel: "Revenue",
    },
    {
      icon: Building2,
      title: "Scale Operations Without Adding Complexity",
      description:
        "As you open new locations, unified dashboards ensure consistency, oversight, and seamless control without micromanagement.",
      stat: "Multi",
      statLabel: "Location",
    },
    {
      icon: ClipboardList,
      title: "Make Data-Driven Menu Decisions",
      description:
        "Track dish profitability, monitor customer preferences, and optimize your menu based on real sales insights instead of guesswork.",
      stat: "Smart",
      statLabel: "Menu",
    },
  ];

  // ⚠️ Common Pitfalls in Other Restaurant Software
  const pitfalls = [
    {
      icon: Frown,
      title: "Built by People Who’ve Never Worked in a Restaurant",
      description:
        "Many systems are designed by developers who don’t understand real-world restaurant workflows. They fail under pressure.",
      solution: "We design with real chefs, managers, and staff insights.",
    },
    {
      icon: AlertTriangle,
      title: "Tries to Fix Everything and Ends Up Fixing Nothing",
      description:
        "Feature-heavy systems create confusion and downtime instead of simplifying daily operations.",
      solution: "We focus on essential workflows that actually matter.",
    },
    {
      icon: Users2,
      title: "Doesn’t Account for the Human Factor",
      description:
        "Ignoring staff adoption, training, and ease-of-use leads to chaos during peak hours.",
      solution: "We build tools your team actually enjoys using.",
    },
    {
      icon: Cpu,
      title: "Creates Data Silos Instead of Integration",
      description:
        "Managing separate tools for POS, inventory, and accounting increases complexity and errors.",
      solution: "We unify all systems into one connected platform.",
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
          <h2 className="text-5xl md:text-4xl font-bold mb-6">
            Business Benefits That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Impact Your Bottom Line
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real-world advantages that streamline operations, improve
            profitability, and delight your customers.
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
                {/* Icon */}
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

                {/* Text */}
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
          <h3 className="text-4xl font-bold mb-4">
            Why Restaurant Software{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              Often Makes Things Worse
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Common problems with typical restaurant systems — and how our
            approach fixes them.
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
                  <div className="bg-gradient-to-br from-red-400 to-orange-500 w-14 h-14 rounded-xl flex items-center justify-center shadow-md">
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
