"use client"
import React, { useState, useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function BusinessBenefitsSection({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Extract section data
  const section = data?.businessBenefits || {};
  const heading = section.heading || {};
  const benefitsData = section.benefits || [];
  const cta = section.cta || {};
  const floatingStat = section.floatingStat || {};

  const benefits = benefitsData.map(b => ({
    icon: b.icon || "ShieldCheck",
    title: b.title,
    description: b.description,
    metrics: b.metrics || []
  }));

  useEffect(() => {
    if (benefits.length === 0) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % benefits.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [benefits.length]);

  if (!section.heading || benefits.length === 0) return null;

  return (
    <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {heading.main}{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-2">
              {heading.highlight}
            </span>
          </h2>
        </div>

        {/* Main Interactive Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tab Navigation */}
          <div className="space-y-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isActive = activeTab === idx;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setProgress(0);
                  }}
                  className={`relative cursor-pointer transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100 hover:scale-102'
                    }`}
                >
                  {/* Progress Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 rounded-r-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 to-blue-600 transition-all duration-100 ease-linear"
                        style={{ height: `${progress}%` }}
                      ></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className={`pl-6 pr-6 py-6 rounded-2xl border-2 transition-all duration-300 ${isActive
                    ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-white shadow-xl'
                    : 'border-blue-100 bg-white hover:border-blue-300 hover:shadow-lg'
                    }`}>
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isActive
                        ? 'bg-gradient-to-br from-blue-500 to-blue-600'
                        : 'bg-blue-100'
                        }`}>
                        <DynamicIcon name={benefit.icon} className={`w-6 h-6 transition-colors duration-300 ${isActive ? 'text-white' : 'text-blue-600'
                          }`} />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className={`text-lg font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-gray-900'
                          }`}>
                          {benefit.title}
                        </h3>
                        <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-gray-700' : 'text-gray-600'
                          }`}>
                          {isActive ? benefit.description : benefit.description.substring(0, 80) + '...'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Content Display */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 rounded-3xl transform rotate-3"></div>

            {/* Main Content Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-2 border-blue-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Icon Header */}
              <div className="flex items-center mb-8">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3">
                  <DynamicIcon name={benefits[activeTab].icon} className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {benefits[activeTab]?.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-md md:text-lg text-gray-700 leading-relaxed mb-8">
                {benefits[activeTab]?.description}
              </p>

              {/* Metrics */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  Key Features
                </h4>
                {benefits[activeTab]?.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-3 text-gray-700 font-medium">{metric}</span>
                  </div>
                ))}
              </div>

              {/* Progress Indicator */}
              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  Benefit {activeTab + 1} of {benefits.length}
                </span>
                <div className="flex gap-2">
                  {benefits.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeTab ? 'bg-blue-500 w-8' : 'bg-blue-200'
                        }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            {floatingStat.value && (
              <div className="absolute -bottom-6 -right-2 md:-right-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{floatingStat.value}</div>
                <div className="text-blue-100 text-sm font-medium">{floatingStat.label}</div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <Link href={cta.link || "/contact-us"} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-md md:text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            {cta.label || "Start Measuring Your Success"}
            <DynamicIcon name={cta.icon || "ArrowRight"} className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}