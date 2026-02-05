// components/AICopilotSection.js
"use client";

import { useState, useEffect } from "react";

export default function AiCopilotSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!data) return null;

  const {
    heading,
    description,
    stats = [],
    insights = {},
    caseStudy = {},
  } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent leading-tight">
            {heading}
          </h2>
          <p className="text-md text-blue-200 max-w-4xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/5 backdrop-blur-lg border border-blue-400/20 rounded-2xl p-8 transition-all duration-700 hover:bg-blue-400/10 hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-400/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-3">
                {stat.number}
              </div>
              <div className="text-md text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div
          className={`bg-white/5 border-l-4 border-blue-400 rounded-xl p-12 mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          }`}
        >
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-8">
            {insights.heading}
          </h3>
          <ul className="space-y-6">
            {(insights.list || []).map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 p-5 bg-blue-400/5 rounded-lg transition-all duration-300 hover:bg-blue-400/10 hover:translate-x-2"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-white">
                  ✓
                </div>
                <div className="text-md text-blue-100 leading-relaxed">
                  {item}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Case Study */}
        <div
          className={`relative bg-gradient-to-br from-blue-500/10 to-slate-900/80 rounded-3xl p-12 mb-20 border border-blue-400/20 overflow-hidden transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-400 mb-6">
              {caseStudy.heading}
            </h3>
            <p className="text-md md:text-xl text-blue-100 leading-relaxed mb-6">
              {caseStudy.description1}
            </p>
            <p className="text-md md:text-xl text-blue-100 leading-relaxed">
              {caseStudy.description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
