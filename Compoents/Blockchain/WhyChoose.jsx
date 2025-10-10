"use client";

import { TrendingUp, Layers, Lock, MessageSquare, Handshake } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Proven Track Record Across Market Cycles",
      description:
        "We've successfully delivered blockchain projects through multiple market cycles, regulatory changes, and technological shifts. This experience means we know how to build solutions that can weather uncertainty and adapt to changing conditions.",
      color: "blue",
    },
    {
      icon: Layers,
      title: "End-to-End Blockchain Expertise",
      description:
        "From initial tokenomics design to post-launch optimization, we handle every aspect of blockchain development. Our team includes specialists in smart contract development, DeFi protocols, security auditing, and user experience design.",
      color: "indigo",
    },
    {
      icon: Lock,
      title: "Security-First Development Philosophy",
      description:
        "Every line of code we write is scrutinized for security vulnerabilities. We follow industry best practices, conduct thorough audits, and implement multiple layers of security to protect user funds and data.",
      color: "blue",
    },
    {
      icon: MessageSquare,
      title: "Transparent and Collaborative Process",
      description:
        "Blockchain development requires trust and transparency. We maintain open communication throughout the development process, provide regular updates, and ensure you understand every aspect of your blockchain solution.",
      color: "indigo",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership Approach",
      description:
        "The blockchain space evolves rapidly, and we're committed to helping your project adapt and grow over time. We provide ongoing support, optimization, and feature development to ensure your blockchain solution remains competitive.",
      color: "blue",
    },
  ];

  return (
    <section
      className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="why-choose-us-heading"
            className="text-4xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Industry Leaders Choose{" "}
            <span className="text-blue-600">OpenSoft AI</span>
          </h2>
        </header>

        {/* Reasons List */}
        <div className="space-y-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isEven = index % 2 === 0;

            return (
              <article
                key={index}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center group`}
              >
                {/* Icon Block */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <div
                    className={`relative w-32 h-32 rounded-2xl bg-gradient-to-br ${
                      reason.color === "blue"
                        ? "from-blue-500 to-blue-600"
                        : "from-indigo-500 to-indigo-600"
                    } flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                    <div className="absolute -z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Description Block */}
                <div className="w-full md:w-2/3">
                  <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200 group-hover:border-blue-300 transition-all duration-300 group-hover:shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
