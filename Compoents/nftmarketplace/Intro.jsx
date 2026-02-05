"use client";
import React from 'react';
import { Sparkles, Shield, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function NFTInfrastructureSection({ data }) {
  // Extract section data
  const section = data?.nftIntro || {};
  const heading = section.heading || {};
  const challenge = section.challenge || {};
  const experience = section.experience || {};
  const featuresData = section.features || [];

  // Icon mapping
  const iconMap = {
    Sparkles: Sparkles,
    Shield: Shield,
    Users: Users,
    TrendingUp: TrendingUp,
  };

  const features = featuresData.map(f => ({
    icon: iconMap[f.icon] || Sparkles,
    title: f.title,
    description: f.description
  }));

  if (!section.heading) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {heading.main}{" "}
            <span className=" mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              {heading.highlight}
            </span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {section.description}
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-blue-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {challenge.title}
              </h2>
              <div className="space-y-4">
                {challenge.description?.split('\n').map((p, idx) => (
                  <p key={idx} className="text-gray-700 leading-relaxed">
                    {p}
                  </p>
                )) || (
                    <p className="text-gray-700 leading-relaxed">
                      {challenge.description}
                    </p>
                  )}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-700 rounded-full opacity-20"></div>

                <h3 className="text-2xl font-bold mb-4 relative z-10">{experience.title}</h3>
                <p className="text-blue-50 leading-relaxed relative z-10">
                  {experience.description}
                </p>
                <div className="mt-6 pt-6 border-t border-blue-400 relative z-10">
                  <p className="text-blue-50 font-medium">
                    They're about creating ecosystems where everyone thrives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-50"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Explore Our Solutions
            </Link>
            <Link href="/contact-us" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-600">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}