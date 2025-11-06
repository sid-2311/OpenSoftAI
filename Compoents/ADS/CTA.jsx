"use client";
import { useState, useEffect } from 'react';
import { Calendar, MessageSquare, Smartphone, ArrowRight, Sparkles } from 'lucide-react';

export default function ADSCTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const ctaButtons = [
    {
      icon: Calendar,
      title: 'Schedule Your App Development Consultation',
      description: 'Talk to our experts',
      gradient: 'from-blue-500 to-indigo-700'
    },
    {
      icon: MessageSquare,
      title: 'Discuss Your App Concept',
      description: 'Share your ideas with us',
      gradient: 'from-indigo-600 to-purple-700'
    },
    {
      icon: Smartphone,
      title: 'View Our Mobile Portfolio',
      description: 'Explore previous projects',
      gradient: 'from-purple-600 to-pink-700'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main content card */}
        <div className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header section */}
          <div className="relative p-12 pb-8">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>

            {/* Sparkle icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-white leading-tight">
              Ready to Build Your{' '}
              <span className="bg-gradient-to-r from-indigo-300 to-purple-500 bg-clip-text text-transparent">
                Mobile App?
              </span>
            </h2>

            <p className="text-xl text-indigo-100 text-center max-w-3xl mx-auto leading-relaxed mb-4">
              The mobile app landscape is competitive, but there's always room for applications that solve real problems elegantly and provide genuine value to users.
            </p>

            <p className="text-lg text-indigo-200 text-center max-w-3xl mx-auto leading-relaxed">
              Turn your idea into a powerful mobile app with <span className="text-indigo-300 font-semibold">OpenSoft AI</span>. Contact us today to discover how expert mobile development can bring your vision to life and build sustainable business value.
            </p>
          </div>

          {/* Divider */}
          <div className="relative h-px mx-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"></div>
          </div>

          {/* CTA Buttons */}
          <div className="p-12 pt-10">
            <div className="text-center mb-10">
              <p className="text-2xl text-white font-semibold mb-2">
                Let's turn your app concept into reality.
              </p>
              <p className="text-lg text-indigo-200">
                Partner with <span className="text-indigo-300 font-bold">OpenSoft AI</span> to develop an app that stands out and creates real business impact.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {ctaButtons.map((button, index) => {
                const Icon = button.icon;
                return (
                  <button
                    key={index}
                    onMouseEnter={() => setActiveButton(index)}
                    onMouseLeave={() => setActiveButton(null)}
                    className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-left overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${300 + index * 150}ms` }}
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${button.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`w-14 h-14 bg-gradient-to-br ${button.gradient} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 group-hover:text-white mb-2 transition-colors duration-300">
                        {button.title}
                      </h3>
                      <p className="text-sm text-gray-600 group-hover:text-indigo-100 mb-4 transition-colors duration-300">
                        {button.description}
                      </p>
                      <div className="flex items-center gap-2 text-indigo-600 group-hover:text-white font-semibold transition-colors duration-300">
                        <span className="text-sm">Get Started</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Trust Badge */}
            <div className="flex justify-center">
              <div className="flex items-center gap-3 bg-indigo-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-400/30">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 border-2 border-white/20"></div>
                  ))}
                </div>
                <span className="text-sm text-indigo-100 font-semibold">Trusted by 500+ startups & enterprises</span>
              </div>
            </div>
          </div>
        </div>

        {/* Online Badge */}
        <div className={`text-center mt-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-indigo-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-indigo-400/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-indigo-100 font-semibold">Our app development team is online and ready to help</span>
          </div>
        </div>
      </div>
    </section>
  );
}
