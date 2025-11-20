"use client";
import Head from 'next/head';
import { Shield, Lock, TrendingUp, CheckCircle, Zap, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CryptoTrustSection() {
  const features = [
    {
      icon: Shield,
      title: "Fortress-Level Security",
      description: "Multi-layer security architecture protecting billions in digital assets",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built-in compliance frameworks for global cryptocurrency regulations",
      color: "from-blue-600 to-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Proven Track Record",
      description: "Years of experience since Bitcoin's early days building secure platforms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: CheckCircle,
      title: "Seamless Experience",
      description: "Enterprise security without compromising user experience",
      color: "from-indigo-500 to-blue-600"
    }
  ];

  // const stats = [
  //   { icon: Zap, value: "10+", label: "Years Experience" },
  //   { icon: Award, value: "$5B+", label: "Assets Secured" },
  //   { icon: Users, value: "100+", label: "Platforms Built" }
  // ];

  return (
    <>
      

      <section className="relative min-h-screen py-20 px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay-1"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delay-2"></div>
        </div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Header */}
          <div className="text-center mb-20">
           
            
            <h1 className="text-5xl md:text-4xl lg:text-4xl font-black text-white mb-8 leading-tight">
              Building Trust in the {" "}
            
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                Digital Asset Economy
              </span>
            </h1>
            
            <p className="text-md text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Where cutting-edge technology meets bulletproof security to create the future of cryptocurrency platforms
            </p>
          </div>

          {/* Stats Bar */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 text-center hover:border-blue-400/40 transition-all">
                    <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-blue-300 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Main Content Glass Card */}
          <div className="relative group mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-2xl border border-blue-500/20 rounded-3xl p-8 md:p-12 shadow-2xl">
              <article className="prose prose-lg prose-invert max-w-none">
                <div className="space-y-6 text-blue-100 leading-relaxed">
                  <p className="text-lg">
                    In the world of cryptocurrency, <strong className="text-cyan-300">trust is everything</strong>. Users need to know their digital assets are safe, their transactions are secure, and their platform won't disappear overnight. Whether you're building the next generation crypto exchange or launching an innovative wallet solution, the stakes couldn't be higher. <span className="text-yellow-400">One security vulnerability or compliance oversight can destroy years of reputation building in minutes.</span>
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  
                  <p className="text-lg">
                    That's the reality of <strong className="text-cyan-300">crypto wallet and exchange development</strong> – it's not just about building functional software, it's about creating fortress-level security while maintaining the seamless user experience that drives adoption. At <strong className="text-white">OpenSoftAI</strong>, we understand that successful crypto platforms require a perfect balance of cutting-edge technology, bulletproof security, and regulatory compliance.
                  </p>
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                  
                  <p className="text-lg">
                    OpenSoftAI has been developing <strong className="text-cyan-300">crypto wallets and exchange platforms</strong> since the early days of Bitcoin, and we've seen what works and what doesn't. We've watched exchanges handle billions in volume, witnessed security breaches that could have been prevented, and learned from regulatory changes that caught many platforms off guard. This experience has taught us that building successful crypto infrastructure requires more than just coding skills – it requires deep understanding of cryptography, blockchain technology, financial regulations, and user behavior.
                  </p>
                </div>
              </article>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 h-full hover:border-blue-400/40 transition-all hover:scale-105 duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-blue-200 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-30"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build the Future?
              </h2>
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Join the platforms that trust OpenSoftAI with their digital assets and user security
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact-us" className="group bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2">
                  Start Building Your Platform
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }

          @keyframes gradient {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-float {
            animation: float 20s infinite ease-in-out;
          }
          
          .animate-float-delay-1 {
            animation: float 20s infinite ease-in-out;
            animation-delay: -7s;
          }
          
          .animate-float-delay-2 {
            animation: float 20s infinite ease-in-out;
            animation-delay: -14s;
          }

          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 5s ease infinite;
          }

          .bg-grid-pattern {
            background-image: 
              linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px);
            background-size: 50px 50px;
          }
        `}</style>
      </section>
    </>
  );
}