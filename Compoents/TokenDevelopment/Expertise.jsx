"use client";

import { useState, useEffect } from 'react';
import { Layers, Shield, ArrowLeftRight, Rocket, CheckCircle, Gem, ArrowRight } from 'lucide-react';

export default function ExpertiseSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: '50+', label: 'Token Projects Completed', Icon: Rocket },
    { number: '98%', label: 'Successful Deployment Rate', Icon: CheckCircle },
    { number: '$100M+', label: 'Transactions Facilitated', Icon: Gem }
  ];

  const expertise = [
    {
      title: 'Multi-Chain Mastery',
      description: 'Deep experience across multiple blockchain ecosystems with expertise in different token standards and protocols.',
      Icon: Layers
    },
    {
      title: 'Battle-Tested Security',
      description: 'Our tokens have passed rigorous audits and handled millions of transactions across DeFi platforms without issues.',
      Icon: Shield
    },
    {
      title: 'Exchange Integration',
      description: 'Seamless integration experience with major exchanges, ensuring your token reaches the right markets quickly.',
      Icon: ArrowLeftRight
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-white mb-6">
            OpenSoft AI Token Development {" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white mt-2">
              Expertise
            </span>
          </h2>
          
          <p className="text-md text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Years of building tokens across different industries and blockchain networks, from early-stage startups to established enterprises.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.Icon;
            return (
              <div
                key={idx}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-slate-800 bg-opacity-50 backdrop-blur-xl border border-blue-500 border-opacity-30 rounded-2xl p-8 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-2">
                  <IconComponent className="w-12 h-12 text-blue-400 mb-4" />
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Core Message */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-blue-500 border-opacity-30 backdrop-blur-xl h-full">
              <h3 className="text-3xl font-bold text-white mb-6">
                What Sets Us Apart
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 animate-pulse"></div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    We don't just code your token and walk away. We work with you to understand your business model, user journey, and long-term vision.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Then we build a token strategy that actually supports those goals, not just what sounds good on paper.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <p className="text-blue-100 text-lg leading-relaxed">
                    Our teams understand the nuances of different token standards and what works best for different use cases across industries.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-500 bg-opacity-10 border border-blue-400 border-opacity-30 rounded-xl">
                <p className="text-blue-200 italic">
                  "From early-stage startups raising their first funding rounds to established enterprises exploring blockchain integration — we've been there, done that."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Cards */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {expertise.map((item, idx) => {
              const IconComponent = item.Icon;
              return (
                <div
                  key={idx}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activeCard === idx ? 'scale-105' : 'scale-100'
                  }`}
                  onMouseEnter={() => setActiveCard(idx)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-lg transition-opacity duration-500 ${
                    activeCard === idx ? 'opacity-40' : 'opacity-0'
                  }`}></div>
                  <div className={`relative bg-slate-800 bg-opacity-70 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 ${
                    activeCard === idx 
                      ? 'border-blue-400 border-opacity-80' 
                      : 'border-blue-500 border-opacity-20'
                  }`}>
                    <div className={`flex items-start transition-all duration-500 ${
                      activeCard === idx ? 'text-blue-300' : 'text-blue-400'
                    }`}>
                      <div className="mr-4 mt-1">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h4>
                        <p className="text-blue-200 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Section */}
       
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
}