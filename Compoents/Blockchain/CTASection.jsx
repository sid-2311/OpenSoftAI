"use client";

import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function CTASection({ data }) {
  const section = data?.blockchainCTASection || {};
  const heroCards = section.hero?.cards || [];
  const actionCards = section.actions?.cards || [];

  if (!section.hero?.heading) return null;

  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {section.hero.heading}
        </h2>

        <p className="text-blue-100 text-lg max-w-3xl mx-auto mb-12">
          {section.hero.description}
        </p>

        {/* Hero Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {heroCards.map((card, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20"
            >
              <h4 className="font-bold text-lg mb-2">{card.title}</h4>
              <p className="text-blue-100 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Information Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <p className="text-blue-50 text-md leading-relaxed mb-8">
            {section.information?.intro}
          </p>
          <blockquote className="text-xl md:text-2xl font-bold italic mb-8 border-l-4 border-white/30 pl-6 text-left">
            "{section.information?.quote}"
          </blockquote>
          <p className="text-blue-100 text-md leading-relaxed">
            {section.information?.closing}
          </p>
        </div>

        {/* Actions Cards */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {section.actions?.heading}
          </h3>
          <p className="text-blue-100 mb-8">
            {section.actions?.description}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {actionCards.map((card, i) => (
              <Link
                key={i}
                href={card.href || "/contact-us"}
                className={`flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 ${card.variant === 'primary'
                  ? 'bg-white text-blue-700 border-white shadow-xl hover:scale-105'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20 shadow-lg'
                  }`}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${card.variant === 'primary' ? 'bg-blue-100' : 'bg-white/20'
                  }`}>
                  <DynamicIcon name={card.icon} className={`w-7 h-7 ${card.variant === 'primary' ? 'text-blue-600' : 'text-white'}`} />
                </div>
                <h4 className="font-bold text-lg mb-2">{card.title}</h4>
                <p className={`${card.variant === 'primary' ? 'text-blue-600/80' : 'text-blue-100'} text-sm mb-4`}>{card.desc}</p>
                <div className="font-bold flex items-center gap-2">
                  Take Action <DynamicIcon name="ArrowRight" className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-10 mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            {section.finalCTA?.heading}
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            {section.finalCTA?.description}
          </p>
          <Link
            href={section.finalCTA?.button?.href || "/contact-us"}
            className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            {section.finalCTA?.button?.label}
            <DynamicIcon name="ArrowRight" className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
