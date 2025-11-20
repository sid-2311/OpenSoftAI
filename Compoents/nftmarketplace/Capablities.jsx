"use client";
import { useState } from "react";
import {
  Layers,
  Sparkles,
  ShoppingBag,
  Hammer,
  Network,
  Coins,
  Wallet,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      icon: ShoppingBag,
      title: "Custom NFT Marketplace Development",
      description:
        "Every NFT community has its own culture, needs, and business model, so cookie-cutter marketplace solutions rarely work for serious projects. We build custom NFT marketplaces that reflect your brand, serve your specific use case, and provide the unique features your community actually wants. Our process starts with understanding your creators, collectors, and business vision — whether for art, gaming, or enterprise tokenization.",
      gradient: "from-blue-500 to-indigo-500",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: Sparkles,
      title: "NFT Minting Solutions for Everyone",
      description:
        "Minting should be simple for creators and cost-effective for your platform. We build minting solutions that handle everything from single-edition artworks to massive generative collections, including batch minting, lazy minting for gas efficiency, and customizable metadata management. We handle the complex parts like gas optimization and metadata storage while providing creators intuitive tools they’ll love to use.",
      gradient: "from-indigo-500 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: Hammer,
      title: "Advanced Trading & Auction Features",
      description:
        "Secondary market activity is where NFT marketplaces really come alive. We build trading systems that support fixed-price listings, timed auctions, reserve pricing, bundle sales, and dynamic offer management. Features like automatic bidding extensions, reserve price reveals, and integrated social engagement tools help drive excitement and liquidity across your platform.",
      gradient: "from-purple-600 to-blue-500",
      bgGradient: "from-purple-50 to-blue-50",
    },
    {
      icon: Network,
      title: "Multi-Chain & Cross-Chain Support",
      description:
        "The NFT ecosystem is multi-chain by default, and your marketplace should be too. We build platforms supporting Ethereum, Polygon, BNB Chain, Solana, and more — with seamless cross-chain bridging capabilities. Users can mint on low-fee networks and trade on high-liquidity chains, all through one unified experience that abstracts the complexity of blockchain diversity.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Coins,
      title: "Automated Royalty Management",
      description:
        "Creator royalties are fundamental to sustainable NFT ecosystems. We build royalty systems that handle complex creator splits, enforce royalties across secondary sales, and align with major marketplace standards. Transparent tracking, automated payouts, and flexible rule configurations ensure your creators get paid fairly, every time.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-100",
    },
    {
      icon: Wallet,
      title: "Seamless Wallet & Payment Integration",
      description:
        "User onboarding can make or break adoption. We integrate all major wallets — MetaMask, WalletConnect, Coinbase Wallet — and support credit card payments and fiat on-ramps. Our systems handle both crypto-native and new users with multi-currency support, auto conversions, and clear fee transparency for frictionless NFT purchases.",
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Security & Scalability",
      description:
        "NFT marketplaces handle valuable digital assets and require top-tier security. We implement comprehensive safeguards — audited smart contracts, secure key management, DDoS protection, and redundant backups. Combined with scalable cloud infrastructure, database optimization, and caching strategies, our marketplaces stay fast and secure even during viral NFT drops.",
      gradient: "from-blue-700 to-indigo-700",
      bgGradient: "from-blue-100 to-indigo-50",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 mb-6">
            Core NFT Marketplace Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              Capabilities
            </span>{" "}
            that OpenSoftAI Offer
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From minting to multi-chain integration, OpenSoftAI builds custom
            NFT marketplaces that empower creators, engage collectors, and scale
            securely across ecosystems.
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
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${capability.gradient} rounded-3xl blur opacity-0 group-hover:opacity-20 transition duration-500`}
                ></div>

                {/* Card */}
                <div
                  className={`relative h-full bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${
                    isHovered
                      ? "border-blue-400 shadow-2xl -translate-y-2"
                      : "border-blue-100 shadow-lg"
                  }`}
                >
                  {/* Icon Container */}
                  <div
                    className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${capability.bgGradient} flex items-center justify-center mb-6 transition-transform duration-500 ${
                      isHovered ? "scale-110 rotate-3" : "scale-100"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${capability.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    ></div>
                    <IconComponent
                      className={`w-8 h-8 text-blue-600 relative z-10 transition-transform duration-500 ${
                        isHovered ? "scale-110" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {capability.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {capability.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div
                    className={`flex items-center text-blue-600 font-semibold transition-all duration-300 ${
                      isHovered ? "translate-x-2" : "translate-x-0"
                    }`}
                  >
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  {/* Corner Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 rounded-xl bg-blue-600 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Security Audits", value: "100%" },
            { label: "Client Satisfaction", value: "98%" },
            { label: "Successful Marketplaces", value: "40+" },
            { label: "Supported Blockchains", value: "10+" },
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
