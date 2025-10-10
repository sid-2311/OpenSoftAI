"use client";

import { Quote, TrendingUp, Gamepad2, Package, Shield } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      icon: TrendingUp,
      quote:
        "OpenSoft AI didn't just build our DeFi platform – they architected an entire financial ecosystem. Their deep understanding of tokenomics and security helped us launch with confidence. We've processed over $50M in transactions with zero security incidents, and our total value locked has grown to $100M in just six months.",
      name: "David Chen",
      title: "Founder & CEO",
      company: "YieldMax Protocol",
      stats: ["$50M+ Transactions", "Zero Security Incidents", "$100M TVL"],
    },
    {
      icon: Gamepad2,
      quote:
        "The NFT marketplace OpenSoft AI developed for our gaming platform has been phenomenal. The custom features they built for gaming NFTs, including dynamic metadata and cross-game compatibility, have given us a significant competitive advantage. Our daily transaction volume has increased 300% since launch.",
      name: "Maria Rodriguez",
      title: "CTO",
      company: "MetaGaming Studios",
      stats: ["300% Volume Increase", "Custom NFT Features", "Cross-Game Compatible"],
    },
    {
      icon: Package,
      quote:
        "Working with OpenSoft AI on our enterprise blockchain solution was exceptional. They navigated complex regulatory requirements while building a system that streamlined our supply chain operations. We've reduced verification time by 80% and saved millions in operational costs.",
      name: "Robert Kim",
      title: "VP of Technology",
      company: "Global Supply Solutions",
      stats: ["80% Time Reduction", "Millions Saved", "Full Compliance"],
    },
    {
      icon: Shield,
      quote:
        "OpenSoft AI's smart contract development expertise saved our token launch. Their security audit caught critical vulnerabilities that could have cost us everything. The final contracts are bulletproof, and our token has maintained perfect security throughout multiple bull market cycles.",
      name: "Jennifer Walsh",
      title: "Co-founder",
      company: "InnovateToken",
      stats: ["Critical Issues Found", "Bulletproof Security", "Zero Exploits"],
    },
  ];

  return (
    <section
      id="testimonials"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how businesses worldwide are scaling with OpenSoft AI’s blockchain,
            DeFi, and enterprise solutions.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <article
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                <div className="absolute -top-4 -left-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                </div>

                <Quote
                  className="absolute top-6 right-6 w-12 h-12 text-blue-100"
                  aria-hidden="true"
                />

                <blockquote className="mt-6">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {testimonial.stats.map((stat, i) => (
                    <li
                      key={i}
                      className="px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium border border-blue-200"
                    >
                      {stat}
                    </li>
                  ))}
                </ul>

                <footer className="border-t-2 border-blue-100 pt-6">
                  <p className="text-gray-900 font-bold text-lg">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.title}</p>
                  <p className="text-gray-600 font-semibold mt-1">{testimonial.company}</p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
