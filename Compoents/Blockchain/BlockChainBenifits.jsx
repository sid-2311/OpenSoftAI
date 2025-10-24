"use client";

import { Shield, DollarSign, Globe, Users, Zap, FileCheck } from "lucide-react";

export default function BlockchainBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Unmatched Security and Transparency",
      description:
        "Blockchain technology provides cryptographic security and immutable transaction records that traditional systems simply cannot match. Your users can trust that their assets and data are protected by mathematics, not just promises.",
    },
    {
      icon: DollarSign,
      title: "Reduced Operational Costs Through Decentralization",
      description:
        "By eliminating intermediaries and automating processes through smart contracts, blockchain solutions can dramatically reduce transaction costs and operational overhead while increasing efficiency.",
    },
    {
      icon: Globe,
      title: "Global Accessibility and 24/7 Operation",
      description:
        "Blockchain platforms operate globally without downtime, enabling your business to serve customers around the world at any time without the limitations of traditional banking hours or geographic restrictions.",
    },
    {
      icon: Users,
      title: "Enhanced User Ownership and Control",
      description:
        "Blockchain gives users true ownership of their digital assets and data, creating stronger user engagement and loyalty while opening new revenue models through tokenization and decentralized governance.",
    },
    {
      icon: Zap,
      title: "Future-Proof Technology Foundation",
      description:
        "By building on blockchain technology, you're positioning your business at the forefront of the digital transformation that's reshaping entire industries from finance to gaming to supply chain management.",
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance and Audit Trail",
      description:
        "Our blockchain solutions include built-in compliance features and immutable audit trails that make regulatory reporting easier and more reliable while reducing compliance costs.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="blockchain-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="blockchain-benefits-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            The Business Benefits That Drive Real Value
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </header>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <article
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-blue-100 hover:border-blue-300"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
