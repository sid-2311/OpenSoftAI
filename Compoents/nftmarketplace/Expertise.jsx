"use client"
import React, { useState, useEffect } from 'react';
import { Palette, Gamepad2, Music, Building2, Zap, Shield, Users, Target } from 'lucide-react';
import Link from 'next/link';

export default function NFTExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const verticals = [
    {
      icon: Palette,
      title: "Art Galleries",
      description: "Platforms that rival traditional auction houses",
      gradient: "from-blue-400 to-cyan-400"
    },
    {
      icon: Gamepad2,
      title: "Gaming Platforms",
      description: "Millions of in-game assets traded seamlessly",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Music,
      title: "Music Marketplaces",
      description: "Revolutionizing artist-fan connections",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      icon: Building2,
      title: "Enterprise Platforms",
      description: "Tokenizing real-world assets at scale",
      gradient: "from-blue-600 to-blue-400"
    }
  ];

  const challenges = [
    {
      icon: Zap,
      title: "Gas Optimization",
      description: "Affordable minting for everyone"
    },
    {
      icon: Target,
      title: "Scalability",
      description: "Handle viral drops with ease"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Protection for high-value transactions"
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Accessible to all user levels"
    }
  ];

  const stats = [
    { value: "$50M+", label: "Trading Volume" },
    { value: "500K+", label: "NFTs Minted" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "24/7", label: "Platform Uptime" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-normal filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-normal filter blur-3xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-normal filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Our NFT Marketplace{" "}</span>
            <span className=" mt-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Development Expertise
            </span>
          </h2>
          
          <p className="text-md text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We've built NFT marketplaces across every vertical, creating community-driven ecosystems that deliver real value.
          </p>
        </div>

        {/* Verticals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <div
                key={index}
                className={`group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/50 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  activeCard === index ? 'ring-2 ring-blue-400 scale-105' : ''
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${vertical.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className={`w-14 h-14 bg-gradient-to-br ${vertical.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {vertical.title}
                </h3>
                <p className="text-blue-200 text-sm leading-relaxed">
                  {vertical.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-slate-800/80 to-blue-950/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 border border-blue-800/50 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                What Makes Us Different
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                The best NFT marketplaces aren't just technical platforms – they're community-driven ecosystems. Success isn't measured just in transaction volume, but in creator retention, user engagement, and long-term value creation.
              </p>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Our development approach combines deep technical expertise with user experience design that actually makes sense to people who aren't blockchain experts.
              </p>
              <p className="text-blue-100 leading-relaxed">
                We've seen too many technically impressive platforms fail because they were too complicated for creators and collectors to use effectively.
              </p>
            </div>

            {/* Challenges Grid */}
            <div className="grid grid-cols-2 gap-4">
              {challenges.map((challenge, index) => {
                const Icon = challenge.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-semibold mb-1 text-sm">
                      {challenge.title}
                    </h4>
                    <p className="text-blue-300 text-xs">
                      {challenge.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-white text-lg mb-6">
              Built NFT marketplaces with over $50M in total trading volume across gaming, art, and enterprise use cases
            </p>
            <Link href="/conatct-us" className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Your Project
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-blue-200 text-lg mb-6">
            Ready to build the next generation NFT marketplace?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              View Case Studies
            </Link>
            <Link href="/conatct-us" className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-blue-500">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}