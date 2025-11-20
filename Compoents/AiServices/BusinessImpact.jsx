"use client";

import { useState, useEffect } from "react";
import {
  Zap,
  DollarSign,
  Trophy,
  Rocket,
  ArrowRight,
  BarChart3,
} from "lucide-react";
import Head from "next/head";

export default function BusinessImpactSection() {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const impacts = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Operational Efficiency",
      stat: "30-50%",
      statLabel: "Efficiency Improvement",
      description:
        "Automate repetitive tasks and complex decision-making processes, freeing your team to focus on strategic initiatives.",
      highlight:
        "Our clients typically see 30–50% efficiency improvements in AI-enhanced workflows.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Cost Reduction",
      stat: "ROI+",
      statLabel: "Positive Return",
      description:
        "Reduce manual labor costs, minimize errors, and optimize resource allocation.",
      highlight:
        "Smart AI systems pay for themselves by eliminating waste and improving accuracy.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Decision Making",
      stat: "100%",
      statLabel: "Insight-Based",
      description: "Transform raw data into actionable insights.",
      highlight:
        "Make strategic decisions backed by predictive analytics rather than gut feelings.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Competitive Advantage",
      stat: "1st",
      statLabel: "Market Position",
      description:
        "Stay ahead of competitors with AI capabilities they can’t easily replicate.",
      highlight: "Custom AI becomes your unique business differentiator.",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Scalable Growth",
      stat: "∞",
      statLabel: "Unlimited Scale",
      description:
        "AI systems that learn and improve over time, handling increased workload without proportional cost increases.",
      highlight: "Scale your operations without scaling your costs.",
      color: "from-blue-500 to-blue-600",
    },
  ];

  return (
    <>
      {/* ✅ SEO Optimization */}
     

      {/* ✅ Main Section */}
      <section
        className="relative bg-gradient-to-b from-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-label="Business Impact of Custom AI Development"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated Orbs */}
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "2s" }}
        />

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6">
              The Business Impact of {" "}
              <span className=" mt-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Custom AI Development
              </span>
            </h2>
            <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
              See how businesses leverage AI to accelerate growth, improve
              efficiency, and unlock new market opportunities.
            </p>
          </header>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {impacts.map((impact, index) => (
              <article
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform:
                    activeCard === index ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${impact.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500`}
                >
                  {impact.icon}
                </div>

                {/* Stat Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
                  <span className="text-xl font-bold text-blue-600">
                    {impact.stat}
                  </span>
                  <span className="text-xs text-gray-600">
                    {impact.statLabel}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {impact.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {impact.description}
                </p>

                {/* Highlight Box */}
                <div
                  className={`relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 transition-all duration-500 ${
                    activeCard === index
                      ? "opacity-100 max-h-40"
                      : "opacity-90 max-h-32"
                  }`}
                >
                  <p className="text-sm font-medium text-blue-700 leading-relaxed">
                    {impact.highlight}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div
                  className={`absolute bottom-8 right-8 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white transition-all duration-500 ${
                    activeCard === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
