"use client";
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function CryptoCTA({ data }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  // Extract section data
  const section = data?.cryptoCTA || {};
  const header = section.header || {};
  const statsData = section.stats || [];
  const main = section.main || {};
  const cta = section.cta || {};

  const stats = statsData.map(stat => ({
    icon: stat.icon,
    label: stat.label,
    value: stat.value,
    desc: stat.desc
  }));

  if (!section.header) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            {header.title}
          </h3>

          <p className="text-md text-blue-100 max-w-4xl mx-auto leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <DynamicIcon name={stat.icon} className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200/60 text-sm">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {main.title}
              </h2>
              <p className="text-blue-100 leading-relaxed">
                {main.description}
              </p>
              <div className="space-y-4">
                {(main.features || []).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {main.highlight && (
              <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{main.highlight.title}</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {main.highlight.description}
                </p>
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                  <p className="text-blue-200 text-sm italic">
                    "{main.highlight.quote}"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {cta.title}
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {cta.primary && (
              <Link href={cta.primary.link || "/contact-us"} className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-2">
                {cta.primary.label}
                <DynamicIcon name={cta.primary.icon || "ArrowRight"} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}

            {cta.secondary && (
              <Link href={cta.secondary.link || "/contact-us"} className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 rounded-xl font-semibold text-white transition-all duration-300">
                {cta.secondary.label}
              </Link>
            )}
          </div>

          {cta.footerNote && (
            <div className="mt-12 pt-8 border-t border-blue-500/20">
              <p className="text-blue-300 font-medium mb-4">
                {cta.footerNote.headline}
              </p>
              <p className="text-blue-200/80">
                {cta.footerNote.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}