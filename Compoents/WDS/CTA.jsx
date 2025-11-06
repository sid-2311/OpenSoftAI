"use client";
import { useState, useEffect } from 'react';
import { Globe, MessageSquare, FolderOpen, ArrowRight, Sparkles } from 'lucide-react';

export default function WebsiteCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ctaButtons = [
    {
      icon: Globe,
      title: 'Schedule Your Website Consultation',
      description: 'Talk to our web experts',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: MessageSquare,
      title: 'Discuss Your Project Requirements',
      description: 'Share your goals with us',
      gradient: 'from-blue-600 to-blue-800',
    },
    {
      icon: FolderOpen,
      title: 'View Our Website Portfolio',
      description: 'See our recent projects',
      gradient: 'from-blue-700 to-blue-900',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main card */}
        <div
          className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header section */}
          <div className="relative p-12 pb-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white leading-tight">
              Ready to{' '}
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                Build Your Business Website?
              </span>
            </h2>

            <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Your website should be working as hard for your business as you are — a digital platform that attracts, engages, and converts visitors into customers.
            </p>

            <p className="text-lg text-blue-200 text-center max-w-3xl mx-auto leading-relaxed">
              From professional portfolios to advanced eCommerce stores, <span className="text-blue-300 font-bold">OpenSoft AI</span> builds websites that deliver real business results.
            </p>
          </div>

          {/* Divider */}
          <div className="relative h-px mx-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
          </div>

          {/* CTA Buttons */}
          <div className="p-12 pt-10">
            <div className="text-center mb-10">
              <p className="text-2xl text-white font-semibold mb-2">
                Build your business website with OpenSoft AI today.
              </p>
              <p className="text-lg text-blue-200">
                From simple static sites to powerful eCommerce platforms — let’s create a website that accelerates your business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {ctaButtons.map((button, index) => {
                const Icon = button.icon;
                const isActive = activeButton === index;

                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveButton(index)}
                    onMouseLeave={() => setActiveButton(null)}
                    className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left overflow-hidden ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${button.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>

                    <div className="relative z-10">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${button.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {button.title}
                      </h3>

                      <p className="text-sm text-gray-600 group-hover:text-blue-100 mb-4 transition-colors duration-300">
                        {button.description}
                      </p>

                      <div className="flex items-center gap-2 text-blue-600 group-hover:text-white font-semibold transition-colors duration-300">
                        <span className="text-sm">Get Started</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Trust badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white/20"
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-blue-100 font-semibold">
                  Trusted by 500+ businesses worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Online badge */}
        <div
          className={`text-center mt-8 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-blue-100 font-semibold">
              Our team is online and ready to help
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
