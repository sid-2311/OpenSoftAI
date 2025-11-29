"use client";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Code2,
  Layers,
  Eye,
  Award,
  ArrowRight,
} from "lucide-react";

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      icon: Code2,
      title: "Built by Blockchain Pioneers",
      description:
        "OpenSoftAI has been building in the blockchain space since before it was cool. We've seen what works — and what doesn’t. Our team combines deep technical expertise with real-world business understanding to help you build solutions that last.",
      highlights: ["Smart Contracts", "DeFi", "NFTs", "Web3 Infrastructure"],
      stats: "Blockchain Experts",
    },
    {
      icon: Layers,
      title: "Business-Driven Architecture",
      description:
        "Our approach is simple: your business model and user needs come first. We design technical solutions that directly support your strategy, ensuring your token or blockchain product serves your business — not the other way around.",
      highlights: [
        "Business Focused",
        "User-Centric Design",
        "Scalable Solutions",
        "Custom Architecture",
      ],
      stats: "Strategic Design",
    },
    {
      icon: Eye,
      title: "Radical Transparency",
      description:
        "Transparency matters. You’ll always know exactly what we’re building and why. We don’t hide behind jargon or black box development — every key decision is explained in plain English so you stay in control of your project.",
      highlights: [
        "Full Visibility",
        "Plain-English Communication",
        "Collaborative Process",
        "Trusted Partnership",
      ],
      stats: "Open Process",
    },
    {
      icon: ShieldCheck,
      title: "Security & Quality by Design",
      description:
        "Quality is non-negotiable. Every blockchain solution we deliver goes through rigorous testing, follows best security practices, and is built to be audit-ready from day one — complete with comprehensive documentation.",
      highlights: [
        "Audit-Ready Code",
        "Secure Development",
        "Quality Assurance",
        "Regulatory Compliance",
      ],
      stats: "Audit-Ready",
    },
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Why Choose{" "}
            <span className="mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              OpenSoftAI
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-slate-600 text-md">
            OpenSoftAI has been building in the blockchain space since before it
            was cool. We combine technical depth with strategic insight — building
            blockchain and AI solutions that actually move your business forward.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <div
                  className={`relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 transition-all duration-500 h-full ${
                    isActive
                      ? "border-blue-500 shadow-2xl scale-[1.02]"
                      : "border-blue-100 shadow-lg hover:border-blue-300 hover:shadow-xl"
                  }`}
                >
                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-bl-full transition-opacity duration-500 ${
                      isActive ? "opacity-20" : ""
                    }`}
                  ></div>

                  {/* Icon Badge */}
                  <div className="relative mb-6">
                    <div
                      className={`inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg transition-all duration-500 ${
                        isActive
                          ? "scale-110 rotate-6"
                          : "group-hover:scale-105"
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="absolute -top-2 -right-2 bg-blue-100 border-2 border-blue-300 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-blue-800">
                        {reason.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-md leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {reason.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-700 group-hover:bg-blue-200"
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`flex items-center gap-2 text-blue-700 font-semibold transition-all duration-300 ${
                      isActive ? "gap-4" : "group-hover:gap-3"
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Launch Your Blockchain Project?
                </h3>
                <p className="text-blue-100 text-md md:text-lg">
                  Join 50+ successful token projects and enterprises who trust
                  OpenSoftAI to deliver secure, scalable, and audit-ready
                  blockchain solutions.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <button className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
