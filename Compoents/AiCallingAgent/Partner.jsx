"use client";

import React from "react";
import { Award, Shield, TrendingUp, Users, Star } from "lucide-react";
import Head from "next/head";

export default function OpenSoftAIPartner() {
  const features = [
    {
      icon: Award,
      title: "Proven Industry Leadership",
      description:
        "We've successfully deployed AI calling agents across diverse industries, from healthcare networks handling sensitive patient calls to e-commerce brands managing thousands of order inquiries daily.",
    },
    {
      icon: Users,
      title: "Transparent Development Process",
      description:
        "No black box solutions. We involve you in every step of development, ensuring your AI agents truly understand your business and represent your brand authentically.",
    },
    {
      icon: TrendingUp,
      title: "Future-Ready Technology",
      description:
        "Our AI calling agents continuously learn and improve. What starts as great performance becomes exceptional over time as the system adapts to your specific use cases.",
    },
  ];

  const trustSignals = [
    { icon: Shield, text: "Microsoft Gold Partner for AI Solutions" },
    { icon: Shield, text: "AWS Advanced Technology Partner for Voice AI" },
    { icon: Shield, text: "SOC 2 Type II Certified for data security" },
    {
      icon: Star,
      text: "Featured in VentureBeat's 'Top 10 Voice AI Innovators 2024'",
    },
    {
      icon: Award,
      text: "Winner of the AI Excellence Award for Customer Service Innovation",
    },
  ];

  return (
    <>
      {/* SEO Optimization */}
      <Head>
        <title>OpenSoft AI | Trusted Voice AI Partner</title>
        <meta
          name="description"
          content="Discover why OpenSoft AI is the trusted partner for intelligent voice solutions. Proven leadership, transparent AI development, and award-winning innovation."
        />
        <meta
          name="keywords"
          content="Voice AI, AI calling agents, OpenSoft AI, AI partner, conversational AI, AI automation, voice technology"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="OpenSoft AI | Trusted Voice AI Partner" />
        <meta
          property="og:description"
          content="Empowering enterprises with intelligent voice AI solutions. Discover OpenSoft AI’s leadership and recognition in AI innovation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/ai-partner" />
      </Head>

      <main
        className="min-h-screen bg-gradient-to-br from-blue-50 to-white text-gray-900"
        aria-labelledby="ai-partner-heading"
      >
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          <header className="text-center mb-16">
            <h1
              id="ai-partner-heading"
              className="text-4xl font-bold text-blue-900 mb-4"
            >
              Why OpenSoft AI is Your
            </h1>
            <h2 className="text-4xl font-bold text-blue-700">
              Trusted Voice AI Partner
            </h2>
          </header>

          {/* Features */}
          <section
            aria-label="Key reasons to choose OpenSoft AI"
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-100"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </section>

          {/* Trust & Recognition */}
          <section
            aria-label="Awards and recognitions"
            className="bg-white rounded-3xl p-12 shadow-2xl border border-blue-100"
          >
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-blue-900 mb-3">
                Trust Signals & Recognition
              </h3>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {trustSignals.map((signal, index) => {
                const Icon = signal.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                      </div>
                    </div>
                    <p className="text-gray-700 font-medium text-base pt-2">
                      {signal.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
