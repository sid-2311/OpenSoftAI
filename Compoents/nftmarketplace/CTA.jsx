"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, FileText, FolderOpen, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';
import Link from 'next/link';

// Dynamic data from API - use data prop to access section data

export default function NFTCTASection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  // Extract section data
  const section = data?.nftCTASection || {};
  const headingData = section.heading || {};
  const valueProposition = section.valueProposition || {};
  const benefitsData = section.benefits || [];
  const ctaButtonsData = section.ctaButtons || [];
  const bottomSection = section.bottomSection || {};

  // Icon mapping
  const iconMap = {
    Calendar: Calendar,
    FileText: FileText,
    FolderOpen: FolderOpen,
    Sparkles: Sparkles,
    CheckCircle: CheckCircle,
    MessageSquare: MessageSquare,
  };

  const ctaButtons = ctaButtonsData.map(b => ({
    id: b.id,
    icon: iconMap[b.icon] || Calendar,
    title: b.title,
    description: b.description,
    primary: b.primary,
    actionText: b.actionText || (b.primary ? 'Get Started' : 'Learn More'),
    url: b.url || "/contact-us"
  }));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!section.heading) return null;

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      {/* Floating particles (simplified for server-side stability) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* We can use CSS-only particles or just leave it for better hydration */}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {headingData.title}
          </h2>

          {/* Subheading */}
          <p className="text-lg md:text-lg text-blue-50 max-w-4xl mx-auto mb-8 leading-relaxed">
            {headingData.subtitle}
          </p>

          <p className="text-md text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {headingData.description}
          </p>
        </div>

        {/* Value Proposition Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {valueProposition.title}
            </h3>
            <p className="text-md md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              {valueProposition.description}
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefitsData.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="grid md:grid-cols-3 gap-6">
            {ctaButtons.map((button, index) => {
              const Icon = button.icon;
              return (
                <Link
                  href={button.url}
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block text-left ${button.primary
                    ? 'bg-gradient-to-br from-blue-600 to-blue-500 border-blue-600 text-white hover:shadow-blue-500/50'
                    : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${button.primary
                    ? 'bg-white/20'
                    : 'bg-blue-100 group-hover:bg-blue-500'
                    }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${button.primary
                      ? 'text-white'
                      : 'text-blue-600 group-hover:text-white'
                      }`} />
                  </div>

                  <h4 className={`text-lg font-bold mb-2 ${button.primary ? 'text-white' : 'text-gray-900'
                    }`}>
                    {button.title}
                  </h4>

                  <p className={`text-sm mb-4 ${button.primary ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                    {button.description}
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-sm font-semibold ${button.primary ? 'text-white' : 'text-blue-600'
                      }`}>
                      {button.actionText}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredButton === button.id ? 'translate-x-1' : ''
                      } ${button.primary ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8">
            <MessageSquare className="w-8 h-8 text-white" />
            <div className="text-left">
              <p className="text-white font-bold text-lg">{bottomSection.badge?.title}</p>
              <p className="text-blue-100 text-sm">{bottomSection.badge?.description}</p>
            </div>
          </div>

          <p className="text-xl font-bold text-white mb-2">
            {bottomSection.finalCTA?.title}
          </p>
          <p className="text-lg text-blue-100">
            {bottomSection.finalCTA?.subtitle}
          </p>

          {/* Contact Info */}
          <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-6 text-white text-sm md:text-base">
            {(bottomSection.metaInfo || []).map((info, idx) => (
              <React.Fragment key={idx}>
                <div className="flex items-center gap-2">
                  {info.includes('Available') && <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>}
                  <span className="text-blue-50 whitespace-nowrap">{info}</span>
                </div>
                {idx < bottomSection.metaInfo.length - 1 && <div className="hidden sm:block w-px h-6 bg-white/30"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}