"use client";

import React from "react";
import Head from "next/head";
import {
  Clock,
  TrendingDown,
  BarChart3,
  Users,
  Database,
} from "lucide-react";

export default function AICallingAgents() {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability That Actually Works",
      description:
        "Your AI agents never need coffee breaks, vacation time, or sick days. They maintain peak performance around the clock, ensuring no opportunity slips through the cracks.",
    },
    {
      icon: TrendingDown,
      title: "Dramatic Cost Reduction",
      description:
        "Replace expensive call center infrastructure with intelligent AI agents. Our clients typically see 60–70% reduction in voice communication costs within the first year.",
    },
    {
      icon: BarChart3,
      title: "Infinite Scalability",
      description:
        "Handle 10 calls or 10,000 calls with the same level of service quality. Scale up for product launches, seasonal peaks, or business growth without hiring headaches.",
    },
    {
      icon: Users,
      title: "Enhanced Customer Satisfaction",
      description:
        "Faster response times, consistent service quality, and 24/7 availability combine to create exceptional customer experiences that drive loyalty and referrals.",
    },
    {
      icon: Database,
      title: "Data-Driven Optimization",
      description:
        "Every conversation becomes valuable data. Understand customer needs, identify trending issues, and optimize your business based on real voice interaction insights.",
    },
  ];

  return (
    <>
      {/* ✅ SEO META TAGS */}
      <Head>
        <title>AI Calling Agents | Transform Your Business Operations</title>
        <meta
          name="description"
          content="Revolutionize your business with AI calling agents. Achieve 24/7 availability, cost reduction, scalability, and enhanced customer satisfaction."
        />
        <meta
          name="keywords"
          content="AI calling agents, voice automation, AI customer service, call center automation, business optimization, conversational AI"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* ✅ MAIN CONTENT */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold text-blue-900 mb-4">
              Transform Your Business Operations
            </h1>
            <h2 className="text-3xl font-semibold text-blue-700">
              with AI Calling Agents
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
