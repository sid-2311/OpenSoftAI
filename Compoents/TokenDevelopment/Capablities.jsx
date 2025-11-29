"use client";
import { useState } from 'react';
import { Coins, Trophy, Shield, TrendingUp, LineChart, Code, ChevronRight, Sparkles } from 'lucide-react';

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      icon: Coins,
      title: 'ERC-20, BEP-20, and TRC-20 Token Development',
      description: 'We build standard-compliant tokens that work seamlessly across the Ethereum ecosystem, Binance Smart Chain, and TRON network. Each token is optimized for gas efficiency and security, with thorough testing before deployment.',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Trophy,
      title: 'Utility Token Creation',
      description: 'Perfect for loyalty programs, in-app currencies, and gamification systems. We help you design tokens that actually drive user engagement and create value within your ecosystem – not just because blockchain is trendy, but because it genuinely improves your user experience.',
      gradient: 'from-blue-600 to-indigo-600',
      bgGradient: 'from-blue-100 to-indigo-50'
    },
    {
      icon: Shield,
      title: 'Security Token Development',
      description: 'When you\'re dealing with tokenized assets or investment products, compliance isn\'t optional. We develop security tokens that meet regulatory standards while maintaining the flexibility you need for your specific use case. We work closely with legal teams to ensure everything is buttoned up correctly.',
      gradient: 'from-indigo-600 to-purple-600',
      bgGradient: 'from-indigo-50 to-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Stablecoin Development',
      description: 'Whether you need a fiat-backed stablecoin for payments or an algorithmic stablecoin for your DeFi protocol, we build stable value tokens with robust peg mechanisms and transparent reserve management.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: LineChart,
      title: 'Tokenomics Design & Strategy',
      description: 'This is where a lot of projects make or break. We work with you to design token distribution models, staking mechanisms, governance structures, and incentive programs that actually make sense for your business model. No cookie-cutter solutions – just strategic thinking applied to your specific situation.',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-50 to-blue-100'
    },
    {
      icon: Code,
      title: 'Smart Contract Integration',
      description: 'Every token needs secure, auditable smart contracts. We build contracts that are not just functional but optimized for security and gas efficiency. Plus, we prepare everything for third-party audits because transparency matters in this space.',
      gradient: 'from-blue-600 to-blue-700',
      bgGradient: 'from-blue-100 to-blue-50'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
        
          
          <h2 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-6">
            Core Token Development {" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              Capabilities
            </span>
          </h2>
          
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From standard tokens to complex tokenomics, we deliver solutions that drive real value for your business
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, idx) => {
            const IconComponent = capability.icon;
            const isHovered = hoveredCard === idx;
            
            return (
              <div
                key={idx}
                className="group relative"
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${capability.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}></div>
                
                {/* Card */}
                <div className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${
                  isHovered 
                    ? 'border-blue-400 shadow-2xl -translate-y-2' 
                    : 'border-blue-100 shadow-lg'
                }`}>
                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${capability.bgGradient} flex items-center justify-center mb-6 transition-transform duration-500 ${
                    isHovered ? 'scale-110 rotate-3' : 'scale-100'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <IconComponent className={`w-8 h-8 text-blue-600 relative z-10 transition-transform duration-500 ${
                      isHovered ? 'scale-110' : 'scale-100'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div className={`flex items-center text-blue-600 font-semibold transition-all duration-300 ${
                    isHovered ? 'translate-x-2' : 'translate-x-0'
                  }`}>
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        
        {/* Trust Indicators */}
       <div className="mt-16 rounded-xl bg-blue-600 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
  {[
    { label: 'Security Audits', value: '100%' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Successful Deployments', value: '50+' },
    { label: 'Blockchain Networks', value: '10+' }
  ].map((stat, idx) => (
    <div key={idx} className="text-center">
      <div className="text-4xl font-extrabold text-white mb-2">
        {stat.value}
      </div>
      <div className="text-base text-blue-100 font-medium tracking-wide">
        {stat.label}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}