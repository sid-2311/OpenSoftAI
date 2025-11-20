"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Cpu,
  Workflow,
  BarChart3,
  Clock,
  CheckCircle,
  Gauge,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AIWorkflowAutomationSection() {
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
      icon: <Workflow className="w-6 h-6" />,
      title: "Smart Workflow Automation",
      description:
        "Streamline repetitive processes like data entry, reporting, and updates using AI-driven logic.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Predictive Optimization",
      description:
        "AI systems that learn from your operations, predict issues, and optimize performance continuously.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Seamless Integration",
      description:
        "Connect effortlessly with your existing tools and systems for unified, intelligent automation.",
    },
  ];

  const benefits = [
    {
      text: "Eliminate repetitive manual tasks with AI automation",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Boost productivity and operational efficiency",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Enhance accuracy and reduce human error",
      icon: <CheckCircle className="w-5 h-5" />,
    },
    {
      text: "Empower your team to focus on strategic growth",
      icon: <CheckCircle className="w-5 h-5" />,
    },
  ];

  return (
    <>
      <Head>
        <title>
          AI Workflow Automation | Scale Smarter with OpenSoftAI
        </title>
        <meta
          name="description"
          content="OpenSoftAI builds intelligent workflow automation systems that eliminate repetitive work, boost productivity, and make your business operate smarter and faster."
        />
        <meta
          name="keywords"
          content="AI workflow automation, process automation, intelligent automation, business AI, OpenSoftAI"
        />
      </Head>

      <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated Glow */}
        <div className="absolute top-24 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-24 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-10 animate-pulse" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - Text */}
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                Stop Wrestling with Repetitive Tasks and{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                  Start Scaling Your Business
                </span>
              </h2>

              {/* Story Box */}
              <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-500/10">
                <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Cpu className="w-6 h-6" />
                </div>

                <div className="ml-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Let's be honest – how much time does your team spend on
                    repetitive, manual tasks that could easily be automated?
                    If you're like most businesses, it's probably more than
                    you'd care to admit. Tasks like data entry, report
                    generation, invoice processing, and status updates consume
                    countless hours that could be spent on strategic,
                    revenue-generating activities.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    That’s where AI workflow automation changes everything.
                    At OpenSoftAI, we develop intelligent automation systems
                    that don’t just eliminate manual tasks — they make your
                    entire business operate smarter, faster, and more efficiently.
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                The beauty of modern AI workflow automation is that it goes far
                beyond simple task automation. We build intelligent workflows
                that can make decisions, adapt to changing conditions, and
                integrate seamlessly with your existing systems. The result?
                Your team focuses on what they do best — while AI handles the
                routine work that slows down growth.
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
                <span>Request an Automation Demo</span>
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

            {/* RIGHT SIDE - Visual Animation */}
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
                      className="absolute inset-4 border-2 border-blue-400 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s", animationDelay: "1s" }}
                    />
                    <div
                      className="absolute inset-8 border-2 border-blue-500 rounded-full animate-ping opacity-75"
                      style={{ animationDuration: "3s", animationDelay: "2s" }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/50 transform hover:rotate-12 hover:scale-110 transition-all duration-500">
                        <Zap className="w-16 h-16 text-white" />
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
                      <Workflow className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Smart Flows</span>
                  </div>
                  <p className="text-xs text-gray-600">Automate repetitive steps</p>
                </div>

                <div
                  className="absolute bottom-12 right-2 w-44 bg-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "1s" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Cpu className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">AI Decisions</span>
                  </div>
                  <p className="text-xs text-gray-600">Adaptive intelligence</p>
                </div>

                <div
                  className="absolute bottom-0 left-2 w-40 bg-white rounded-2xl p-4 shadow-lg shadow-blue-500/20 border border-blue-100 animate-bounce"
                  style={{ animationDuration: "4s", animationDelay: "2s" }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-4 h-4 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">Insights</span>
                  </div>
                  <p className="text-xs text-gray-600">Performance analytics</p>
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

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      </section>
    </>
  );
}
