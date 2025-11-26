"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  BarChart3,
  Brain,
  Lightbulb,
  Compass,
  TrendingUp,
  CheckCircle,
  Target,
  LineChart,
} from "lucide-react";
import Link from "next/link";

export default function AIConsultingSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Strategic Roadmapping",
      description: "Create clear, actionable AI plans that align with goals.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Turn your business data into intelligent decisions.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ROI-Focused Execution",
      description: "Deliver measurable impact — not just experimentation.",
    },
  ];

  const benefits = [
    {
      text: "Avoid costly AI missteps and unclear strategies",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Bridge the gap between business goals and AI tools",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Build scalable, long-term AI roadmaps",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Turn AI into a real competitive advantage",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* SEO Metadata */}
     
      <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Subtle Animated Glow */}
        <div className="absolute top-24 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10 animate-pulse" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - Text Content */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
                Why Every Business Needs{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                  Strategic AI Consulting Today
                </span>
              </h2>

              {/* Story Box */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-500/10">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <LineChart className="w-6 h-6" />
                </div>

                <div className="ml-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Here’s the thing about AI adoption — it’s not just about jumping
                    on the latest tech trend. It’s about making smart, strategic
                    decisions that actually move your business forward. And honestly?
                    That’s where most companies stumble.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    We’ve seen too many businesses rush into AI projects without a
                    clear roadmap — ending up with expensive systems that don’t
                    deliver real value.
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-md md:text-lg text-gray-600 leading-relaxed">
                That’s exactly why{" "}
                <span className="font-bold text-blue-600">AI consulting</span> has
                become so crucial. At{" "}
                <span className="font-bold text-blue-600">OpenSoftAI</span>, we help
                organizations cut through the hype and build AI strategies that
                actually work — grounded in your business needs, data reality, and
                growth goals. Think of us as your{" "}
                <span className="font-semibold">AI strategy partners</span>, helping
                you navigate the complex world of artificial intelligence and maximize
                your return on every AI investment.
              </p>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-blue-600 mt-0.5 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <Target className="w-5 h-5" />
                <span className="text-sm md:text-md">Book Your AI Strategy Session</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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

            {/* RIGHT SIDE - Visual */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl shadow-blue-500/20">
                {/* Central Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    <div
                      className="absolute inset-0 border-2 border-blue-300 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s" }}
                    />
                    <div
                      className="absolute inset-4 border-2 border-indigo-400 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s", animationDelay: "1s" }}
                    />
                    <div
                      className="absolute inset-8 border-2 border-blue-500 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s", animationDelay: "2s" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                        <BarChart3 className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Info Cards */}
                <div
                  className="absolute top-8 left-8 w-44 bg-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                  style={{ animationDuration: "4s" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Compass className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      Clear Roadmap
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">From idea to execution</p>
                </div>

                <div
                  className="absolute bottom-12 right-2 w-44 bg-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      Smarter Insights
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Decisions that matter</p>
                </div>

                <div
                  className="absolute bottom-0 left-2 w-40 bg-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      Strategic Clarity
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">AI with purpose</p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`relative p-4 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      activeFeature === index
                        ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 scale-105"
                        : "bg-white border-blue-100 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                        activeFeature === index
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h4
                      className={`text-xs font-bold mb-1 ${
                        activeFeature === index ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`text-xs ${
                        activeFeature === index
                          ? "text-blue-100"
                          : "text-gray-600"
                      }`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </section>
    </>
  );
}
