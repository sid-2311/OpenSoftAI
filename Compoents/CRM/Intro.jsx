"use client";
import { useState, useEffect } from 'react';
import { Users, Handshake, MessageSquare, Target, HeartHandshake, LineChart } from 'lucide-react';
import Link from 'next/link';

export default function CRMSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Users, title: 'Lead Management', color: 'from-blue-400 to-blue-600' },
    { icon: Handshake, title: 'Client Relations', color: 'from-blue-500 to-blue-700' },
    { icon: MessageSquare, title: 'Communication', color: 'from-blue-400 to-blue-600' },
    { icon: Target, title: 'Sales Pipeline', color: 'from-blue-500 to-blue-700' },
    { icon: HeartHandshake, title: 'Customer Retention', color: 'from-blue-400 to-blue-600' },
    { icon: LineChart, title: 'Analytics', color: 'from-blue-500 to-blue-700' }
  ];

  const benefits = [
    { title: 'Built Around You', desc: 'Custom CRM workflows that match your unique sales process.' },
    { title: 'Loved by Teams', desc: 'Designed to enhance productivity, not slow it down.' },
    { title: 'Unified Data', desc: 'All your customer insights in one connected platform.' },
    { title: 'Scalable & Smart', desc: 'Adapts as your business and customer base grow.' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 sm:mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Why Most CRMs Fail
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Build a CRM your team actually wants to use — intuitive, flexible, and built around your real customer relationships.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center mb-14 sm:mb-20">
          {/* Left Side - Description */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                Here’s the uncomfortable truth about CRM systems: most sales teams hate them. 
                They start with good intentions – better lead tracking, improved customer relationships, 
                more closed deals – but end up with digital paperwork that slows everyone down.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                The issue isn’t with CRM as a concept. Managing customer relationships is critical for business growth. 
                The real problem is that most CRMs are built for <span className="font-semibold text-blue-600">generic businesses</span> 
                with one-size-fits-all processes.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                At <span className="font-semibold text-blue-700">OpenSoft AI</span>, we build CRM systems that fit naturally 
                into how your team already works — whether you run a B2B enterprise with long sales cycles, 
                an e-commerce store handling thousands of interactions, or a service business nurturing long-term clients.
              </p>
            </div>
          </div>

          {/* Right Side - Interactive Circles */}
          <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-80 sm:h-96 flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-base sm:text-lg">CRM</span>
              </div>

              {/* Orbiting features */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = window.innerWidth < 640 ? 127 : 170; // Smaller orbit on mobile
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const Icon = feature.icon;
                const isActive = activeFeature === index;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-500"
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})`
                    }}
                  >
                    <div
                      className={`w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? 'ring-4 ring-blue-300' : ''
                      }`}
                    >
                      <Icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold text-blue-700">{feature.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 sm:mb-2">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href="/contact-us"
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden inline-block"
          >
            <span className="relative z-10">Build Your Custom CRM with OpenSoft AI</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}
