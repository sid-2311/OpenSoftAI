"use client";
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Zap, Code } from 'lucide-react';

// Dynamic data from API - use data prop to access section data

export default function SmartContractSection({ data }) {
  // Extract section data
  const section = data?.smartContractIntro || {};
  const heading = section.heading || {};
  const mainCard = section.mainCard || {};
  const stakes = section.stakes || {};
  const featuresData = section.features || [];
  const statsData = section.stats || [];
  const expertise = section.expertise || {};

  // Icon mapping
  const iconMap = {
    Shield: <Shield className="w-6 h-6" />,
    Zap: <Zap className="w-6 h-6" />,
    Lock: <Lock className="w-6 h-6" />,
    AlertTriangle: <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />,
    CheckCircle: <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />,
    Code: <Code className="w-6 h-6 text-blue-600" />,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || <Code className="w-6 h-6" />,
    title: f.title,
    description: f.description
  }));

  const stats = statsData.map(s => ({
    value: s.value,
    label: s.label
  }));

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Alert */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {heading.title}{' '}
            <span className="text-blue-600">{heading.highlight}</span> {heading.suffix}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{mainCard.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {mainCard.description?.[0]}
                    <br /><br />
                    {mainCard.description?.[1]}
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {mainCard.description?.[2]}
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Smart contracts aren't just code – they're <strong className="text-gray-900">immutable financial
                  agreements</strong> that handle real money and real assets. Once deployed, you can't just patch
                them like a regular app. This permanence is both the power and the risk of smart contract development.
              </p>
            </div>

            {/* The Stakes */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">{stakes.title}</h3>
              <div className="space-y-4">
                {stakes.items?.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {item.type === 'success' ? <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" /> : <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />}
                    <p className="text-blue-50">
                      <strong>{item.title}:</strong> {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Features & Stats */}
          <div className="space-y-6">
            {/* Features Grid */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{section.statsTitle || "What Success Looks Like"}</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* OpenSoftAI Expertise */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">{expertise.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {expertise.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}