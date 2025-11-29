"use client";
import React, { useState } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Check, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CryptoCTA() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          
          
          <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Ready to Launch Your {" "}Crypto Platform?
          </h3>
          
          <p className="text-md text-blue-100 max-w-4xl mx-auto leading-relaxed">
            The crypto economy is growing exponentially, and the platforms that succeed will be those that prioritize security, compliance, and user experience from day one.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Shield, label: 'Security First', value: '100%', desc: 'Regulatory Compliance' },
            { icon: TrendingUp, label: 'Proven Results', value: '$1B+', desc: 'Assets Managed' },
            { icon: Users, label: 'Happy Clients', value: '50+', desc: 'Successful Launches' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-400/40 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-300 font-semibold mb-1">{stat.label}</div>
                <div className="text-blue-200/60 text-sm">{stat.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-slate-900/40 backdrop-blur-md border border-blue-500/20 rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Partner with OpenSoftAI?
              </h2>
              <p className="text-blue-100 leading-relaxed">
                We've helped dozens of companies successfully launch crypto platforms that users trust and regulators approve. From startup exchanges handling millions in daily volume to enterprise wallet solutions managing billions in assets.
              </p>
              <div className="space-y-4">
                {[
                  'Enterprise-grade security architecture',
                  'Full regulatory compliance support',
                  'Scalable infrastructure built for growth',
                  'Expert blockchain development team'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 to-slate-900/30 rounded-2xl p-8 border border-blue-500/20">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">The Stakes Are High</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                The crypto space moves fast, and hesitation can mean missing market opportunities. But rushing to market with inadequate security or compliance can be catastrophic.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                <p className="text-blue-200 text-sm italic">
                  "Partnering with experienced crypto developers isn't just advisable – it's essential for success in the digital asset economy."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Start Building Your Platform Today
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact-us" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 flex items-center gap-2">
              Get Free Platform Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link href="/contact-us" className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-blue-500/30 hover:border-blue-400/50 rounded-xl font-semibold text-white transition-all duration-300">
              Schedule Technical Demo
            </Link>
            
          
          </div>

          <p className="text-blue-200 text-lg mt-8 max-w-3xl mx-auto">
            Whether you have detailed technical requirements or just an innovative idea for disrupting digital asset management, we're here to help you build a platform that users will trust with their most valuable digital assets.
          </p>

          <div className="mt-12 pt-8 border-t border-blue-500/20">
            <p className="text-blue-300 font-medium mb-4">
              Ready to build the next generation of crypto infrastructure?
            </p>
            <p className="text-blue-200/80">
              Our blockchain specialists are standing by to help you navigate the opportunities and challenges of the digital asset economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}