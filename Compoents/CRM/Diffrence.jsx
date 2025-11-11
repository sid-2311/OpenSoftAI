"use client";
import React, { useState } from 'react';
import { Database, TrendingUp, Users, Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CRMDiffrenceSection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Most CRMs Are Glorified Databases",
      description: "They store customer information well but don't help you use that information to build stronger relationships or close more deals. Data collection becomes the end goal instead of the means to better business outcomes.",
      color: "blue-400",
      accent: "blue-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Great CRMs Are Business Growth Tools",
      description: "They provide actionable insights, automate routine tasks, and guide sales teams toward activities that actually generate revenue. Every feature serves the ultimate goal of growing customer relationships and business results.",
      color: "blue-600",
      accent: "blue-700"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalization at Scale",
      description: "Custom CRM development lets you automate personal touches – remembering customer preferences, tracking important dates, and providing relevant information – that make customers feel valued without overwhelming your team.",
      color: "blue-800",
      accent: "blue-900"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            The Difference Between{" "}
            <span className=" bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent mt-2">
              Data Management{" "}
            </span>
            <span className=" text-blue-400">and Relationship Building</span>
          </h1>
        </div>

        {/* Interactive Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 rounded-full"></div>

          {/* Feature Items */}
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative mb-20 last:mb-0 transition-all duration-700 ${
                activeIndex === index ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.3}s both`
              }}
            >
              <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Icon Circle */}
                <div className="relative flex-shrink-0 md:w-1/2 flex justify-start md:justify-center">
                  <div className={`relative w-24 h-24 rounded-full bg-gradient-to-br from-${feature.color} to-${feature.accent} flex items-center justify-center text-white shadow-2xl transform hover:scale-110 transition-all duration-300 cursor-pointer`}>
                    {feature.icon}
                    <div className={`absolute inset-0 rounded-full bg-${feature.color} opacity-0 hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Connection Dot */}
                  
                </div>

                {/* Content */}
                <div className={`md:w-1/2 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="group cursor-pointer">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-all duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-blue-300'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-md leading-relaxed transition-all duration-300 ${
                      activeIndex === index ? 'text-blue-100' : 'text-blue-200/70'
                    }`}>
                      {feature.description}
                    </p>
                    <div className={`mt-6 flex items-center gap-2 text-blue-400 font-semibold transition-all duration-300 ${
                      activeIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                      {/* <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center">
          <div className="inline-block">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm font-bold rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <Link href="/contact-us" className="relative z-10 flex items-center gap-3">
                Start Building Better Relationships
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes blob {
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}