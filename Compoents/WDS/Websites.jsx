"use client";
import React, { useState } from 'react';
import { Zap, RefreshCw, Building2, ShoppingCart, Database, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function WebsiteTypesSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Extract section data
  const section = data?.websiteTypes || {};
  const heading = section.heading || {};
  const typesData = section.types || [];
  const bottomCta = section.bottomCta || {};

  // Icon mapping
  const iconMap = {
    Zap: Zap,
    RefreshCw: RefreshCw,
    Building2: Building2,
    ShoppingCart: ShoppingCart,
    Database: Database,
    Sparkles: Sparkles,
  };

  const websiteTypes = typesData.map(type => ({
    icon: iconMap[type.icon] || Zap,
    title: type.title,
    description: type.description,
    highlight: type.highlight,
    number: type.number,
  }));

  if (!section.heading) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-float-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">

          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {heading.main}{" "}
            <span className=" text-blue-600 mt-2">{heading.highlight}</span>
          </h2>
        </div>

        {/* Interactive List */}
        <div className="space-y-1">
          {websiteTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-500 cursor-pointer ${activeIndex === index ? 'py-12 md:py-16' : 'py-6 md:py-8'
                  }`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                style={{
                  animation: `fadeInSlide 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Background Bar */}
                <div className={`absolute inset-0 transition-all duration-500 ${activeIndex === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl'
                    : 'bg-white/50 backdrop-blur-sm hover:bg-white/80'
                  }`} style={{ borderRadius: '24px' }}></div>

                <div className="relative px-6 md:px-12 flex items-start gap-6 md:gap-12">
                  {/* Number */}
                  <div className={`flex-shrink-0 text-3xl md:text-4xl font-bold transition-all duration-500 ${activeIndex === index ? 'text-blue-200' : 'text-blue-300/40'
                    }`}>
                    {type.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndex === index
                          ? 'bg-white text-blue-600 shadow-xl scale-110'
                          : 'bg-blue-100 text-blue-600 scale-100'
                        }`}>
                        <IconComponent className="w-10 h-10" />
                      </div>

                      {/* Title */}
                      <h2 className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${activeIndex === index ? 'text-white' : 'text-slate-900'
                        }`}>
                        {type.title}
                      </h2>
                    </div>

                    {/* Description - Slides down when active */}
                    <div className={`overflow-hidden transition-all duration-500 ${activeIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                      }`}>
                      <div className="space-y-4">
                        <p className="text-md md:text-lg text-blue-50 leading-relaxed">
                          {type.description}
                        </p>
                        <p className="text-sm  md:text-md text-white font-semibold leading-relaxed flex items-center gap-2">
                          <ArrowRight className="w-5 h-5 flex-shrink-0" />
                          <span>{type.highlight}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className={`flex-shrink-0 transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href={bottomCta.primary?.link || "/contact-us"} className="group relative px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              {bottomCta.primary?.label || "Start Your Project"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link href={bottomCta.secondary?.link || "/portfolio"} className="px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
            {bottomCta.secondary?.label || "View Portfolio"}
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInSlide {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(30px, -30px) rotate(5deg);
          }
          66% {
            transform: translate(-20px, 20px) rotate(-5deg);
          }
        }

        @keyframes float-delay {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(-30px, 30px) rotate(-5deg);
          }
          66% {
            transform: translate(20px, -20px) rotate(5deg);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}