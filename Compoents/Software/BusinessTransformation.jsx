import React from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function BusinessTransformationSection({ data }) {
  // Extract section data
  const section = data?.businessTransformationSection || {};
  const heading = section.heading || {};
  const description = section.description || [];
  const featuresData = section.features || [];
  const achievementsData = section.achievements || [];

  const features = featuresData.map(f => ({
    icon: f.icon,
    title: f.title,
    description: f.description
  }));

  const achievements = achievementsData.map(a => ({
    icon: a.icon,
    label: a.label,
    description: a.description
  }));

  // If no data, components should still render gracefully with some fallbacks or be handled in the page
  if (!section.heading) return null;

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Text Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                {section.badge || "Our Approach"}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {heading.text?.split(heading.highlight)[0]}
              <span className="text-blue-600">{heading.highlight}</span>
              {heading.text?.split(heading.highlight)[1]}
            </h2>

            <div className="space-y-6 text-slate-600 text-md leading-relaxed">
              {description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <DynamicIcon name={feature.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                  <DynamicIcon name={achievement.icon} className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {achievement.label}
                  </h4>
                  <p className="text-slate-300 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
            {section.closingStatement}
          </p>
        </div>
      </div>
    </section>
  );
}