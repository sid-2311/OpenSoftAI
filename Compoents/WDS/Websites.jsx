"use client";
import React, { useState } from 'react';
import { Zap, RefreshCw, Building2, ShoppingCart, Database, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function WebsiteTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const websiteTypes = [
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Static Websites",
      description: "Perfect for businesses that need professional online presence without complex functionality. These lightweight, fast-loading sites provide excellent user experiences while being cost-effective to build and maintain.",
      highlight: "Ideal for service businesses, professional practices, and companies focused on brand credibility and lead generation.",
      number: "01"
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Dynamic Websites",
      description: "CMS-powered websites that put content control in your hands. Whether you need regular blog updates, news publication, or frequently changing product information, dynamic sites provide the flexibility to keep content fresh.",
      highlight: "Maintain professional design and SEO performance with easy content management.",
      number: "02"
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      title: "Corporate Websites",
      description: "Brand-focused digital headquarters that communicate your company's value proposition, showcase capabilities, and build trust with potential customers. These sites balance visual impact with functional performance.",
      highlight: "Create memorable experiences that convert visitors into qualified leads.",
      number: "03"
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "E-Commerce Websites",
      description: "Secure, scalable online stores designed to maximize conversions while providing seamless shopping experiences. From product catalogs and shopping carts to payment processing and inventory management.",
      highlight: "Handle everything from startup launches to enterprise-level sales volume.",
      number: "04"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Custom Web Portals",
      description: "Sophisticated web applications including SaaS dashboards, customer portals, B2B platforms, and specialized business tools. These solutions combine complex functionality with intuitive interfaces.",
      highlight: "Create powerful tools that users actually want to use regularly.",
      number: "05"
    }
  ];

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
            Types of Websites {" "}
            <span className=" text-blue-600 mt-2">We Build</span>
          </h2>
        </div>

        {/* Interactive List */}
        <div className="space-y-1">
          {websiteTypes.map((type, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-500 cursor-pointer ${
                activeIndex === index ? 'py-12 md:py-16' : 'py-6 md:py-8'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              style={{
                animation: `fadeInSlide 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Background Bar */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl' 
                  : 'bg-white/50 backdrop-blur-sm hover:bg-white/80'
              }`} style={{ borderRadius: '24px' }}></div>

              <div className="relative px-6 md:px-12 flex items-start gap-6 md:gap-12">
                {/* Number */}
                <div className={`flex-shrink-0 text-3xl md:text-4xl font-bold transition-all duration-500 ${
                  activeIndex === index ? 'text-blue-200' : 'text-blue-300/40'
                }`}>
                  {type.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4 mb-3">
                    {/* Icon */}
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeIndex === index 
                        ? 'bg-white text-blue-600 shadow-xl scale-110' 
                        : 'bg-blue-100 text-blue-600 scale-100'
                    }`}>
                      {type.icon}
                    </div>

                    {/* Title */}
                    <h2 className={`text-2xl md:text-3xl font-bold transition-all duration-500 ${
                      activeIndex === index ? 'text-white' : 'text-slate-900'
                    }`}>
                      {type.title}
                    </h2>
                  </div>

                  {/* Description - Slides down when active */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
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
                <div className={`flex-shrink-0 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href="/contact-us" className="group relative px-10 py-5 bg-blue-600 text-white text-lg font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link href="/portfolio" className="px-10 py-5 bg-white text-blue-600 text-lg font-bold rounded-full border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
            View Portfolio
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