"use client";
import React, { useState, useEffect } from 'react';
import { Award, Shield, TrendingUp, Users, CheckCircle, Zap, Lock, Target, Sparkles, BarChart } from 'lucide-react';

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [countUp, setCountUp] = useState({ years: 0, contracts: 0, assets: 0 });

  // Animated counter effect
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCountUp({
        years: Math.floor(10 * progress),
        contracts: Math.floor(200 * progress),
        assets: Math.floor(1 * progress)
      });
      
      if (currentStep >= steps) clearInterval(timer);
    }, increment);
    
    return () => clearInterval(timer);
  }, []);

  const differentiators = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Rigorous testing, formal verification, and extensive security analysis before mainnet deployment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Built to Last",
      description: "Code that withstands market cycles and evolving security landscapes",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Elegant Simplicity",
      description: "Simple solutions without unnecessary complexity that creates attack vectors",
      color: "from-blue-600 to-blue-700"
    }
  ];

  const experience = [
    { icon: <TrendingUp className="w-5 h-5" />, text: "Multiple market cycles navigated" },
    { icon: <Lock className="w-5 h-5" />, text: "Every type of exploit analyzed" },
    { icon: <Sparkles className="w-5 h-5" />, text: "Simple token contracts to complex DeFi protocols" },
    { icon: <Users className="w-5 h-5" />, text: "Startups to established enterprises" }
  ];

  const achievements = [
    {
      number: `${countUp.years}+`,
      label: "Years of Expertise",
      icon: <Award className="w-8 h-8" />
    },
    {
      number: `${countUp.contracts}+`,
      label: "Smart Contracts Deployed",
      sublabel: "Zero post-audit vulnerabilities",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      number: `$${countUp.assets}B+`,
      label: "Assets Secured",
      sublabel: "Without security incidents",
      icon: <BarChart className="w-8 h-8" />
    }
  ];

  const useCases = [
    "Token Contracts",
    "DeFi Protocols",
    "NFT Marketplaces",
    "Supply Chain Automation",
    "Governance Systems",
    "Staking Mechanisms"
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
         
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              10 Years
            </span>
            {' '}of Smart Contract Excellence
          </h2>
          
          <p className="text-md text-blue-200 max-w-3xl mx-auto leading-relaxed">
            We've built smart contracts across every major use case – from simple tokens to complex 
            DeFi protocols managing hundreds of millions in assets.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  {achievement.number}
                </div>
              </div>
              <div className="text-white font-semibold text-lg mb-1">{achievement.label}</div>
              {achievement.sublabel && (
                <div className="text-blue-300 text-sm">{achievement.sublabel}</div>
              )}
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: What Makes Us Different */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-blue-400" />
                What Makes Us Different
              </h3>
              
              <div className="space-y-4">
                {differentiators.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-slate-800/50 rounded-xl p-6 border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br ${item.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-blue-200 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Highlights */}
            <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <h4 className="text-xl font-bold text-white mb-4">Battle-Tested Experience</h4>
              <div className="grid grid-cols-2 gap-4">
                {experience.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-blue-200">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Process & Use Cases */}
          <div className="space-y-6">
            {/* Our Process */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Development Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-blue-500/10">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <div className="text-white font-semibold mb-1">Rigorous Testing</div>
                    <div className="text-blue-200 text-sm">Comprehensive test coverage across all scenarios</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-blue-500/10">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <div className="text-white font-semibold mb-1">Formal Verification</div>
                    <div className="text-blue-200 text-sm">Mathematical proof of correctness where appropriate</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-blue-500/10">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <div className="text-white font-semibold mb-1">Security Analysis</div>
                    <div className="text-blue-200 text-sm">Extensive review before mainnet deployment</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-lg border border-blue-400/30">
                <p className="text-blue-100 text-sm leading-relaxed">
                  <strong className="text-white">Real-world experience matters.</strong> We've seen what happens when 
                  projects rush to market with inadequately tested contracts. Our entire workflow is built around 
                  preventing those disasters.
                </p>
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-white mb-6">Proven Across Use Cases</h3>
              <div className="grid grid-cols-2 gap-3">
                {useCases.map((useCase, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 bg-slate-800/50 rounded-lg p-3 border border-blue-500/10 hover:border-blue-400/30 transition-colors duration-300"
                  >
                    <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span className="text-blue-100 text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-center shadow-2xl shadow-blue-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            The Best Smart Contracts Are Often The Simplest Ones
          </h3>
          <p className="text-blue-100 text-md md:text-lg max-w-4xl mx-auto leading-relaxed">
            Elegant solutions that do exactly what they need to do without unnecessary complexity 
            that creates attack vectors. That's the OpenSoftAI difference.
          </p>
        </div>
      </div>
    </section>
  );
}