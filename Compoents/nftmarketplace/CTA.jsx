"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, FileText, FolderOpen, Sparkles, CheckCircle, MessageSquare } from 'lucide-react';

export default function NFTCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    "Cutting-edge blockchain technology",
    "Exceptional user experience design",
    "Community-focused platform development",
    "Long-term technical support"
  ];

  const ctaButtons = [
    {
      id: 'consultation',
      icon: Calendar,
      title: "Schedule Your Consultation",
      description: "Free strategy session to discuss your vision",
      primary: true
    },
    {
      id: 'quote',
      icon: FileText,
      title: "Get Custom Quote",
      description: "Tailored development roadmap and pricing",
      primary: false
    },
    {
      id: 'portfolio',
      icon: FolderOpen,
      title: "View Our Portfolio",
      description: "See our successful NFT projects",
      primary: false
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-15px) translateX(5px); }
        }
      `}</style>

      <div className="relative max-w-6xl mx-auto">
        {/* Main Content */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center justify-center mb-6">
            <div className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Let's Build Together</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Build the Next Generation
            <span className="block mt-2">NFT Marketplace?</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-50 max-w-4xl mx-auto mb-8 leading-relaxed">
            The NFT space is still evolving, and there's room for platforms that genuinely serve creators and collectors better than what exists today.
          </p>

          <p className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            If you're ready to build an NFT marketplace that combines cutting-edge technology with exceptional user experience, let's create something that matters.
          </p>
        </div>

        {/* Value Proposition Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 transform hover:scale-[1.02] transition-all duration-300">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Build Something Extraordinary
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The best NFT marketplaces aren't just about buying and selling digital assets – they're about creating new ways for creators and fans to connect, communities to form, and value to be created and shared.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-300"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
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
                <button
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    button.primary
                      ? 'bg-gradient-to-br from-blue-600 to-blue-500 border-blue-600 text-white hover:shadow-blue-500/50'
                      : 'bg-white border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                    button.primary
                      ? 'bg-white/20'
                      : 'bg-blue-100 group-hover:bg-blue-500'
                  }`}>
                    <Icon className={`w-6 h-6 transition-colors duration-300 ${
                      button.primary
                        ? 'text-white'
                        : 'text-blue-600 group-hover:text-white'
                    }`} />
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-2 ${
                    button.primary ? 'text-white' : 'text-gray-900'
                  }`}>
                    {button.title}
                  </h4>
                  
                  <p className={`text-sm mb-4 ${
                    button.primary ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    {button.description}
                  </p>

                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-sm font-semibold ${
                      button.primary ? 'text-white' : 'text-blue-600'
                    }`}>
                      {button.primary ? 'Get Started' : 'Learn More'}
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                      hoveredButton === button.id ? 'translate-x-1' : ''
                    } ${button.primary ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8">
            <MessageSquare className="w-8 h-8 text-white" />
            <div className="text-left">
              <p className="text-white font-bold text-lg">Free Consultation Included</p>
              <p className="text-blue-100 text-sm">Discuss your vision and get expert guidance</p>
            </div>
          </div>

          <p className="text-2xl font-bold text-white mb-2">
            Ready to empower creators and build the NFT marketplace your community deserves?
          </p>
          <p className="text-xl text-blue-100">
            Let's create something extraordinary together.
          </p>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-blue-50">Available 24/7</span>
            </div>
            <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
            <div className="text-blue-50">Average response time: 2 hours</div>
            <div className="hidden sm:block w-1 h-6 bg-white/30"></div>
            <div className="text-blue-50">100% Free Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
}