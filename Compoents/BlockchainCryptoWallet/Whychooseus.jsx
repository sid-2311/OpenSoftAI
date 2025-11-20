"use client";
import { useState, useEffect } from "react";
import {
  ShieldCheck,
  BarChart,
  FileSearch,
  Layers,
  Clock,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function   WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      icon: BarChart,
      title: "Proven Track Record in High-Stakes Projects",
      description:
        "We've built crypto platforms that have processed billions in trading volume, managed millions of user accounts, and operated flawlessly through market volatility and regulatory changes. Our track record speaks for itself.",
      highlights: [
        "Billions in Volume",
        "Millions of Users",
        "Stable Under Pressure",
        "Regulatory Resilience",
      ],
      stats: "Proven Results",
    },
    {
      icon: ShieldCheck,
      title: "Security-First Development Philosophy",
      description:
        "Every line of code is written with security in mind. Our process includes threat modeling, secure code reviews, penetration testing, and continuous monitoring to ensure your platform is bulletproof.",
      highlights: [
        "Threat Modeling",
        "Penetration Testing",
        "Secure Code Reviews",
        "Continuous Monitoring",
      ],
      stats: "Security First",
    },
    {
      icon: FileSearch,
      title: "Deep Regulatory Knowledge",
      description:
        "Crypto regulations are complex and constantly evolving. Our team stays up-to-date globally and builds compliance into every aspect of platform development — not as an afterthought.",
      highlights: [
        "RegTech Expertise",
        "AML/KYC Integration",
        "Licensing Readiness",
        "Global Compliance",
      ],
      stats: "Compliance Ready",
    },
    {
      icon: Layers,
      title: "End-to-End Development Expertise",
      description:
        "From initial architecture design to post-launch optimization, we handle every aspect of crypto platform development. Our full-stack expertise ensures seamless integration and consistent quality.",
      highlights: [
        "Architecture Design",
        "Full-Stack Development",
        "Integration",
        "Optimization",
      ],
      stats: "Full Lifecycle",
    },
    {
      icon: Clock,
      title: "24/7 Support and Monitoring",
      description:
        "Crypto markets never sleep — and neither do we. Our platforms include comprehensive monitoring, alerting, and dedicated support to ensure maximum uptime and rapid response.",
      highlights: [
        "Real-Time Monitoring",
        "Instant Alerts",
        "Global Support",
        "Maximum Uptime",
      ],
      stats: "Always On",
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
          <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Why Fintech Leaders{" "}
            <span className="mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Choose OpenSoftAI
            </span>
          </h2>
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
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                        isActive ? "scale-110 rotate-6" : "group-hover:scale-105"
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
                <h3 className="text-3xl font-bold text-white mb-3">
                  Ready to Build the Future of Fintech?
                </h3>
                <p className="text-blue-100 text-lg">
                  Join industry leaders who trust OpenSoftAI to power secure,
                  compliant, and high-performing financial platforms.
                </p>
              </div>

              <div className="flex justify-center md:justify-end">
                <Link href="/contact-us" className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
