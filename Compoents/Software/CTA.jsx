"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  FolderOpen,
  Shield,
  Star,
  Award,
} from "lucide-react";

// Dynamic data from API - use data prop to access section data

export default function FinalCTA({ data }) {
  const [activeCard, setActiveCard] = useState(null);

  // Extract section data
  const section = data?.finalCTASection || {};
  const hero = section.hero || {};
  const featuresData = section.features || [];
  const ctaBox = section.ctaBox || {};
  const actionCardsData = section.actionCards || [];

  // Icon mapping
  const iconMap = {
    Shield,
    Star,
    Award,
    Calendar,
    MessageCircle,
    FolderOpen,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || Star,
    title: f.title,
    desc: f.desc,
  }));

  const actionCards = actionCardsData.map(card => ({
    id: card.id,
    icon: iconMap[card.icon] || Calendar,
    title: card.title,
    subtitle: card.subtitle,
    color: card.color || "from-white to-blue-50",
    link: card.link,
  }));

  if (!section.hero) return null;

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            {hero.titleLine1}
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-8">
            {hero.titleLine2}
          </h2>
          <p className="text-lg text-slate-600 max-w-5xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <article
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </article>
            );
          })}
        </div>

        {/* Main CTA Box */}
        <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-12 md:p-16 shadow-2xl mb-12">
          <div className="text-center mb-12">
            <h3 className="text-xl md:text-4xl font-bold text-white mb-4">
              {ctaBox.heading}
            </h3>
            <p className="text-md text-blue-100">
              {ctaBox.description}
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionCards.map((card) => {
              const Icon = card.icon;
              return (
                <article
                  key={card.id}
                  onMouseEnter={() => setActiveCard(card.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 cursor-pointer transition-all duration-300 group ${activeCard === card.id ? "scale-105 shadow-2xl" : "shadow-lg"
                    }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 ${activeCard === card.id ? "rotate-12 scale-110" : ""
                        }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{card.title}</h4>
                    <p className="text-sm text-slate-600 mb-4">{card.subtitle}</p>
                    <div
                      className={`flex items-center gap-2 text-blue-700 font-semibold transition-transform duration-300 ${activeCard === card.id ? "translate-x-2" : ""
                        }`}
                    >
                      <Link href={card.link || "#"}>Get Started</Link>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
