"use client";
import { useState } from "react";
import {
  Activity,
  Layers,
  Coins,
  LineChart,
  BarChart3,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      icon: Activity,
      title: "Decentralized Exchange (DEX) Development",
      description:
        "OpenSoftAI builds complete trading platforms that give users the speed and features they expect while maintaining true decentralization. Whether you need an AMM-based swap platform, a professional order book system, or a hybrid approach, we create DEX platforms optimized for your specific market and user base. Our DEX solutions include advanced features like limit orders, cross-chain compatibility, and integrated yield opportunities. We design experiences that feel familiar to users of centralized exchanges while delivering the transparency and security advantages of DeFi.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: Layers,
      title: "Liquidity Pool Creation & Management",
      description:
        "Liquidity is everything in DeFi, and we help you create sustainable liquidity solutions that attract and retain capital. We build customizable liquidity pools with fair reward distribution, impermanent loss mitigation strategies, and governance mechanisms that keep liquidity providers engaged long-term. OpenSoftAI’s approach goes beyond basic AMM pools – we design incentive structures that bootstrap liquidity efficiently and create sustainable tokenomics that benefit both traders and liquidity providers.",
      gradient: "from-blue-600 to-indigo-600",
      bgGradient: "from-blue-100 to-indigo-50",
    },
    {
      icon: Coins,
      title: "Yield Farming & Staking Platforms",
      description:
        "Users want their crypto to work for them, and we build yield platforms that deliver consistent, transparent returns without unnecessary smart contract risk. Our yield farming solutions include flexible reward distribution, compound strategies, and clear risk disclosure. We design staking mechanisms that support your protocol’s governance while providing attractive yields. Whether you need simple single-asset staking or complex multi-pool farming strategies, we create systems that are both user-friendly and economically sustainable.",
      gradient: "from-indigo-600 to-purple-600",
      bgGradient: "from-indigo-50 to-purple-50",
    },
    {
      icon: LineChart,
      title: "DeFi Lending & Borrowing Solutions",
      description:
        "OpenSoftAI builds peer-to-peer lending protocols that compete with traditional finance on accessibility and transparency while offering better rates for both lenders and borrowers. Our lending platforms include sophisticated risk assessment, automated liquidation mechanisms, and flexible collateral management. We support both overcollateralized and undercollateralized lending, with smart contract-based credit scoring and automated risk management. Each protocol is optimized to balance capital efficiency with robust security.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: BarChart3,
      title: "Custom DeFi Protocol Development",
      description:
        "Every DeFi innovation starts with someone asking, 'what if we could do this differently?' We collaborate with visionary teams building novel DeFi primitives — from new derivatives instruments and stablecoin mechanisms to entirely new financial architectures. OpenSoftAI specializes in transforming complex financial concepts into secure, auditable smart contracts through rigorous economic modeling, security analysis, and user testing, ensuring your innovative idea works in practice.",
      gradient: "from-cyan-500 to-blue-500",
      bgGradient: "from-cyan-50 to-blue-100",
    },
    {
      icon: ShieldCheck,
      title: "Smart Contract Security & Audit Preparation",
      description:
        "Security isn’t just about clean code — it’s about building systems that fail safely and transparently. We develop all smart contracts with security-first principles, comprehensive testing suites, and full documentation to make external audits smooth and effective. Every contract goes through internal security reviews, formal verification where applicable, and extensive testing on testnets before mainnet deployment. We also prepare detailed audit reports to streamline the audit process.",
      gradient: "from-blue-600 to-blue-700",
      bgGradient: "from-blue-100 to-blue-50",
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
            Core DeFi & DEX Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              Capabilities
            </span>
          </h2>

          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From decentralized trading to liquidity and lending, OpenSoftAI
            builds secure, high-performance DeFi systems that drive real value
            and sustainability across your ecosystem.
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
            { label: "Successful Deployments", value: "50+" },
            { label: "DeFi Protocols Delivered", value: "25+" },
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
