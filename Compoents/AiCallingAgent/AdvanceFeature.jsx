"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  Globe,
  Layers,
  Mic,
  Shield,
  CheckCircle,
  Lock,
  Database,
  Sparkles,
} from "lucide-react";

export default function AdvancedFeaturesSection() {
  const features = [
    {
      id: 0,
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Natural, Human-Like Conversations",
      subtitle: "Context-Aware AI Communication",
      description:
        "Our AI agents don't sound like robots reading scripts. They understand context, handle interruptions gracefully, and adapt their communication style based on the caller's tone and preferences.",
      details: [],
    },
    {
      id: 1,
      icon: <Globe className="w-7 h-7" />,
      title: "Multi-Language Mastery",
      subtitle: "Break Down Global Barriers",
      description:
        "Communicate seamlessly across the globe with AI that speaks your customers' language.",
      details: [
        { icon: <Globe className="w-4 h-4" />, text: "Global Communication: Support 25+ languages fluently" },
        { icon: <Sparkles className="w-4 h-4" />, text: "Cultural Awareness: Understand regional nuances" },
        { icon: <MessageCircle className="w-4 h-4" />, text: "Real-Time Translation: Seamless multilingual calls" },
      ],
    },
    {
      id: 2,
      icon: <Layers className="w-7 h-7" />,
      title: "Seamless System Integration",
      subtitle: "Works With Your Tech Stack",
      description:
        "Integrate effortlessly with your existing business systems for a unified workflow.",
      details: [
        { icon: <Database className="w-4 h-4" />, text: "CRM Sync: Log all call details automatically" },
        { icon: <Layers className="w-4 h-4" />, text: "ERP Connectivity: Access live data during calls" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Calendar Integration: Smart scheduling built-in" },
        { icon: <Sparkles className="w-4 h-4" />, text: "Custom API: Works with your software stack" },
      ],
    },
    {
      id: 3,
      icon: <Mic className="w-7 h-7" />,
      title: "Brand-Personalized Voice Profiles",
      subtitle: "Your Brand, Your Voice",
      description:
        "Create unique voice personalities that authentically represent your brand identity.",
      details: [
        { icon: <Mic className="w-4 h-4" />, text: "Custom Voices: Match your brand tone" },
        { icon: <MessageCircle className="w-4 h-4" />, text: "Tone Adaptation: Adjust style dynamically" },
        { icon: <Sparkles className="w-4 h-4" />, text: "Script Intelligence: Knows your business deeply" },
        { icon: <CheckCircle className="w-4 h-4" />, text: "Consistency: Unified voice across interactions" },
      ],
    },
    {
      id: 4,
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise-Grade Security & Compliance",
      subtitle: "Trust & Protection Built-In",
      description:
        "Industry-leading security standards protect your data and ensure regulatory compliance.",
      details: [
        { icon: <Lock className="w-4 h-4" />, text: "Data Encryption: Secure in transit & at rest" },
        { icon: <Shield className="w-4 h-4" />, text: "HIPAA Compliance: Safe for healthcare data" },
        { icon: <Database className="w-4 h-4" />, text: "PCI DSS: Protects financial transactions" },
        { icon: <Globe className="w-4 h-4" />, text: "GDPR Ready: Global data privacy compliance" },
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Advanced Features
            </span>
            <span className="block mt-1 sm:mt-2">
              That Set Our AI Calling Agents Apart
            </span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Designed for performance, personalization, and enterprise-grade reliability.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-16 sm:space-y-20">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col lg:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Icon / Visual */}
              <div className="flex justify-center w-full lg:w-2/5">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
                  <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 scale-150" />
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-xl shadow-blue-500/30 transform transition-transform duration-500 hover:scale-110">
                    <div className="scale-125 sm:scale-150">{feature.icon}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-3/5">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-sm font-semibold text-blue-600">
                          {feature.subtitle}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                      {feature.description}
                    </p>
                  </div>

                  {feature.details.length > 0 && (
                    <div className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-3 sm:p-4 border border-blue-100 hover:border-blue-300 transition-all duration-300"
                        >
                          <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                            {detail.icon}
                          </div>
                          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                            {detail.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
