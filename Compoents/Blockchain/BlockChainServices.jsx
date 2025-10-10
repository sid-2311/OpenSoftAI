"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wallet,
  Coins,
  TrendingUp,
  FileCode,
  Image,
  ChevronDown,
  Shield,
} from "lucide-react";

export default function BlockchainServices() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Wallet,
      title: "Crypto Wallet & Exchange Platform Development",
      description:
        "We build secure, user-friendly wallet solutions and exchange platforms that handle digital assets with bank-grade security.",
      color: "from-blue-500 to-blue-600",
      categories: [
        {
          title: "Wallet Solutions",
          items: [
            "Multi-currency hot and cold wallet systems",
            "Hardware wallet integration and security protocols",
            "Cross-chain asset management and swapping",
            "Staking and yield farming integration",
            "Advanced security features including multi-signature support",
          ],
        },
        {
          title: "Exchange Platforms",
          items: [
            "Centralized exchange development with advanced trading features",
            "Decentralized exchange (DEX) protocols and interfaces",
            "Automated market maker (AMM) implementations",
            "Order book and liquidity management systems",
            "KYC/AML integration and regulatory compliance tools",
          ],
        },
      ],
    },
    {
      id: 2,
      icon: Coins,
      title: "Token Development & Tokenomics Design",
      description:
        "Creating tokens is more than just deploying a smart contract – it's about designing economic systems that incentivize the right behaviors and create sustainable value.",
      color: "from-indigo-500 to-indigo-600",
      categories: [
        {
          title: "Token Types",
          items: [
            "ERC-20 and BEP-20 standard tokens",
            "Utility tokens for platform ecosystems",
            "Governance tokens for decentralized organizations",
            "Security tokens with compliance frameworks",
            "Custom token standards for specific use cases",
          ],
        },
        {
          title: "Tokenomics & Strategy",
          items: [
            "Token distribution and vesting schedules",
            "Inflation and deflation mechanisms",
            "Staking and reward systems",
            "Governance and voting mechanisms",
            "Economic modeling and sustainability analysis",
          ],
        },
      ],
    },
    {
      id: 3,
      icon: TrendingUp,
      title: "DeFi & DEX Development",
      description:
        "Decentralized Finance is revolutionizing how we think about money, lending, and financial services. We build DeFi protocols that are secure, efficient, and user-friendly.",
      color: "from-blue-600 to-blue-700",
      categories: [
        {
          title: "DeFi Solutions",
          items: [
            "Automated market makers (AMMs) and liquidity pools",
            "Lending and borrowing protocols",
            "Yield farming and liquidity mining platforms",
            "Synthetic assets and derivatives protocols",
            "Cross-chain bridges and interoperability solutions",
          ],
        },
        {
          title: "Advanced Features",
          items: [
            "Flash loan implementations",
            "Governance and DAO frameworks",
            "Risk management and liquidation mechanisms",
            "Oracle integration for price feeds",
            "Gas optimization and Layer 2 solutions",
          ],
        },
      ],
    },
    {
      id: 4,
      icon: FileCode,
      title: "Smart Contract Development & Auditing",
      description:
        "Smart contracts are the backbone of all blockchain applications, and they must be perfect. A single bug can lead to catastrophic losses.",
      color: "from-purple-500 to-purple-600",
      categories: [
        {
          title: "Development Expertise",
          items: [
            "Custom smart contract architecture and design",
            "Gas-optimized contract implementations",
            "Upgradeable contract patterns and proxy systems",
            "Multi-signature and timelock mechanisms",
            "Cross-chain communication protocols",
          ],
        },
        {
          title: "Security & Auditing",
          items: [
            "Comprehensive security audits and penetration testing",
            "Formal verification and mathematical proofs",
            "Bug bounty program design and management",
            "Continuous monitoring and incident response",
            "Documentation and best practices implementation",
          ],
        },
      ],
    },
    {
      id: 5,
      icon: Image,
      title: "NFT Marketplace Development",
      description:
        "The NFT space has evolved far beyond simple profile pictures. We build sophisticated NFT ecosystems that support complex use cases from gaming to real-world asset tokenization.",
      color: "from-pink-500 to-pink-600",
      categories: [
        {
          title: "Marketplace Features",
          items: [
            "Custom NFT minting and metadata management",
            "Advanced auction and bidding mechanisms",
            "Royalty distribution and creator economics",
            "Cross-chain NFT compatibility",
            "Integration with major NFT standards",
          ],
        },
        {
          title: "Advanced Capabilities",
          items: [
            "Fractionalized NFT ownership",
            "NFT-based access control and membership",
            "Dynamic NFTs with evolving metadata",
            "NFT lending and collateralization",
            "Integration with gaming and metaverse platforms",
          ],
        },
      ],
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 overflow-hidden" aria-labelledby="blockchain-services-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-16">
          <h2 id="blockchain-services-heading" className="text-4xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Core Blockchain Development
            </span>
            <br />
            <span className="text-gray-900">Offerings</span>
          </h2>
        </header>

        {/* Services accordion */}
        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedService === service.id;

            return (
              <article
                key={service.id}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Service header */}
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full p-8 flex items-start gap-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  aria-expanded={isExpanded}
                  aria-controls={`service-${service.id}-content`}
                >
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>

                  <ChevronDown
                    className={`flex-shrink-0 w-6 h-6 text-gray-400 transition-transform duration-300 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expandable content */}
                <div
                  id={`service-${service.id}-content`}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      {service.categories.map((category, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100"
                        >
                          <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            {category.title}
                          </h4>
                          <ul className="space-y-3">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-3 text-gray-700">
                                <Shield className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                                <span className="text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Blockchain Solution?
          </h3>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how our blockchain expertise can transform your business
          </p>
          <Link
            href="/contact-us"
            className="group px-8 py-4 bg-white text-blue-700 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Schedule a Consultation
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
