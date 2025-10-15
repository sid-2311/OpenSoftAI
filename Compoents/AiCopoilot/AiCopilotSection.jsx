"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, TrendingUp, FileText, Clock, Brain, Zap, BarChart3 } from 'lucide-react';

export default function AICopilotSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [pulseScale, setPulseScale] = useState(1);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseScale(prev => prev === 1 ? 1.05 : 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Intelligent Automation",
      description: "Streamline complex workflows with AI that learns and adapts to your business processes.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Stay ahead of market trends with AI-powered forecasting and data-driven insights.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Custom Experiences",
      description: "Create personalized customer journeys that evolve with every interaction.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Make instant decisions with AI that processes data at lightning speed.",
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Remember When Having a{' '}
                <span className="text-blue-600">Work Assistant Was a Luxury?</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Imagine this: It's Monday morning, and instead of drowning in spreadsheets and repetitive tasks, your team has an AI assistant that already analyzed last week's data, drafted your quarterly report, and highlighted the trends you need to know about.
                </p>
                
                <p className="font-medium text-gray-700">
                  Sounds too good to be true? That's exactly what happened when we built an AI copilot for a marketing agency last month.
                </p>
                
                <p>
                  The thing about AI copilots is they're not trying to replace anyone—they're like having that incredibly organized colleague who remembers everything, never gets tired, and always has the right information at their fingertips.
                </p>
                
                <p>
                  At <span className="font-semibold text-blue-600">OpenSoft AI</span>, we've been building these digital teammates for teams who want to focus on strategy and creativity instead of getting buried in busy work.
                </p>
                
                <p className="text-gray-700 font-medium">
                  Think of an AI copilot as your personal work assistant who learns how you think, understands what you need, and gets better at helping you every single day. The difference is, this assistant works 24/7 and never forgets where you left that important document.
                </p>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Start Your AI Journey
            </button>
          </div>

          {/* Right: Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 shadow-xl border border-blue-100">
              {/* Top Right Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>

              {/* Center Brain Icon with Pulse Rings */}
              <div className="flex items-center justify-center py-12 relative">
                {/* Outer Ring */}
                <div 
                  className="absolute w-64 h-64 border-2 border-blue-200 rounded-full"
                  style={{
                    transform: `scale(${pulseScale})`,
                    transition: 'transform 2s ease-in-out'
                  }}
                ></div>
                
                {/* Middle Ring */}
                <div className="absolute w-48 h-48 border-2 border-blue-300 rounded-full"></div>
                
                {/* Inner Circle with Icon */}
                <div className="relative w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-300/50 z-10">
                  <Brain className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Bottom Left Icon */}
              <div className="absolute bottom-6 left-6 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
            </div>

            {/* Feature Cards Grid Below */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: `${(idx + 1) * 100}ms`
                  }}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: <Clock className="w-6 h-6" />, label: "Time Saved Weekly", value: "15+ Hours" },
            { icon: <FileText className="w-6 h-6" />, label: "Tasks Automated", value: "100+" },
            { icon: <TrendingUp className="w-6 h-6" />, label: "Accuracy Rate", value: "99.9%" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg text-center border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}