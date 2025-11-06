"use client";
import { useState, useEffect } from 'react';
import { TrendingUp, Shield, Clock, Globe2, AlertCircle, CheckCircle, ArrowRight, Lightbulb } from 'lucide-react';

export default function DeFiDEXIntroSection() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeInsight, setActiveInsight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('defi-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        const elementHeight = rect.height;
        const viewportHeight = window.innerHeight;
        const scrolled = Math.max(0, Math.min(1, (viewportHeight - rect.top) / elementHeight));
        setScrollProgress(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const keyPoints = [
    {
      icon: Globe2,
      title: 'No Intermediaries',
      description: 'Transparent, programmable money that works 24/7 across borders'
    },
    {
      icon: Shield,
      title: 'User Trust',
      description: 'Platforms users can trust with their money and assets'
    },
    {
      icon: AlertCircle,
      title: 'Security First',
      description: 'Protocols that won\'t drain funds overnight'
    },
    {
      icon: TrendingUp,
      title: 'User Experience',
      description: 'Trading experiences that don\'t require a CS degree'
    }
  ];

  const evolution = [
    { label: 'Simple Token Swaps', progress: 100 },
    { label: 'Complex Yield Farming', progress: 85 },
    { label: 'Basic AMMs', progress: 100 },
    { label: 'Sophisticated Order Books', progress: 90 }
  ];

  return (
    <section id="defi-section" className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-16">
          

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
            Why DeFi and DEX Development {" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              Is Critical Right Now
            </span>
          </h2>
        </div>

        {/* Main Content Split */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - The Shift */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full"></div>
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  A Fundamental Shift in Finance
                </h3>
                
                <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100 mb-6">
                  <p className="text-md text-gray-700 leading-relaxed mb-4">
                    The traditional finance world is watching DeFi with a mix of curiosity and concern, and honestly, they should be.
                  </p>
                  <div className="flex items-start bg-blue-50 rounded-xl p-4 border border-blue-200">
                    <Lightbulb className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 font-medium">
                      We're not just talking about another fintech trend – we're looking at a fundamental shift in how financial services work.
                    </p>
                  </div>
                </div>

                {/* Key Points Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {keyPoints.map((point, idx) => {
                    const Icon = point.icon;
                    return (
                      <div
                        key={idx}
                        className={`bg-white rounded-xl p-5 border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                          activeInsight === idx ? 'border-blue-500 shadow-lg' : 'border-blue-100'
                        }`}
                        onMouseEnter={() => setActiveInsight(idx)}
                      >
                        <Icon className={`w-8 h-8 mb-3 transition-colors ${
                          activeInsight === idx ? 'text-blue-600' : 'text-blue-400'
                        }`} />
                        <h4 className="font-bold text-gray-900 mb-2">{point.title}</h4>
                        <p className="text-sm text-gray-600">{point.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Reality Check */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-transparent bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">The Reality</h3>
              </div>
              
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Building a successful DeFi protocol or decentralized exchange isn't just about smart contracts and flashy interfaces.
              </p>

              <div className="space-y-4">
                {[
                  'Projects that succeed understand users need platforms they can trust',
                  'Protocols must be secure and won\'t drain funds overnight',
                  'Trading experiences shouldn\'t require technical expertise'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-300 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-blue-50">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Journey</h3>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                At OpenSoft AI, we've been building DeFi protocols and DEX platforms since the space was just getting started. We've witnessed the complete evolution of decentralized finance.
              </p>

              {/* Evolution Progress Bars */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  Evolution Journey
                </h4>
                {evolution.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="text-blue-600 font-bold">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${item.progress * scrollProgress}%`,
                          transitionDelay: `${idx * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Insight Box */}
      
      </div>
    </section>
  );
}