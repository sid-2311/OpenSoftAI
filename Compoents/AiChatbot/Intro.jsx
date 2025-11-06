"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  MessageSquare,
  Brain,
  Lightbulb,
  Sparkles,
  Zap,
  CheckCircle,
  Bot,
} from "lucide-react";
import Link from "next/link";

export default function AIChatbotIntroSection() {
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
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Understands Context",
      description: "Recognizes intent beyond keywords",
    },
    {
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Natural Conversations",
      description: "Adapts like a real human agent",
    },
    {
      icon: <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Learns from Interaction",
      description: "Improves with every chat session",
    },
  ];

  const benefits = [
    {
      text: "Understands complex customer intent",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Delivers personalized responses instantly",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    { text: "Reduces customer service load", icon: <CheckCircle className="w-5 h-5" /> },
    {
      text: "Continuously improves with feedback",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>AI Chatbot Development | Smarter Conversations</title>
        <meta
          name="description"
          content="Build intelligent AI chatbots that understand context and improve with every interaction."
        />
      </Head>

      <section
        className="relative bg-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        aria-label="AI Chatbot Introduction"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Glowing Orbs */}
        <div
          className="absolute top-20 left-10 w-60 sm:w-96 h-60 sm:h-96 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute bottom-10 right-5 w-60 sm:w-96 h-60 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* LEFT: Text Content */}
            <div
              className={`space-y-8 transition-all duration-1000 text-center lg:text-left ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Ever Wonder Why Some Chatbots Feel Like Talking to a Wall?
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Let’s Talk About the Ones That Don’t.
                </span>
              </h2>

              {/* Story Box */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-500/10 text-left">
                <div className="absolute -top-3 -left-3 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <div className="mt-2 sm:ml-6">
                  <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                    Last week, I watched a customer try to return a shirt through an
                    e-commerce chatbot. After fifteen minutes of circular conversations,
                    she gave up and called customer service.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Here’s the thing about chatbots—they’re either incredibly helpful
                    or completely useless. There’s not much middle ground.
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                At{" "}
                <span className="font-bold text-blue-600">OpenSoft AI</span>, we’ve
                been building chatbots that *actually help* for over six years.
                The difference lies in{" "}
                <span className="font-semibold">understanding context</span> — because
                real conversations aren’t scripted.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-xl p-3 sm:p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <div className="text-blue-600 mt-0.5 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="flex justify-center lg:justify-start">
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto justify-center"
                >
                  <Bot className="w-5 h-5" />
                  <span>Build Your Smart Chatbot</span>
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

            {/* RIGHT: Visual Side */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl shadow-blue-500/20 mx-auto max-w-[320px] sm:max-w-[400px] md:max-w-none">
                {/* Center Icon Animation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 sm:w-64 h-48 sm:h-64">
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
                      <div className="w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                        <MessageSquare className="w-10 sm:w-16 h-10 sm:h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="hidden sm:block absolute top-8 left-8 w-32 sm:w-40 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">
                      Understands You
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Knows what you mean</p>
                </div>

                <div className="hidden sm:block absolute bottom-10 right-8 w-36 sm:w-44 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce delay-1000">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Lightbulb className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">
                      Learns Fast
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Gets smarter over time</p>
                </div>

                <div className="hidden sm:block absolute top-1/2 right-6 sm:right-8 w-32 sm:w-40 bg-white rounded-2xl p-3 sm:p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce delay-2000">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">
                      Feels Human
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">Talks naturally</p>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`relative p-3 sm:p-4 rounded-2xl border transition-all duration-500 cursor-pointer text-center ${
                      activeFeature === index
                        ? "bg-blue-600 border-blue-600 shadow-lg shadow-blue-500/30 scale-105"
                        : "bg-white border-blue-100 hover:border-blue-300"
                    }`}
                  >
                    <div
                      className={`w-8 sm:w-10 h-8 sm:h-10 rounded-xl flex items-center justify-center mb-2 sm:mb-3 transition-colors mx-auto ${
                        activeFeature === index
                          ? "bg-white/20 text-white"
                          : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <h4
                      className={`text-[10px] sm:text-xs font-bold mb-1 ${
                        activeFeature === index ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`text-[10px] sm:text-xs ${
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

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </section>
    </>
  );
}
