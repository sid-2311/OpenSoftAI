"use client";
import Head from 'next/head';
import { useState } from 'react';
import { 
  Wallet, Lock, Shield, Smartphone, Database, HardDrive, Key, 
  TrendingUp, BarChart3, Repeat, Coins, Scale, FileCheck, 
  Users, Globe, Award, Zap, Layers, Server, ChevronDown, ChevronUp 
} from 'lucide-react';

export default function CryptoCapabilitiesSection() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const capabilities = [
    {
      id: 'wallets',
      icon: Wallet,
      title: 'Secure Crypto Wallet Development',
      subtitle: 'Multi-currency wallets with fortress-level security',
      gradient: 'from-blue-500 to-cyan-500',
      sections: [
        {
          title: 'Wallet Types & Features',
          icon: Key,
          items: [
            { label: 'Hot Wallets', desc: 'Web and mobile applications with instant access' },
            { label: 'Cold Storage Solutions', desc: 'Hardware-integrated cold storage for maximum security' },
            { label: 'Multi-Signature Wallets', desc: 'Enhanced security through distributed key management' },
            { label: 'HD Wallets', desc: 'Advanced key derivation and backup systems' },
            { label: 'Multi-Currency Support', desc: 'Bitcoin, Ethereum, and hundreds of altcoins' }
          ]
        },
        {
          title: 'Advanced Security Features',
          icon: Shield,
          items: [
            { label: 'Encryption', desc: 'Industry-standard encryption and secure key storage' },
            { label: 'Biometric Auth', desc: 'Biometric authentication and HSM integration' },
            { label: 'Transaction Signing', desc: 'Secure transaction signing and verification protocols' },
            { label: 'Backup & Recovery', desc: 'Secure backup and recovery mechanisms' },
            { label: 'Fraud Detection', desc: 'Real-time fraud detection and prevention systems' }
          ]
        }
      ]
    },
    {
      id: 'exchanges',
      icon: TrendingUp,
      title: 'Centralized & Decentralized Exchanges',
      subtitle: 'High-volume trading with institutional-grade performance',
      gradient: 'from-indigo-500 to-blue-600',
      sections: [
        {
          title: 'Centralized Exchange Features',
          icon: BarChart3,
          items: [
            { label: 'Matching Engine', desc: 'Process thousands of orders per second with microsecond latency' },
            { label: 'Advanced Order Types', desc: 'Market, limit, stop-loss, take-profit, and algorithmic trading' },
            { label: 'Liquidity Management', desc: 'Deep order books and market maker integration' },
            { label: 'Trading Interface', desc: 'Advanced charting and technical analysis tools' },
            { label: 'Mobile Trading', desc: 'Full-featured apps for iOS and Android' }
          ]
        },
        {
          title: 'Decentralized Exchange (DEX)',
          icon: Repeat,
          items: [
            { label: 'AMM Protocols', desc: 'Liquidity pools and algorithmic pricing' },
            { label: 'Order Book DEX', desc: 'Traditional matching on-chain or layer-2 solutions' },
            { label: 'Cross-Chain Trading', desc: 'Bridge multiple blockchains for seamless exchange' },
            { label: 'Yield Farming', desc: 'Liquidity mining and staking rewards' },
            { label: 'Governance Tokens', desc: 'Decentralized platform governance and fee sharing' }
          ]
        }
      ]
    },
    {
      id: 'compliance',
      icon: Scale,
      title: 'KYC/AML & Compliance Integration',
      subtitle: 'Comprehensive compliance systems meeting international standards',
      gradient: 'from-blue-600 to-indigo-600',
      sections: [
        {
          title: 'Compliance Features',
          icon: FileCheck,
          items: [
            { label: 'Identity Verification', desc: 'Multi-tier KYC with document and biometric verification' },
            { label: 'AML Monitoring', desc: 'Real-time transaction monitoring and activity reporting' },
            { label: 'Sanctions Screening', desc: 'Automated screening against global sanctions lists' },
            { label: 'Regulatory Reporting', desc: 'Automated compliance reporting for multiple jurisdictions' },
            { label: 'Risk Assessment', desc: 'Dynamic risk scoring and enhanced due diligence' }
          ]
        },
        {
          title: 'Supported Standards',
          icon: Award,
          items: [
            { label: 'FATF', desc: 'Financial Action Task Force recommendations' },
            { label: '5AMLD', desc: 'EU 5th Anti-Money Laundering Directive' },
            { label: 'BSA/FinCEN', desc: 'US Bank Secrecy Act and FinCEN requirements' },
            { label: 'FCA', desc: 'Financial Conduct Authority regulations' },
            { label: 'Custom Frameworks', desc: 'Tailored compliance for specific jurisdictions' }
          ]
        }
      ]
    },
    {
      id: 'assets',
      icon: Coins,
      title: 'Multi-Asset Support & Token Management',
      subtitle: 'Full spectrum of digital assets with unified experience',
      gradient: 'from-cyan-500 to-blue-500',
      sections: [
        {
          title: 'Supported Asset Types',
          icon: Database,
          items: [
            { label: 'Cryptocurrencies', desc: 'Bitcoin, Ethereum, and 500+ altcoins' },
            { label: 'Token Standards', desc: 'ERC-20, BEP-20 with automatic detection' },
            { label: 'Stablecoins', desc: 'USDT, USDC, DAI, and other stable assets' },
            { label: 'NFTs', desc: 'Non-fungible token trading and collection management' },
            { label: 'Synthetic Assets', desc: 'Tokenized stocks, commodities, and derivatives' }
          ]
        },
        {
          title: 'Advanced Asset Features',
          icon: Zap,
          items: [
            { label: 'Real-time Feeds', desc: 'Real-time price feeds and market data integration' },
            { label: 'Auto Updates', desc: 'Automatic token balance updates and history' },
            { label: 'Cross-Chain', desc: 'Cross-chain asset bridging and swapping' },
            { label: 'Staking', desc: 'Staking and yield generation for supported assets' },
            { label: 'Analytics', desc: 'Portfolio analytics and performance tracking' }
          ]
        }
      ]
    },
    {
      id: 'trading',
      icon: Users,
      title: 'Custom Trading Features & Integrations',
      subtitle: 'Advanced features that set your platform apart',
      gradient: 'from-blue-500 to-indigo-500',
      sections: [
        {
          title: 'Advanced Trading Features',
          icon: TrendingUp,
          items: [
            { label: 'P2P Trading', desc: 'Direct user-to-user trading with escrow services' },
            { label: 'Margin Trading', desc: 'Leveraged trading with risk management controls' },
            { label: 'Futures & Options', desc: 'Derivative trading with settlement mechanisms' },
            { label: 'Copy Trading', desc: 'Social trading features and strategy sharing' },
            { label: 'API Integration', desc: 'REST and WebSocket APIs for algorithmic trading' }
          ]
        },
        {
          title: 'Financial Services',
          icon: Globe,
          items: [
            { label: 'Staking Services', desc: 'PoS validation and reward distribution' },
            { label: 'Lending & Borrowing', desc: 'Crypto-backed loans and interest earning' },
            { label: 'Payment Gateway', desc: 'Crypto payment processing for merchants' },
            { label: 'Fiat On/Off Ramps', desc: 'Bank transfer and card payment integration' },
            { label: 'Tax Reporting', desc: 'Automated capital gains calculation and reporting' }
          ]
        }
      ]
    },
    {
      id: 'architecture',
      icon: Server,
      title: 'Scalable & Secure Architecture',
      subtitle: 'Enterprise-grade infrastructure built for massive scale',
      gradient: 'from-indigo-600 to-blue-600',
      sections: [
        {
          title: 'Performance & Scalability',
          icon: Layers,
          items: [
            { label: 'Cloud-Native', desc: 'Auto-scaling infrastructure that handles traffic spikes' },
            { label: 'Database Optimization', desc: 'High-performance databases with real-time replication' },
            { label: 'Caching Strategies', desc: 'Redis and CDN integration for fast response times' },
            { label: 'Load Balancing', desc: 'Distributed system architecture for maximum uptime' },
            { label: 'Microservices', desc: 'Modular architecture for easy maintenance and upgrades' }
          ]
        },
        {
          title: 'Security Infrastructure',
          icon: Lock,
          items: [
            { label: 'Multi-Layer Security', desc: 'Network, application, and database security protocols' },
            { label: 'Penetration Testing', desc: 'Regular security audits and vulnerability assessments' },
            { label: 'DDoS Protection', desc: 'Advanced threat detection and mitigation systems' },
            { label: 'Secure Development', desc: 'Security-first coding practices and code review' },
            { label: 'Incident Response', desc: '24/7 monitoring and rapid response protocols' }
          ]
        }
      ]
    }
  ];

  return (
    <>
      
      <section className="relative py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            
            
            <h2 className="text-3xl md:text-4xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
              Core Crypto Development
             {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">
                Capabilities
              </span>
            </h2>
            
            <p className="text-md text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions covering every aspect of crypto platform development
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-6">
            {capabilities.map((capability) => {
              const Icon = capability.icon;
              const isExpanded = expandedCards[capability.id];
              
              return (
                <div 
                  key={capability.id}
                  className="group"
                >
                  {/* Card Header */}
                  <div 
                    onClick={() => toggleCard(capability.id)}
                    className="cursor-pointer"
                  >
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}></div>
                      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all border-2 border-blue-100 hover:border-blue-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-6">
                            <div className={`w-16 h-16 bg-gradient-to-br ${capability.gradient} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl md:text-lg font-bold text-gray-900 mb-2">
                                {capability.title}
                              </h3>
                              <p className="text-gray-600">{capability.subtitle}</p>
                            </div>
                          </div>
                          <div className={`w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-6 h-6 text-blue-600" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  {isExpanded && (
                    <div className="mt-4 animate-fadeIn">
                      <div className="grid md:grid-cols-2 gap-6">
                        {capability.sections.map((section, sectionIndex) => {
                          const SectionIcon = section.icon;
                          return (
                            <div 
                              key={sectionIndex}
                              className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
                            >
                              <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                  <SectionIcon className="w-5 h-5 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{section.title}</h4>
                              </div>
                              
                              <div className="space-y-4">
                                {section.items.map((item, itemIndex) => (
                                  <div 
                                    key={itemIndex}
                                    className="flex gap-3 group/item"
                                  >
                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                                    <div>
                                      <div className="font-semibold text-gray-900">{item.label}</div>
                                      <div className="text-sm text-gray-600">{item.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(20px, -30px) scale(1.05);
            }
            66% {
              transform: translate(-15px, 15px) scale(0.95);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-float {
            animation: float 15s ease-in-out infinite;
          }
          
          .animate-float-delayed {
            animation: float 15s ease-in-out infinite;
            animation-delay: -7.5s;
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </section>
    </>
  );
}