"use client";
import { useState, useEffect } from 'react';
import {
  Code,
  Paintbrush,
  Search,
  ShieldCheck,
  Rocket,
  BarChart3,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function WhyChooseWebsiteSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  // Extract section data
  const section = data?.whyChooseUs || {};
  const heading = section.heading || {};
  const reasonsData = section.reasons || [];
  const statsData = section.stats || [];
  const cta = section.cta || {};

  // Icon mapping
  const iconMap = {
    Code: Code,
    Paintbrush: Paintbrush,
    Search: Search,
    ShieldCheck: ShieldCheck,
    Rocket: Rocket,
    BarChart3: BarChart3,
    Zap: Zap,
  };

  const reasons = reasonsData.map(r => ({
    icon: iconMap[r.icon] || Code,
    title: r.title,
    description: r.description,
  }));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {heading.main}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {heading.highlight}
            </span>{' '}
            {heading.suffix}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-blue-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <Link href={cta.link || "/contact-us"} className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            {cta.label || "Build Your Website with Us"}
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
    </section>
  );
}