'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Brain, Sparkles, Zap, TrendingUp } from 'lucide-react';

export default function AISolutionsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" aria-hidden="true" />,
      title: "Intelligent Automation",
      description: "Streamline complex workflows with AI that learns and adapts to your business processes."
    },
    {
      icon: <TrendingUp className="w-6 h-6" aria-hidden="true" />,
      title: "Predictive Analytics",
      description: "Stay ahead of market trends with AI-powered forecasting and data-driven insights."
    },
    {
      icon: <Sparkles className="w-6 h-6" aria-hidden="true" />,
      title: "Custom Experiences",
      description: "Create personalized customer journeys that evolve with every interaction."
    },
    {
      icon: <Zap className="w-6 h-6" aria-hidden="true" />,
      title: "Real-time Processing",
      description: "Make instant decisions with AI that processes data at lightning speed."
    }
  ];

  return (
    <section
      className="relative bg-white text-gray-900 overflow-hidden py-24 px-4 sm:px-6 lg:px-8"
      aria-labelledby="ai-solutions-heading"
    >
      {/* SEO Heading */}
      <h2 id="ai-solutions-heading" className="sr-only">
        AI Solutions and Features by OpenSoftAI
      </h2>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Dynamic Orbs */}
      <div
        className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{
          top: '10%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
        }}
      />
      <div
        className="absolute w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{
          bottom: '10%',
          right: '10%',
          animationDelay: '2s',
          transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)`
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 md-mt-24">
            <h3 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900">
              Transform Your Business with {" "}
              <span className=" mt-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                Intelligent AI
              </span>
            </h3>

            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              Think of AI development as building a digital brain for your business—one that learns, adapts, and gets smarter with every interaction. While off-the-shelf AI tools serve basic needs, custom AI development creates solutions that think exactly like your business does.
            </p>

            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              At <span className="text-blue-600 font-semibold">OpenSoftAI</span>, we don't just code algorithms; we architect intelligent systems that solve real business problems. Whether you're looking to automate complex processes, predict market trends, or create entirely new customer experiences, our AI development services turn ambitious ideas into working reality.
            </p>

            <Link
              href="/contact-us"
              className="group relative inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              aria-label="Start your AI journey with OpenSoftAI"
            >
              <span className="relative z-10">Start Your AI Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Right Visual Content */}
          <div className="relative">
            {/* Animated Brain Circle */}
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-blue-200 bg-gradient-to-br from-blue-50 to-white backdrop-blur-sm shadow-2xl shadow-blue-500/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animated Rings */}
                  <div className="absolute inset-0 border-2 border-blue-300 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
                  <div className="absolute inset-4 border-2 border-blue-400 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
                  <div className="absolute inset-8 border-2 border-blue-500 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '2s' }} />

                  {/* Center Brain Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 transform hover:rotate-12 transition-transform duration-500">
                      <Brain className="w-16 h-16 text-white" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <div
                className="absolute top-8 right-8 w-16 h-16 bg-blue-100 backdrop-blur-md rounded-xl border border-blue-200 flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/20"
                style={{ animationDuration: '3s' }}
              >
                <Zap className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
              <div
                className="absolute bottom-12 left-8 w-16 h-16 bg-blue-100 backdrop-blur-md rounded-xl border border-blue-200 flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/20"
                style={{ animationDuration: '3s', animationDelay: '1s' }}
              >
                <TrendingUp className="w-8 h-8 text-blue-600" aria-hidden="true" />
              </div>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className="group p-6 rounded-xl border border-blue-100 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-blue-500/10"
                  aria-label={feature.title}
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {feature.icon}
                  </div>
                  <h4 className="text-sm font-semibold mb-2 text-gray-900">{feature.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </section>
  );
}
