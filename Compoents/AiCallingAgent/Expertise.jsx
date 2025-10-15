"use client";

import { useState } from "react";
import {
  Award,
  TrendingUp,
  Users,
  MessageSquare,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Metadata } from "next";

export const metadata = {
  title: "Voice AI Expertise | Smarter Voice Automation Solutions",
  description:
    "Explore our Voice AI expertise—7+ years in voice automation, 2M+ monthly voice interactions, and 150+ successful deployments across industries.",
  keywords:
    "Voice AI, Voice Automation, AI Calling Agent, Speech Recognition, NLP, Customer Support Automation",
};

export default function VoiceAIExpertiseSection() {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    { number: "7+", label: "Years in Voice AI", icon: <Award className="w-5 h-5" /> },
    { number: "150+", label: "Successful Deployments", icon: <TrendingUp className="w-5 h-5" /> },
    { number: "2M+", label: "Monthly Voice Interactions", icon: <MessageSquare className="w-5 h-5" /> },
    { number: "92%", label: "Customer Satisfaction", icon: <Users className="w-5 h-5" /> },
  ];

  const results = [
    {
      metric: "45%",
      label: "Reduced Call Handling Time",
      description: "For customer support teams",
      icon: <Clock className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      metric: "60%",
      label: "Increased Call Completion",
      description: "Compared to human-only teams",
      icon: <Phone className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
    },
    {
      metric: "92%",
      label: "Customer Satisfaction",
      description: "With AI-handled interactions",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-blue-500 to-slate-600",
    },
  ];

  const expertise = [
    "Expert team with PhDs in computational linguistics and voice technology",
    "Strategic partnerships with leading speech synthesis and recognition providers",
    "Advanced natural language processing capabilities",
    "Cutting-edge speech technologies",
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative Background Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-16">
          <h2
            className="text-4xl lg:text-4xl font-bold text-gray-900 mb-6"
            itemProp="name"
          >
            Our Voice AI Expertise:
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
              Mastering the Art of Digital Communication
            </span>
          </h2>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
              className="group relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur transition-opacity duration-300 ${
                  hoveredStat === index ? "opacity-30" : "opacity-20"
                }`}
              />
              <div className="relative bg-white border border-blue-100 rounded-2xl p-6 text-center hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Section */}
        <article
          className="bg-white border border-blue-100 rounded-3xl p-8 lg:p-12 mb-16 shadow-lg"
          itemProp="description"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Deep Voice AI Experience
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </article>

        {/* Results Section */}
        <section>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Proven Results Across Industries
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${result.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {result.icon}
                </div>

                <div className="mb-4">
                  <div
                    className={`text-5xl font-bold bg-gradient-to-r ${result.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {result.metric}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {result.label}
                  </h4>
                  <p className="text-gray-600">{result.description}</p>
                </div>

                <div
                  className={`h-1 rounded-full bg-gradient-to-r ${result.gradient} transition-all duration-300 w-16 group-hover:w-full`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Success Story */}
        <section className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl blur-xl opacity-50" />

          <div className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-3xl p-10 lg:p-12 shadow-2xl border border-blue-700/50 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <p className="text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  A regional healthcare network deployed our inbound AI calling
                  agents and reduced patient wait times from{" "}
                  <span className="font-bold text-blue-300">
                    8 minutes to under 30 seconds
                  </span>{" "}
                  while maintaining{" "}
                  <span className="font-bold text-blue-300">
                    94% patient satisfaction scores
                  </span>
                  .
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">30s</div>
                  <div className="text-blue-200 text-sm">Wait Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-1">94%</div>
                  <div className="text-blue-200 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
