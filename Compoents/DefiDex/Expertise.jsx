"use client";
import { useState, useEffect } from 'react';
import DynamicIcon from "../DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function DeFiExpertiseSection({ data }) {
  const [countUp, setCountUp] = useState({ tvl: 0, protocols: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [activeExpertise, setActiveExpertise] = useState(0);

  // Extract section data
  const section = data?.defiExpertise || {};
  const heading = section.heading || {};
  const stats = section.stats || {};
  const expertiseData = section.expertiseCards || [];
  const principles = section.principles || [];
  const verticals = section.verticals || [];
  const learning = section.learning || {};



  const expertise = expertiseData.map(item => ({
    icon: item.icon,
    title: item.title,
    description: item.description,
    stats: item.stats,
    color: item.color || 'from-blue-500 to-blue-600'
  }));

  useEffect(() => {
    setIsVisible(true);

    // CountUp animation
    const duration = 2000;
    const steps = 60;
    const tvlTarget = stats.tvl?.value || 500;
    const protocolsTarget = stats.protocols?.value || 25;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountUp({
        tvl: Math.floor(tvlTarget * progress),
        protocols: Math.floor(protocolsTarget * progress)
      });

      if (currentStep >= steps) clearInterval(interval);
    }, duration / steps);

    return () => clearInterval(interval);
  }, [stats.tvl?.value, stats.protocols?.value]);

  useEffect(() => {
    if (expertise.length === 0) return;
    const interval = setInterval(() => {
      setActiveExpertise((prev) => (prev + 1) % expertise.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [expertise.length]);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {heading.main}{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white mt-2">
              {heading.highlight}
            </span>
          </h2>

          <p className="text-md md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {section.subheading}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {stats.tvl && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-blue-500 border-opacity-30 rounded-3xl p-10 text-center">
                <DynamicIcon name={stats.tvl?.icon || "BarChart3"} className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-2">
                  ${countUp.tvl}{stats.tvl.suffix}
                </div>
                <div className="text-blue-200 font-medium">{stats.tvl.label}</div>
                <div className="text-sm text-blue-300 mt-2">{stats.tvl.note}</div>
              </div>
            </div>
          )}

          {stats.protocols && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-blue-500 border-opacity-30 rounded-3xl p-10 text-center">
                <DynamicIcon name={stats.protocols?.icon || "Shield"} className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-2">
                  {countUp.protocols}{stats.protocols.suffix}
                </div>
                <div className="text-blue-200 font-medium">{stats.protocols.label}</div>
                <div className="text-sm text-blue-300 mt-2">{stats.protocols.note}</div>
              </div>
            </div>
          )}
        </div>

        {/* Main Expertise Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {expertise.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeExpertise === idx;

            return (
              <div
                key={idx}
                className={`relative transition-all duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}
                onMouseEnter={() => setActiveExpertise(idx)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl blur-xl transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-0'
                  }`}></div>

                <div className={`relative h-full bg-slate-800 bg-opacity-70 backdrop-blur-xl border rounded-2xl p-8 transition-all duration-500 ${isActive ? 'border-blue-400 border-opacity-80' : 'border-blue-500 border-opacity-20'
                  }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.color} ${isActive ? 'scale-110 rotate-6' : 'scale-100'
                    } transition-all duration-500`}>
                    <DynamicIcon name={item.icon} className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <p className="text-blue-200 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="pt-4 border-t border-blue-500 border-opacity-30">
                    <div className="flex items-center text-blue-300 font-semibold">
                      <DynamicIcon name={item.statIcon || "CheckCircle2"} className="w-5 h-5 mr-2" />
                      <span className="text-sm">{item.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* What We've Learned Section */}
        {learning.title && (
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 mb-16 shadow-2xl">
            <div className="flex items-start mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-transparent bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                <DynamicIcon name={learning.icon || "TrendingUp"} className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{learning.title}</h3>
                <p className="text-lg text-blue-100 leading-relaxed">
                  {learning.description}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {principles.map((principle, idx) => {
                return (
                  <div key={idx} className="bg-transparent bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                    <DynamicIcon name={principle.icon} className="w-8 h-8 text-blue-200 mb-4" />
                    <h4 className="text-lg font-bold text-white mb-2">{principle.title}</h4>
                    <p className="text-blue-100 text-sm">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Verticals Section */}
        <div className="bg-slate-800 bg-opacity-50 backdrop-blur-xl rounded-3xl p-10 border border-blue-500 border-opacity-30">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Our Development Expertise Across DeFi Verticals
          </h3>
          <p className="text-blue-200 text-center mb-8 max-w-3xl mx-auto">
            Our development process is battle-tested across different DeFi verticals. We've built everything from simple lending pools to complex derivative protocols.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {verticals.map((vertical, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <div className="text-white font-semibold">{vertical}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}