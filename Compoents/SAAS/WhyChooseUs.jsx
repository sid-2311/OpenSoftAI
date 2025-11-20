"use client";
import { useState, useEffect } from "react";
import {
  Briefcase,
  Layers,
  CreditCard,
  Smile,
  Code2,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Briefcase,
      title: "We Think Like SaaS Business Owners",
      description:
        "Our development approach considers not just technical requirements but key business metrics like CAC, LTV, and churn. We build SaaS products that support long-term profitability.",
    },
    {
      icon: Layers,
      title: "Proven Multi-Tenant Architecture",
      description:
        "We’ve engineered SaaS systems that efficiently serve thousands of users with automatic data isolation, performance optimization, and secure customization support.",
    },
    {
      icon: CreditCard,
      title: "Subscription Business Expertise",
      description:
        "From free trials to enterprise contracts, we understand SaaS pricing complexity and implement billing systems that handle real-world subscription scenarios effortlessly.",
    },
    {
      icon: Smile,
      title: "Customer Success Built-In",
      description:
        "We design onboarding flows, help systems, and communication tools that reduce support load while increasing user satisfaction and retention.",
    },
    {
      icon: Code2,
      title: "API-First Development Philosophy",
      description:
        "Every SaaS platform we build is integration-ready from day one, enabling seamless connectivity with your customers’ existing tools and workflows.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50 to-white py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
              OpenSoftAI
            </span>{" "}
            for SaaS Development
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "100K+", label: "Active SaaS Users Served" },
            { value: "99.9%", label: "Uptime Reliability" },
            { value: "24/7", label: "Technical Support" },
            { value: "10+", label: "Years of SaaS Expertise" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/contact-us" className="group bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Start Your SaaS Journey
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
