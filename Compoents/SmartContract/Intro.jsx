"use client";
import React from 'react';
import { Shield, AlertTriangle, CheckCircle, Lock, Zap, Code } from 'lucide-react';

export default function SmartContractSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description: "Built to handle edge cases and prevent vulnerabilities before deployment"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Gas Optimized",
      description: "Efficient code that minimizes transaction costs without compromising functionality"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Immutable Excellence",
      description: "Designed right the first time - because there's no room for patches"
    }
  ];

  const stats = [
    { value: "24/7", label: "Trustless Automation" },
    { value: "0", label: "Human Intervention" },
    { value: "100%", label: "Code Reliability" }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Alert */}
        <div className="mb-12">
          
          
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why Smart Contract Development Is{' '}
            <span className="text-blue-600">Make-or-Break</span> for Your Project
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The Backbone of Blockchain</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Smart contracts are essentially the backbone of everything happening in blockchain today. 
                    But here's what most people don't realize until it's too late: one small bug in your smart 
                    contract code can cost millions.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  We've all seen the headlines about DeFi hacks, NFT exploits, and token vulnerabilities. 
                  What we don't always hear about is that <strong className="text-blue-700">most of these disasters 
                  were completely preventable</strong> with proper development practices.
                </p>
              </div>

              <p className="text-gray-600 leading-relaxed">
                Smart contracts aren't just code – they're <strong className="text-gray-900">immutable financial 
                agreements</strong> that handle real money and real assets. Once deployed, you can't just patch 
                them like a regular app. This permanence is both the power and the risk of smart contract development.
              </p>
            </div>

            {/* The Stakes */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">The Stakes Are High</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-blue-50">
                    <strong>Get it right:</strong> Trustless automation that works 24/7 without human intervention
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p className="text-blue-50">
                    <strong>Get it wrong:</strong> Potential losses that could sink your entire project
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Features & Stats */}
          <div className="space-y-6">
            {/* Features Grid */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">What Success Looks Like</h3>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* OpenSoft AI Expertise */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold">OpenSoft AI Expertise</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We've been developing smart contracts since the early days of Ethereum. Our approach isn't 
                just about writing functional code – it's about building systems that are secure, gas-efficient, 
                and designed to handle edge cases you haven't even thought of yet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}