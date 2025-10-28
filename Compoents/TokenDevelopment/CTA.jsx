"use client";
import { useState, useEffect } from 'react';
import { Calendar, FileText, FolderOpen, ArrowRight, Sparkles, Zap, Rocket } from 'lucide-react';

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const actions = [
    {
      icon: Calendar,
      title: 'Schedule Your Free Consultation',
      description: 'Get expert guidance on your token strategy',
      primary: true,
      delay: 0
    },
    {
      icon: FileText,
      title: 'Get a Project Quote',
      description: 'Transparent pricing for your requirements',
      primary: false,
      delay: 100
    },
    {
      icon: FolderOpen,
      title: 'View Our Portfolio',
      description: 'See our successful token launches',
      primary: false,
      delay: 200
    }
  ];

  const floatingIcons = [
    { Icon: Sparkles, position: 'top-10 left-10', delay: '0s' },
    { Icon: Zap, position: 'top-20 right-20', delay: '1s' },
    { Icon: Rocket, position: 'bottom-10 left-20', delay: '2s' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
        <div
          key={idx}
          className={`absolute ${item.position} text-white opacity-10`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: item.delay
          }}
        >
          <item.Icon className="w-16 h-16" />
        </div>
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 mb-6">
              <Rocket className="w-4 h-4 text-white mr-2" />
              <span className="text-white text-sm font-semibold">Take the Next Step</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Launch
              <span className="block text-blue-200 mt-2">Your Token?</span>
            </h2>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-4">
              Building a successful token isn't just about the technology – it's about creating something that serves your business goals and provides real value to your users.
            </p>

            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              If you're ready to move beyond the planning phase and start building something that actually works, let's talk.
            </p>
          </div>

          {/* Value Proposition Box */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white border-opacity-20 shadow-2xl">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center mr-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get started today
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    Contact OpenSoft AI for a free consultation and token strategy session. We'll review your project requirements, discuss the best technical approach, and provide you with a clear roadmap for your token development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {actions.map((action, idx) => {
              const Icon = action.icon;
              const isHovered = hoveredButton === idx;
              
              return (
                <div
                  key={idx}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${action.delay}ms` }}
                  onMouseEnter={() => setHoveredButton(idx)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  <button className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                    action.primary 
                      ? 'bg-white text-blue-600 shadow-2xl hover:shadow-white/20' 
                      : 'bg-white bg-opacity-10 backdrop-blur-sm text-white border-2 border-white border-opacity-30 hover:bg-opacity-20 hover:border-opacity-50'
                  }`}>
                    {/* Animated Background Gradient */}
                    {action.primary && (
                      <div className={`absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                    )}

                    <div className="relative p-8">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-4 transition-all duration-300 ${
                        action.primary 
                          ? 'bg-blue-100 group-hover:bg-blue-200' 
                          : 'bg-white bg-opacity-20 group-hover:bg-opacity-30'
                      } ${isHovered ? 'scale-110 rotate-6' : 'scale-100'}`}>
                        <Icon className={`w-7 h-7 ${action.primary ? 'text-blue-600' : 'text-white'}`} />
                      </div>

                      {/* Text Content */}
                      <h3 className={`text-xl font-bold mb-2 ${action.primary ? 'text-blue-600' : 'text-white'}`}>
                        {action.title}
                      </h3>
                      <p className={`text-sm mb-4 ${action.primary ? 'text-blue-500' : 'text-blue-200'}`}>
                        {action.description}
                      </p>

                      {/* Arrow */}
                      <div className={`inline-flex items-center font-semibold text-sm transition-transform duration-300 ${
                        isHovered ? 'translate-x-2' : 'translate-x-0'
                      } ${action.primary ? 'text-blue-600' : 'text-white'}`}>
                        <span>Get Started</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <div className="inline-block bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white border-opacity-20">
              <p className="text-white text-lg font-medium">
                Ready to turn your token idea into reality?{' '}
                <span className="text-blue-200 font-bold">Let's build something great together.</span>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '98%', label: 'Success Rate' },
              { value: '24/7', label: 'Support' },
              { value: '100%', label: 'Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>
    </section>
  );
}