"use client";

import { useState } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function WhyChooseOpenSoftAI({ data }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {data.section.heading}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-50 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature) => (
            <div
              key={feature.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000`}
              ></div>

              <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 h-full transition group-hover:bg-slate-800/70">
                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}
                >
                  <DynamicIcon name={feature.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-lg">
                  {feature.description}
                </p>

                {/* Subtext */}
                <p className="text-gray-400 italic">
                  {feature.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
