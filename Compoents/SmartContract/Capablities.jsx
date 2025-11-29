"use client";
import { useState } from "react";
import {
  Code2,
  Coins,
  Shield,
  Layers,
  Zap,
  Cpu,
  LineChart,
  ChevronRight,
} from "lucide-react";

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      icon: Code2,
      title: "Custom Smart Contract Development",
      description:
        "Every project has unique requirements, and cookie-cutter smart contracts rarely cut it for serious applications. We build custom smart contracts tailored to your specific business logic, whether you're creating something entirely new or improving existing patterns with better security and efficiency. Our process begins with deep business understanding, leading to secure, gas-optimized, and modular contract architectures designed for scalability and future upgrades.",
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
    },
    {
      icon: LineChart,
      title: "DeFi Smart Contracts",
      description:
        "DeFi is where security matters most. We've built lending protocols, yield farming systems, liquidity pools, and staking mechanisms that safely manage real user funds. Our DeFi contracts include robust access controls, emergency pause mechanisms, and secure oracle integrations. We design systems resilient to both technical exploits and economic attacks, with safeguards against oracle failures and extreme market conditions.",
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-100",
    },
    {
      icon: Layers,
      title: "NFT Smart Contracts",
      description:
        "NFTs are more than collectibles. We create smart contracts for dynamic NFTs, gaming assets, and marketplaces with advanced functionality — including minting, trading, royalties, and metadata evolution. Our contracts are built for gas efficiency and compatibility with major NFT platforms, ensuring seamless integration and control over your ecosystem, from ERC-721 to ERC-1155 implementations.",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-100",
    },
    {
      icon: Coins,
      title: "Token Smart Contracts",
      description:
        "Token contracts might seem simple — but the details define success. We develop ERC-20, BEP-20, and TRC-20 contracts with advanced features like vesting, reflection rewards, anti-whale mechanisms, and governance modules. Each contract is gas-optimized and thoroughly tested for compatibility with wallets, exchanges, and DeFi protocols. We also assist with complex tokenomics to ensure long-term project sustainability.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      icon: Shield,
      title: "Smart Contract Auditing & Security Testing",
      description:
        "Security isn’t an afterthought — it’s the foundation. Our internal audit process includes static analysis, manual code review, automated testing, and formal verification. We also simulate economic scenarios to uncover vulnerabilities. OpenSoftAI prepares comprehensive audit documentation to streamline external audits, saving time and cost while improving overall code quality.",
      gradient: "from-indigo-600 to-blue-700",
      bgGradient: "from-indigo-50 to-blue-100",
    },
    {
      icon: Cpu,
      title: "Business Process Automation",
      description:
        "Smart contracts excel at automating complex business processes — from escrow and supply chain management to insurance claims and logistics. We build automation systems that integrate with real-world data through reliable oracles, featuring error handling and dispute resolution. OpenSoftAI helps you identify which parts of your operations can benefit most from blockchain-powered transparency and automation.",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-100",
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Core Smart Contract Development{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 mt-2">
              Capabilities
            </span>
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto leading-relaxed">
            OpenSoftAI delivers secure, scalable, and audit-ready smart
            contract solutions across DeFi, NFTs, and enterprise blockchain
            automation — built for the next generation of decentralized
            innovation.
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
                  {/* Icon */}
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

                  {/* Arrow */}
                  <div
                    className={`flex items-center text-blue-600 font-semibold transition-all duration-300 ${
                      isHovered ? "translate-x-2" : "translate-x-0"
                    }`}
                  >
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>

                  {/* Accent */}
                  <div
                    className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 rounded-xl bg-blue-600 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Smart Contracts Deployed", value: "120+" },
            { label: "Security Audit Pass Rate", value: "100%" },
            { label: "Enterprise Integrations", value: "40+" },
            { label: "Supported Chains", value: "10+" },
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
