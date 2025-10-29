"use client";

import React, { useState, useEffect } from "react";
import {
  PhoneCall,
  Clock,
  MessageSquare,
  TrendingUp,
  Zap,
  CheckCircle,
  Headphones,
} from "lucide-react";
import Link from "next/link";

export default function AICallingIntroSection() {
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
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "24/7 Availability",
      description: "Never miss a call, day or night",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Human-Like Conversations",
      description: "Natural, contextual responses",
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Scalable Growth",
      description: "Handle unlimited calls simultaneously",
    },
  ];

  const benefits = [
    { text: "Never misses a call or opportunity", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { text: "Handles inbound and outbound calls", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { text: "Sounds remarkably human", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> },
    { text: "Consistent exceptional service", icon: <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> },
  ];

  return (
    <section
      className="relative bg-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
      aria-label="AI Calling Agent Introduction"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />

      {/* Glowing Orbs */}
      <div
        className="absolute top-10 left-5 w-48 h-48 sm:w-96 sm:h-96 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDuration: "6s" }}
      />
      <div
        className="absolute bottom-10 right-5 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ animationDuration: "8s", animationDelay: "2s" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* grid stack for mobile, 2 columns for lg */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* LEFT: Text */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 text-center lg:text-left">
              Never Miss a Call,
              <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Never Miss an Opportunity
              </span>
            </h2>

            {/* Story Box */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="ml-6 sm:ml-8">
                <p className="text-gray-700 leading-relaxed mb-3 text-sm sm:text-base">
                  <span className="font-bold text-blue-600">Picture this:</span>{" "}
                  It’s 2 AM, and a potential customer calls your business with an urgent question.  
                  Instead of a voicemail beep, they’re greeted by a friendly AI agent who understands their needs, provides answers, and even schedules a follow-up call.
                </p>
                <p className="text-xs sm:text-sm text-gray-600 italic">
                  That’s the power of AI calling agents—your tireless voice workforce.
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center lg:text-left">
              At <span className="font-bold text-blue-600">OpenSoft AI</span>, we develop intelligent calling agents that sound remarkably human while handling both inbound and outbound interactions.  
              Whether you’re managing support or scaling sales outreach, our AI agents become your growth engine.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-3 sm:p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                >
                  <div className="text-blue-600 mt-0.5">{benefit.icon}</div>
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/contact-us"
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Get Your AI Calling Agent</span>
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
          </div>

          {/* RIGHT: Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl shadow-blue-500/20 max-w-sm mx-auto lg:max-w-none">
              {/* Rings + Headphone */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <div
                    className="absolute inset-0 border-2 border-blue-300 rounded-full animate-ping opacity-75"
                    style={{ animationDuration: "3s" }}
                  />
                  <div
                    className="absolute inset-4 border-2 border-blue-400 rounded-full animate-ping opacity-75"
                    style={{ animationDuration: "3s", animationDelay: "1s" }}
                  />
                  <div
                    className="absolute inset-8 border-2 border-blue-500 rounded-full animate-ping opacity-75"
                    style={{ animationDuration: "3s", animationDelay: "2s" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                      <Headphones className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div
                className="absolute top-6 left-4 sm:top-8 sm:left-8 w-32 sm:w-40 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                style={{ animationDuration: "4s" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">
                    24/7 Active
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  Always available
                </p>
              </div>

              <div
                className="absolute bottom-10 right-4 sm:bottom-12 sm:right-8 w-36 sm:w-44 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">
                    100% Uptime
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  Never takes a break
                </p>
              </div>

              <div
                className="absolute top-1/2 right-4 sm:right-8 w-32 sm:w-40 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "2s" }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="font-bold text-gray-900 text-xs sm:text-sm">
                    Human-like
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-gray-600">
                  Natural conversation
                </p>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
              {features.map((feature, i) => (
                <div
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`relative p-3 sm:p-4 rounded-2xl border transition-all duration-500 cursor-pointer text-center ${
                    activeFeature === i
                      ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-white border-blue-100 hover:border-blue-300"
                  }`}
                >
                  <div
                    className={`mx-auto w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-colors ${
                      activeFeature === i
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h4
                    className={`text-[10px] sm:text-xs font-bold mb-0.5 ${
                      activeFeature === i ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h4>
                  <p
                    className={`text-[10px] sm:text-xs ${
                      activeFeature === i ? "text-blue-100" : "text-gray-600"
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

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
