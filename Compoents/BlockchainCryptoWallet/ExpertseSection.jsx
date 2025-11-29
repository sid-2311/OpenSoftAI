"use client";
import Head from 'next/head';
import { Code, Shield, Users, Zap, CheckCircle, TrendingUp, Lock, Layers, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';

export default function CryptoExpertiseSection() {
  const expertiseAreas = [
    {
      icon: Code,
      title: "Blockchain Development",
      description: "Expert developers with deep knowledge of cryptography and distributed systems",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Security Auditing",
      description: "Comprehensive security protocols and vulnerability assessment",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Cpu,
      title: "Matching Engine",
      description: "High-performance systems handling thousands of transactions per second",
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      icon: Globe,
      title: "Regulatory Compliance",
      description: "Built-in frameworks for global cryptocurrency regulations",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  const platforms = [
    { icon: Users, label: "Custodial Wallets", color: "blue" },
    { icon: Lock, label: "Non-Custodial Wallets", color: "indigo" },
    { icon: TrendingUp, label: "Centralized Exchanges", color: "cyan" },
    { icon: Layers, label: "Decentralized Exchanges", color: "blue" },
    { icon: Zap, label: "Hybrid Solutions", color: "indigo" },
    { icon: CheckCircle, label: "Institutional Trading", color: "cyan" }
  ];

  const stats = [
    { value: "$1B+", label: "Transaction Volume", suffix: "" },
    { value: "500+", label: "Users Served", suffix: "" },
    { value: "100%", label: "Uptime Record", suffix: "" },
    { value: "50+", label: "Platforms Launched", suffix: "" }
  ];

  return (
    <>
     

      <section className="relative py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slower"></div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 bg-grid-blue opacity-[0.02]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            
            
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Deep Expertise in{" "}
             
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                Crypto Infrastructure Development
              </span>
            </h2>
            
            <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building secure crypto wallets and exchange platforms isn't just our business – it's our specialty
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300">
                  <div className="text-3xl md:text-3xl font-black bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Layers className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Team Expertise</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our team brings together <strong className="text-blue-600">blockchain developers, cryptography experts, financial technology specialists, and security auditors</strong> who understand every aspect of digital asset management.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From the mathematical foundations of elliptic curve cryptography to the practical challenges of scaling matching engines to handle thousands of transactions per second, we have the expertise to build platforms that work reliably at scale.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-xl text-white">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Holistic Development Approach</h3>
                <p className="text-blue-50 leading-relaxed">
                  What sets OpenSoftAI apart is our <strong>holistic approach</strong> to crypto platform development. We don't just focus on the technical architecture – we consider user experience, regulatory compliance, security protocols, and business model sustainability from day one.
                </p>
              </div>
            </div>

            {/* Right Column - Expertise Areas */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-blue-600" />
                  Core Expertise Areas
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {expertiseAreas.map((area, index) => {
                    const Icon = area.icon;
                    return (
                      <div 
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-br ${area.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-1">{area.title}</h4>
                          <p className="text-sm text-gray-600">{area.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Platform Types */}
          <div className="bg-white rounded-3xl p-10 shadow-2xl border border-blue-100 mb-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Platform Spectrum</h3>
              <p className="text-gray-600 text-md md:text-lg max-w-3xl mx-auto">
                Our experience spans the entire spectrum of crypto platforms – from simple mobile wallets to sophisticated institutional trading systems
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {platforms.map((platform, index) => {
                const Icon = platform.icon;
                const colorMap = {
                  blue: 'from-blue-500 to-blue-600',
                  indigo: 'from-indigo-500 to-indigo-600',
                  cyan: 'from-cyan-500 to-blue-500'
                };
                return (
                  <div 
                    key={index}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-blue-100 hover:border-blue-300">
                      <div className={`w-14 h-14 bg-gradient-to-br ${colorMap[platform.color]} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">{platform.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-3xl font-bold text-white mb-6">
                Built for Success & Sustainable Growth
              </h3>
              <p className="text-lg md:text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                This comprehensive approach has helped our clients launch platforms that not only function perfectly but also achieve <strong className="text-white">rapid user adoption and sustainable growth</strong> through multiple market cycles and regulatory changes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact-us" className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Start Your Project
                </Link>
                <Link href="/portfolio" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse-slow {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.05);
            }
          }

          @keyframes pulse-slower {
            0%, 100% {
              opacity: 0.3;
              transform: scale(1);
            }
            50% {
              opacity: 0.4;
              transform: scale(1.08);
            }
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 8s ease-in-out infinite;
          }
          
          .animate-pulse-slower {
            animation: pulse-slower 10s ease-in-out infinite;
          }

          .bg-grid-blue {
            background-image: 
              linear-gradient(to right, rgb(59 130 246) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246) 1px, transparent 1px);
            background-size: 40px 40px;
          }

          .bg-grid-white {
            background-image: 
              linear-gradient(to right, rgba(255, 255, 255, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
            background-size: 30px 30px;
          }
        `}</style>
      </section>
    </>
  );
}