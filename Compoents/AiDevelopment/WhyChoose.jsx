"use client";

import React from "react";
import { TrendingUp, Eye, Rocket, Lightbulb } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: "We Deliver Results You Can Measure",
      description:
        "We don't do AI for AI's sake. Every system we build has to prove its worth in numbers that matter to your business. Our clients see 3x faster time-to-market, 50% improvements in customer lifetime value, and 40% cost reductions while maintaining or improving service quality.",
      highlight:
        "95% of our clients keep working with us year after year. That doesn't happen unless the AI keeps delivering value.",
    },
    {
      icon: Eye,
      title: "Complete Transparency, No Surprises",
      description:
        "You always know where your project stands. We provide regular updates, clear timelines, and honest assessments of what's working and what needs adjustment. Our technical team is accessible, our documentation is comprehensive, and our communication is designed for business people, not just engineers.",
      highlight:
        "No black boxes. No technical mysticism. Just clear explanations of what we're building and why.",
    },
    {
      icon: Rocket,
      title: "Built for Tomorrow, Working Today",
      description:
        "Every AI system we create is designed to grow with your business. Modular architecture means you can add new capabilities without starting over. Cloud-native infrastructure scales automatically as your needs grow. Security-first design protects your data with enterprise-grade protocols.",
      highlight:
        "We provide ongoing optimization to keep your systems current with the latest capabilities.",
    },
    {
      icon: Lightbulb,
      title: "Innovation That Makes Business Sense",
      description:
        "We stay current with emerging AI technologies, but we're not interested in being bleeding-edge just for the sake of it. Every new capability has to pass a simple test: does this solve a real business problem better than what came before?",
      highlight:
        "That's how we balance cutting-edge capabilities with practical implementation that actually works in the real world.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 px-4 bg-white"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-16">
          <h2
            id="why-choose-us-heading"
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4"
          >
            Why Our Clients Choose Us
          </h2>
          <p className="text-xl text-blue-600">(And Keep Choosing Us)</p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {feature.description}
                </p>

                <div className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded-r">
                  <p className="text-blue-900 font-medium italic">
                    {feature.highlight}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
