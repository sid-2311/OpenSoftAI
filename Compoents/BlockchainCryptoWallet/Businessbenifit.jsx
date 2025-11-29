"use client";

import {
  ShieldCheck,
  Scale,
  Users,
  DollarSign,
  Zap,
  TrendingUp,
} from "lucide-react";

export default function BusinessBenefits() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Build Unshakeable User Trust",
      description:
        "Security breaches destroy crypto platforms overnight. Our security-first approach ensures your users' assets are protected by military-grade encryption and industry-leading security protocols, building the trust that drives long-term success.",
    },
    {
      icon: Scale,
      title: "Achieve Regulatory Compliance Globally",
      description:
        "Navigate complex regulatory landscapes with confidence. Our compliance-ready platforms meet international KYC/AML standards, enabling you to operate legally in multiple jurisdictions while avoiding costly regulatory issues.",
    },
    {
      icon: Users,
      title: "Scale to Millions of Users Seamlessly",
      description:
        "Start small and grow big without rebuilding. Our scalable architecture handles growth from hundreds to millions of users while maintaining fast performance and low latency that users expect from professional trading platforms.",
    },
    {
      icon: DollarSign,
      title: "Generate Multiple Revenue Streams",
      description:
        "Our platforms support diverse monetization strategies including trading fees, staking rewards, lending interest, premium features, and API access, creating multiple revenue streams for sustainable growth.",
    },
    {
      icon: Zap,
      title: "Launch Faster with Proven Technology",
      description:
        "Don't reinvent the wheel. Our pre-built, battle-tested components and frameworks accelerate development timelines, allowing you to launch your platform months faster than building from scratch.",
    },
    {
      icon: TrendingUp,
      title: "Maintain Competitive Advantage",
      description:
        "Stay ahead with cutting-edge features and continuous innovation. Our platforms are designed for easy upgrades and feature additions, ensuring you can adapt quickly to market changes and user demands.",
    },
  ];

  return (
    <section
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="business-benefits-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="business-benefits-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            The Business Benefits That Drive Success
          </h2>
          <p className="max-w-4xl mx-auto text-md text-gray-600 mb-6">
            Our crypto platform solutions are built to deliver unmatched
            security, scalability, compliance, and growth potential — empowering
            you to build trust, expand globally, and stay ahead of the
            competition.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
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

                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
