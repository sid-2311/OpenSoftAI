"use client";
import React, { useState } from 'react';
import { ArrowRight, Shield, Clock, CheckCircle, Rocket, FileSearch, Calendar, MessageSquare, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SmartContractCTA() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const ctaButtons = [
    {
      id: 'consultation',
      icon: <Calendar className="w-5 h-5" />,
      title: "Schedule Your Smart Contract Consultation",
      description: "Get expert guidance tailored to your project",
      color: "from-blue-600 to-blue-700",
      hoverColor: "from-blue-700 to-blue-800"
    },
    {
      id: 'assessment',
      icon: <FileSearch className="w-5 h-5" />,
      title: "Get a Security Assessment",
      description: "Identify vulnerabilities before deployment",
      color: "from-indigo-600 to-indigo-700",
      hoverColor: "from-indigo-700 to-indigo-800"
    },
    {
      id: 'portfolio',
      icon: <Shield className="w-5 h-5" />,
      title: "View Our Contract Portfolio",
      description: "See our proven track record",
      color: "from-blue-500 to-indigo-600",
      hoverColor: "from-blue-600 to-indigo-700"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Security-first development"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Fast without compromising quality"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Clear roadmap from concept to deployment"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-20 px-4 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main CTA Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 md:px-12 py-12 text-center relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full filter blur-2xl animate-pulse"></div>
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10">
             

              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Build Smart Contracts
                That <span className="text-blue-200">Actually Work?</span>
              </h2>

              <p className="text-blue-100 text-md md:text-lg max-w-3xl mx-auto leading-relaxed">
                Smart contracts are the foundation of every successful blockchain project, but they're also 
                the most critical point of failure if not done correctly.
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div className="px-8 md:px-12 py-10">
            {/* Key Message */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Build Smart Contracts Users Can Trust
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you're ready to build smart contracts that users can trust with their assets and 
                    businesses can rely on for critical operations, let's talk.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-gray-800 font-medium">
                      <span className="text-blue-600 font-bold">The blockchain space moves fast,</span> but smart 
                      contract security can't be rushed. We help you move quickly while maintaining the security 
                      standards your project deserves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 mb-8">
              {ctaButtons.map((button) => (
                <button
                  key={button.id}
                  onMouseEnter={() => setHoveredButton(button.id)}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`w-full group bg-gradient-to-r ${
                    hoveredButton === button.id ? button.hoverColor : button.color
                  } text-white rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-between`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      {button.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold mb-1">{button.title}</div>
                      <div className="text-blue-100 text-sm">{button.description}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              ))}
            </div>

            {/* Process Overview */}
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                What Happens Next?
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Review Requirements</h5>
                  <p className="text-gray-600 text-sm">We'll discuss your project goals and technical needs</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Identify Security Considerations</h5>
                  <p className="text-gray-600 text-sm">Comprehensive analysis of potential vulnerabilities</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h5 className="font-semibold text-gray-900 mb-2">Clear Roadmap</h5>
                  <p className="text-gray-600 text-sm">From concept to secure deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 md:px-12 py-8 text-center">
            <p className="text-white text-xl md:text-2xl font-bold mb-2">
              Ready to Build Smart Contracts That Users Can Trust?
            </p>
            <p className="text-blue-100 text-lg">
              Let's create bulletproof blockchain infrastructure together.
            </p>
            <div className="mt-6">
              <Link href="/contact-us" className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-md md:text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
                Secure Your Blockchain Future
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        
      </div>
    </section>
  );
}