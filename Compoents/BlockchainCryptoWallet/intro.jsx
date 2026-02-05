"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function CryptoTrustSection({ data }) {
  // Extract section data
  const section = data?.cryptoTrust || {};
  const header = section.header || {};
  const content = section.content || {};
  const featuresData = section.features || [];
  const cta = section.cta || {};

  const features = featuresData.map(f => ({
    icon: f.icon,
    title: f.title,
    description: f.description,
    color: f.color || "from-blue-500 to-cyan-500"
  }));

  if (!section.header) return null;

  return (
    <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay-1"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay-2"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Header */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-4xl font-black text-white mb-8 leading-tight">
            {header.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
              {header.highlight}
            </span>
          </h1>

          <p className="text-md text-blue-200 max-w-3xl mx-auto leading-relaxed">
            {header.description}
          </p>
        </div>

        {/* Main Content Glass Card */}
        <div className="relative group mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            <article className="prose prose-lg prose-invert max-w-none">
              <div className="space-y-6 text-blue-100 leading-relaxed">
                {content.paragraphs?.map((p, idx) => (
                  <React.Fragment key={idx}>
                    {idx > 0 && <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>}
                    <p className="text-md md:text-lg">
                      {p}
                    </p>
                  </React.Fragment>
                )) || (
                    <p className="text-md md:text-lg">
                      {content.description}
                    </p>
                  )}
              </div>
            </article>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-400/40 transition-all hover:scale-105 duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <DynamicIcon name={feature.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-30"></div>
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {cta.title}
            </h2>
            <p className="text-blue-100 mb-8 text-md md:text-lg max-w-2xl mx-auto">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {cta.primary && (
                <Link href={cta.primary.link || "/contact-us"} className="group bg-white text-blue-600 px-6 py-3 rounded-full text-md md:text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
                  {cta.primary.label}
                  <DynamicIcon name={cta.primary.icon || "ArrowRight"} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              {cta.secondary && (
                <Link href={cta.secondary.link || "/contact-us"} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-md md:text-lg font-bold hover:bg-white/10 transition-all">
                  {cta.secondary.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-float {
          animation: float 20s infinite ease-in-out;
        }
        
        .animate-float-delay-1 {
          animation: float 20s infinite ease-in-out;
          animation-delay: -7s;
        }
        
        .animate-float-delay-2 {
          animation: float 20s infinite ease-in-out;
          animation-delay: -14s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}