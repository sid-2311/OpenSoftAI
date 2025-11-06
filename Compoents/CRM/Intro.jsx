"use client";
import { useState, useEffect } from 'react';
import { Users, Handshake, MessageSquare, Target, HeartHandshake, LineChart } from 'lucide-react';

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
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Why Most CRMs Fail (And How to Build One That Works)
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build a CRM your team actually wants to use — intuitive, flexible, and built around your real customer relationships.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Side - Description */}
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Here’s the uncomfortable truth about CRM systems: most sales teams hate them. 
                They start with good intentions – better lead tracking, improved customer relationships, 
                more closed deals – but end up with digital paperwork that slows everyone down.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                The issue isn’t with CRM as a concept. Managing customer relationships is critical for business growth. 
                The real problem is that most CRMs are built for <span className="font-semibold text-blue-600">generic businesses</span> 
                with one-size-fits-all processes.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                At <span className="font-semibold text-blue-700">OpenSoft AI</span>, we build CRM systems that fit naturally 
                into how your team already works — whether you run a B2B enterprise with long sales cycles, 
                an e-commerce store handling thousands of interactions, or a service business nurturing long-term clients.
              </p>
            </div>
          </div>

          {/* Right Side - Interactive Circles */}
          <div className={`transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative h-96 flex items-center justify-center">
              {/* Center circle */}
              <div className="absolute w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-2xl z-10">
                <span className="text-white font-bold text-lg">CRM</span>
              </div>

              {/* Orbiting features */}
              {features.map((feature, index) => {
                const angle = (index * 60) * (Math.PI / 180);
                const radius = 140;
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
                      className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                        isActive ? 'ring-4 ring-blue-300' : ''
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div
                      className={`absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <span className="text-sm font-semibold text-blue-700">{feature.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg border border-blue-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Build Your Custom CRM with OpenSoft AI</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
