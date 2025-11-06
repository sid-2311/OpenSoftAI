"use client";
import { useState, useEffect } from "react";
import {
  DollarSign,
  Eye,
  Globe2,
  Users,
  Settings,
  CheckCircle2,
} from "lucide-react";

export default function BusinessBenefitsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const benefits = [
    {
      icon: DollarSign,
      title: "Empower Creators with Direct Monetization",
      description:
        "Give creators the tools they need to build sustainable businesses around their digital work. From initial sales to ongoing royalties, well-designed NFT marketplaces provide revenue streams that traditional platforms can't match. This creator empowerment becomes your competitive advantage.",
      metrics: ["Primary & Secondary Sales", "Royalty Automation", "Creator Economy Growth"],
    },
    {
      icon: Eye,
      title: "Build Trust Through Transparency",
      description:
        "Blockchain-based marketplaces provide transparency that builds confidence with both creators and collectors. Every transaction, ownership change, and royalty payment is recorded on-chain, creating trust that's impossible to fake or manipulate.",
      metrics: ["On-Chain Ownership", "Transparent Royalties", "Immutable History"],
    },
    {
      icon: Globe2,
      title: "Scale Globally Without Geographic Restrictions",
      description:
        "NFT marketplaces operate 24/7 across all time zones without the regulatory complexity of traditional art markets. Multi-chain support expands your potential user base while reducing transaction costs and improving overall user experience.",
      metrics: ["24/7 Global Access", "Multi-Chain Support", "Frictionless Transactions"],
    },
    {
      icon: Users,
      title: "Create Sustainable Community Ecosystems",
      description:
        "Successful NFT marketplaces become communities where creators, collectors, and fans interact regularly. Features like social profiles, creator spotlights, and community governance tools help build the engagement that drives long-term platform value.",
      metrics: ["Community Governance", "Social Engagement", "Creator-Fan Interaction"],
    },
    {
      icon: Settings,
      title: "Reduce Operational Overhead",
      description:
        "Smart contract-based marketplaces automate much of the manual work involved in traditional art and collectibles markets. Automated royalty distribution, transparent transaction history, and programmable marketplace rules reduce operational costs while improving user experience.",
      metrics: ["Automation Efficiency", "Lower Admin Costs", "Transparent Operations"],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveTab((current) => (current + 1) % benefits.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [benefits.length]);

  const ActiveIcon = benefits[activeTab].icon;

  return (
    <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59,130,246) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
            Business Benefits That Drive{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 mt-2">
              Real Results
            </span>
          </h2>
        </div>

        {/* Main Interactive Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Tabs */}
          <div className="space-y-4">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              const isActive = activeTab === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveTab(idx);
                    setProgress(0);
                  }}
                  className={`relative cursor-pointer transition-all duration-500 ${
                    isActive ? "scale-105" : "scale-100 hover:scale-102"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-100 rounded-r-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 to-blue-600 transition-all duration-100 ease-linear"
                        style={{ height: `${progress}%` }}
                      ></div>
                    </div>
                  )}

                  <div
                    className={`pl-6 pr-6 py-6 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-blue-500 bg-gradient-to-r from-blue-50 to-white shadow-xl"
                        : "border-blue-100 bg-white hover:border-blue-300 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-br from-blue-500 to-blue-600"
                            : "bg-blue-100"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-300 ${
                            isActive ? "text-white" : "text-blue-600"
                          }`}
                        />
                      </div>
                      <div className="ml-4 flex-1">
                        <h3
                          className={`text-lg font-bold mb-1 transition-colors duration-300 ${
                            isActive ? "text-blue-600" : "text-gray-900"
                          }`}
                        >
                          {benefit.title}
                        </h3>
                        <p
                          className={`text-sm transition-colors duration-300 ${
                            isActive ? "text-gray-700" : "text-gray-600"
                          }`}
                        >
                          {isActive
                            ? benefit.description
                            : benefit.description.substring(0, 80) + "..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Active Content */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-50 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl p-10 border-2 border-blue-200 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center transform rotate-3">
                  <ActiveIcon className="w-8 h-8 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {benefits[activeTab].title}
                  </h3>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {benefits[activeTab].description}
              </p>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">
                  Key Features
                </h4>
                {benefits[activeTab].metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="flex items-center transform transition-all duration-300 hover:translate-x-2"
                    style={{
                      animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="ml-3 text-gray-700 font-medium">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  Benefit {activeTab + 1} of {benefits.length}
                </span>
                <div className="flex gap-2">
                  {benefits.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === activeTab ? "bg-blue-500 w-8" : "bg-blue-200"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <div className="text-4xl font-bold text-white mb-1">99%</div>
              <div className="text-blue-100 text-sm font-medium">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1">
            Explore NFT Marketplace Solutions
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
