"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function DevelopmentApproach({ data }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Extract section data
  const section = data?.developmentApproachSection || {};
  const approachData = section.approachSection || {};
  const whyChooseData = section.whyChooseSection || {};
  const statsData = section.stats || [];

  const approaches = (approachData.items || []).map(item => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
    color: item.color || "from-blue-500 to-blue-600",
  }));

  const reasons = (whyChooseData.items || []).map(item => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
    gradient: item.gradient || "from-blue-50 to-blue-100",
  }));

  if (!approachData.heading && !whyChooseData.heading) return null;

  return (
    <section className="bg-white">
      {/* Development Approach */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            {approachData.heading}
          </h2>
          <p className="text-blue-100 max-w-4xl mx-auto">
            {approachData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {approaches.map((approach, idx) => {
            return (
              <article
                key={idx}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
                onMouseEnter={() => setHoveredCard(`approach-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-6">
                  <div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${approach.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <DynamicIcon name={approach.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </div>
                <div
                  className={`mt-6 flex items-center text-white font-medium transition-all duration-300 ${hoveredCard === `approach-${idx}` ? "translate-x-2" : ""
                    }`}
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-4">
            {whyChooseData.heading}
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {whyChooseData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            return (
              <article
                key={idx}
                className={`bg-gradient-to-br ${reason.gradient} rounded-2xl p-8 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-xl`}
                onMouseEnter={() => setHoveredCard(`reason-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <DynamicIcon name={reason.icon} className="w-7 h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {reason.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {reason.description}
                </p>
                <div
                  className={`flex items-center text-blue-600 font-medium transition-all duration-300 ${hoveredCard === `reason-${idx}` ? "translate-x-2" : ""
                    }`}
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  <span>Key Advantage</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-700 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat, idx) => (
            <div key={idx}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-blue-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
