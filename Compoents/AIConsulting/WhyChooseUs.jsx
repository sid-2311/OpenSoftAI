"use client";
import { useState, useEffect } from 'react';
import { Award, Lightbulb, Users, Target, ArrowRight, CheckCircle, Star } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const reasons = [
    {
      icon: Award,
      title: 'Proven Multi-Industry Experience',
      description: 'We\'ve successfully guided AI adoption across diverse sectors, from highly regulated industries like healthcare and finance to fast-moving sectors like retail and technology. This breadth of experience means we understand the unique challenges and opportunities in your industry.',
      highlights: ['Healthcare', 'Finance', 'Retail', 'Technology'],
      stats: 'Diverse Sectors'
    },
    {
      icon: Lightbulb,
      title: 'Technical Excellence Meets Business Acumen',
      description: 'Our team includes certified AI engineers, data scientists, and business strategy experts. This combination ensures our recommendations are both technically sound and commercially viable.',
      highlights: ['AI Engineers', 'Data Scientists', 'Strategy Experts', 'Certified Team'],
      stats: 'Expert Team'
    },
    {
      icon: Users,
      title: 'Transparent, Collaborative Process',
      description: 'We believe in working with you, not for you. Our consulting process is transparent, collaborative, and designed to transfer knowledge to your team. You\'ll understand not just what to do, but why and how to do it.',
      highlights: ['Transparent', 'Collaborative', 'Knowledge Transfer', 'Empowering'],
      stats: 'Partnership Approach'
    },
    {
      icon: Target,
      title: 'Commitment to Long-Term Success',
      description: 'We\'re not interested in quick consulting engagements that don\'t deliver lasting value. We\'re committed to your long-term AI success and provide ongoing support to ensure your initiatives continue to deliver results.',
      highlights: ['Long-term Focus', 'Ongoing Support', 'Lasting Value', 'Continuous Results'],
      stats: 'Sustained Growth'
    }
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Why Forward-Thinking Companies {" "}
            <span className=" mt-3 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              Choose OpenSoftAI
            </span>
          </h2>

         
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Card Container */}
                <div className={`relative bg-gradient-to-br from-white to-blue-50 rounded-3xl p-8 border-2 transition-all duration-500 h-full ${
                  isActive 
                    ? 'border-blue-500 shadow-2xl scale-[1.02]' 
                    : 'border-blue-100 shadow-lg hover:border-blue-300 hover:shadow-xl'
                }`}>
                  
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 opacity-10 rounded-bl-full transition-opacity duration-500 ${
                    isActive ? 'opacity-20' : ''
                  }`}></div>

                  {/* Icon Badge */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg transition-all duration-500 ${
                      isActive ? 'scale-110 rotate-6' : 'group-hover:scale-105'
                    }`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute -top-2 -right-2 bg-blue-100 border-2 border-blue-300 px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-blue-800">{reason.stats}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                    {reason.title}
                  </h3>

                  <p className="text-slate-600 text-md md:text-lg leading-relaxed mb-6">
                    {reason.description}
                  </p>

                  {/* Highlights Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {reason.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-100 text-blue-700 group-hover:bg-blue-200'
                        }`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Arrow Indicator */}
                  <div className={`flex items-center gap-2 text-blue-700 font-semibold transition-all duration-300 ${
                    isActive ? 'gap-4' : 'group-hover:gap-3'
                  }`}>
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>

                  {/* Active Indicator Line */}
                  
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Strip */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-10 shadow-2xl transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center md:text-left md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Transform Your Business with AI?
                </h3>
                <p className="text-blue-100 text-lg">
                  Join forward-thinking companies who trust OpenSoftAI for their AI transformation journey.
                </p>
              </div>
              
              <div className="flex justify-center md:justify-end">
                <Link href="/contact-us" className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        
      </div>
    </section>
  );
}