"use client";

import { Award, TrendingUp, Shield, Code, Users, Layers, CheckCircle, Sparkles } from "lucide-react";

export default function BlockchainExpertise() {
  const technologies = [
    { name: "Ethereum", color: "from-blue-400 to-blue-600" },
    { name: "Binance Smart Chain", color: "from-yellow-400 to-yellow-600" },
    { name: "Polygon", color: "from-purple-400 to-purple-600" },
    { name: "Solana", color: "from-green-400 to-green-600" }
  ];

  const expertise = [
    { icon: Code, title: "Certified Developers", desc: "Expert blockchain developers with proven certifications" },
    { icon: Shield, title: "Smart Contract Auditors", desc: "Security-first approach to contract development" },
    { icon: TrendingUp, title: "DeFi Specialists", desc: "Deep experience in decentralized finance protocols" },
    { icon: Layers, title: "Multi-Chain Solutions", desc: "Cross-chain expertise across major networks" }
  ];

  const approach = [
    "Tokenomics Design",
    "User Experience",
    "Security Architecture",
    "Regulatory Compliance",
    "Long-term Scalability"
  ];

  const stats = [
    { value: "Billions", label: "TVL in DeFi Platforms" },
    { value: "Thousands", label: "NFT Transactions" },
    { value: "Multiple", label: "Market Cycles" }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-24 overflow-hidden" aria-labelledby="blockchain-expertise-heading">
      
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-700"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 id="blockchain-expertise-heading" className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-white">Our Deep Blockchain Expertise</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Across Technologies and Industries
            </span>
          </h2>
          <p className="text-lg text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We've been in the blockchain space long enough to see multiple bull and bear cycles, regulatory changes, and technological evolution. This experience has taught us that successful blockchain projects require more than just technical skills.
          </p>
        </header>

        {/* Main content card */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10 mb-12 shadow-2xl">
          <p className="text-blue-50 text-lg leading-relaxed mb-8">
            Our team includes <span className="text-blue-400 font-semibold">certified blockchain developers, smart contract auditors, and decentralized finance specialists</span> who have built solutions on multiple blockchain networks. We've developed everything from simple token contracts to complex multi-chain DeFi protocols that handle millions in transaction volume.
          </p>

          {/* Technology badges */}
          <div className="flex flex-wrap gap-3 mb-12">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-full border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300 text-sm font-medium text-blue-200`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          {/* Expertise grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={index}
                  className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>

        {/* Holistic approach */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <article className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Holistic Approach</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              We don't just write code – we architect entire ecosystems. Our comprehensive approach considers every aspect from day one:
            </p>
            <ul className="space-y-3">
              {approach.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-blue-200">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Proven Track Record</h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              We've worked with everyone from crypto startups raising their first funding round to established enterprises exploring blockchain integration.
            </p>
            <p className="text-blue-100 leading-relaxed">
              This comprehensive approach has helped our clients launch successful projects that not only function flawlessly but also achieve <span className="text-blue-400 font-semibold">product-market fit and sustainable growth</span>.
            </p>
          </article>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Our Impact</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-100 mt-8 text-sm">
            DeFi platforms • NFT marketplaces • Enterprise blockchain solutions
          </p>
        </div>
      </div>
    </section>
  );
}
