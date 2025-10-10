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
import Head from "next/head";

export default function AdvancedFeaturesSection() {
  const [expandedFeature, setExpandedFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: <MessageCircle className="w-7 h-7" />,
      title: "Natural, Human-Like Conversations",
      subtitle: "Context-Aware AI Communication",
      description:
        "Our AI agents don't sound like robots reading scripts. They understand context, handle interruptions gracefully, and adapt their communication style based on the caller's tone and preferences.",
      color: "blue-500",
      details: [],
    },
    {
      id: 1,
      icon: <Globe className="w-7 h-7" />,
      title: "Multi-Language Mastery",
      subtitle: "Break Down Global Barriers",
      description:
        "Communicate seamlessly across the globe with AI that speaks your customers' language.",
      color: "blue-600",
      details: [
        {
          icon: <Globe className="w-4 h-4" />,
          text: "Global Communication: Support customers in 25+ languages with native-level fluency",
        },
        {
          icon: <Sparkles className="w-4 h-4" />,
          text: "Cultural Awareness: Understand regional communication preferences and cultural nuances",
        },
        {
          icon: <MessageCircle className="w-4 h-4" />,
          text: "Real-Time Translation: Bridge language barriers seamlessly during conversations",
        },
      ],
    },
    {
      id: 2,
      icon: <Layers className="w-7 h-7" />,
      title: "Seamless System Integration",
      subtitle: "Works With Your Tech Stack",
      description:
        "Integrate effortlessly with your existing business systems for a unified workflow.",
      color: "blue-700",
      details: [
        {
          icon: <Database className="w-4 h-4" />,
          text: "CRM Synchronization: Automatic logging of all call details, outcomes, and follow-up actions",
        },
        {
          icon: <Layers className="w-4 h-4" />,
          text: "ERP Connectivity: Access real-time inventory, pricing, and customer data during calls",
        },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Calendar Integration: Smart scheduling that considers time zones, availability, and preferences",
        },
        {
          icon: <Sparkles className="w-4 h-4" />,
          text: "Custom API Connections: Work with your existing business software ecosystem",
        },
      ],
    },
    {
      id: 3,
      icon: <Mic className="w-7 h-7" />,
      title: "Brand-Personalized Voice Profiles",
      subtitle: "Your Brand, Your Voice",
      description:
        "Create unique voice personalities that authentically represent your brand identity.",
      color: "blue-600",
      details: [
        {
          icon: <Mic className="w-4 h-4" />,
          text: "Custom Voice Creation: Develop unique voice personalities that match your brand identity",
        },
        {
          icon: <MessageCircle className="w-4 h-4" />,
          text: "Tone Adaptation: Adjust formality, enthusiasm, and communication style per use case",
        },
        {
          icon: <Sparkles className="w-4 h-4" />,
          text: "Script Intelligence: AI agents understand your business deeply, not just generic responses",
        },
        {
          icon: <CheckCircle className="w-4 h-4" />,
          text: "Personality Consistency: Maintain brand voice across thousands of daily interactions",
        },
      ],
    },
    {
      id: 4,
      icon: <Shield className="w-7 h-7" />,
      title: "Enterprise-Grade Security & Compliance",
      subtitle: "Trust & Protection Built-In",
      description:
        "Industry-leading security standards protect your data and ensure regulatory compliance.",
      color: "blue-500",
      details: [
        {
          icon: <Lock className="w-4 h-4" />,
          text: "Data Encryption: All voice data encrypted in transit and at rest",
        },
        {
          icon: <Shield className="w-4 h-4" />,
          text: "HIPAA Compliance: Healthcare-ready security for sensitive medical information",
        },
        {
          icon: <Database className="w-4 h-4" />,
          text: "PCI DSS Standards: Secure handling of payment and financial data",
        },
        {
          icon: <Globe className="w-4 h-4" />,
          text: "GDPR Alignment: Full compliance with international data privacy regulations",
        },
      ],
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Advanced AI Calling Features | Intelligent Voice Automation</title>
        <meta
          name="description"
          content="Explore the advanced AI calling features that make our voice agents smarter — including multi-language mastery, CRM integration, and enterprise-grade security."
        />
        <meta
          name="keywords"
          content="AI voice agents, natural conversation AI, multilingual AI, CRM integration, secure AI calls, enterprise voice automation"
        />
      </Head>

      <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Advanced Features
              </span>
              <span className="block mt-2">
                That Set Our AI Calling Agents Apart
              </span>
            </h2>
          </div>

          {/* Features Layout */}
          <div className="space-y-12">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`group relative ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Icon Side */}
                  <div className="lg:w-2/5 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400 rounded-full blur-3xl opacity-20 scale-150" />
                      <div className="relative w-48 h-48 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-2xl shadow-blue-500/30 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <div className="scale-150">{feature.icon}</div>
                      </div>
                      <div
                        className="absolute inset-0 border-2 border-blue-300 rounded-3xl animate-ping opacity-20"
                        style={{ animationDuration: "3s" }}
                      />
                      <div
                        className="absolute -inset-4 border-2 border-blue-200 rounded-3xl animate-ping opacity-10"
                        style={{
                          animationDuration: "3s",
                          animationDelay: "1s",
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="lg:w-3/5">
                    <div className="bg-white rounded-3xl p-8 lg:p-10 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-300">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                            {feature.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">
                              {feature.title}
                            </h3>
                            <p className="text-sm font-semibold text-blue-600">
                              {feature.subtitle}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>

                      {feature.details.length > 0 && (
                        <div className="space-y-3">
                          {feature.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3 bg-gradient-to-r from-blue-50 to-transparent rounded-xl p-4 border border-blue-100 hover:border-blue-300 transition-all duration-300 group/item"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white group-hover/item:scale-110 transition-transform">
                                {detail.icon}
                              </div>
                              <p className="text-gray-700 leading-relaxed text-sm">
                                <span className="font-bold">
                                  {detail.text.split(":")[0]}:
                                </span>
                                {detail.text.split(":")[1]}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-6 w-0.5 h-12 bg-gradient-to-b from-blue-300 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
