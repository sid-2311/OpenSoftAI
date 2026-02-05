"use client";
import React, { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function BusinessBenefitsSection({ data }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // ✅ FIX: correct CMS key
  const section = data?.benefits || {};
  const heading = section.heading || {};
  const benefitsData = section.items || [];
  const statsData = section.stats || [];

  const benefits = benefitsData.map((b) => ({
    id: b.id,
    icon: b.icon,
    title: b.title,
    description: b.description,
    stat: b.stat,
    statLabel: b.statLabel,
  }));

  const stats = statsData.map((s) => ({
    icon: s.icon,
    value: s.value,
    label: s.label,
  }));

  if (!heading.main) return null;

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {heading.main}{" "}
            <span className="text-blue-600">{heading.highlight}</span>
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            {section.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              onMouseEnter={() => setHoveredCard(benefit.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${hoveredCard === benefit.id
                ? "border-blue-500 shadow-xl -translate-y-1"
                : "border-blue-100"
                }`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-blue-600 rounded-xl mb-6">
                <DynamicIcon name={benefit.icon} className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>

              <div className="inline-flex items-center gap-3 bg-blue-50 px-4 py-2 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">
                  {benefit.stat}
                </div>
                <div className="text-sm text-gray-600">
                  {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-blue-600 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <DynamicIcon name={stat.icon} className="w-8 h-8 mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
