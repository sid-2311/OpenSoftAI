"use client";

import { Shield, Zap, Lock, TrendingUp, Coins, Layers, AlertTriangle, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BlockchainSection() {
  const features = [
    { icon: Shield, text: "Secure Smart Contracts" },
    { icon: Coins, text: "DeFi Protocols" },
    { icon: Layers, text: "NFT Marketplaces" },
    { icon: Lock, text: "Crypto Wallets" }
  ];

  const challenges = [
    "One wrong move in smart contract development could cost millions",
    "Poorly designed exchange platforms could compromise user funds",
    "Rushed token launches could fail regulatory compliance"
  ];

  const solutions = [
    "Building decentralized solutions since the early days of Ethereum",
    "Deep understanding of both potential and pitfalls",
    "Secure, scalable, and built to last"
  ];

  return (
    <section className="relative bg-white py-24 overflow-hidden" aria-labelledby="blockchain-section-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(37 99 235) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main heading */}
        <h2 id="blockchain-section-heading" className="text-2xl sm:text-4xl font-bold text-center mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Building the Decentralized Future,
          </span>
          <span className="text-gray-900"> One Block at a Time</span>
        </h2>

        {/* Introduction */}
       <p className="text-lg text-gray-600 text-justify max-w-4xl mx-auto mb-16 leading-relaxed">
  Blockchain isn't just a buzzword anymore – it's the foundation of a new digital economy.
  Whether you're a fintech startup looking to disrupt traditional banking, an enterprise wanting to tokenize assets,
  or a creative platform building the next generation of NFT marketplaces, blockchain technology offers
  unprecedented opportunities for innovation.
</p>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Challenge Card */}
          <article className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">The Challenge</h3>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Building robust, secure blockchain solutions requires deep technical expertise and a thorough understanding of decentralized systems.
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{challenge}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* Solution Card */}
          <article className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <span className="font-semibold text-blue-700">OpenSoft AI</span> isn't just another dev team – we've been in the blockchain space since Ethereum's early days.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team combines cutting-edge technical skills with real-world experience to deliver blockchain solutions that are innovative, secure, and scalable.
            </p>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{solution}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        {/* Features grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">What We Build</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-blue-200"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-base font-semibold text-gray-900">{feature.text}</h4>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl">
          <p className="text-xl text-white mb-8 font-medium">
            From crypto wallets and exchange platforms to DeFi protocols and NFT marketplaces,
            <br className="hidden sm:block" />
            we build blockchain solutions that power the next generation of digital businesses.
          </p>
          <Link
            href="/contact-us"
            className="group px-8 py-4 bg-white text-blue-700 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
          >
            Get Started Today
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
