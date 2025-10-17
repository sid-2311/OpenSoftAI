"use client";

import { useState, useEffect } from "react";
import {
  Shield,
  DollarSign,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function BusinessBenefitsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const benefits = [
    {
      icon: Shield,
      title: "Dramatically Reduce AI Adoption Risk",
      description:
        "Instead of learning expensive lessons through trial and error, you'll benefit from our experience helping dozens of companies successfully adopt AI. We help you avoid common pitfalls and make informed decisions from day one.",
    },
    {
      icon: DollarSign,
      title: "Maximize Return on AI Investments",
      description:
        "Our strategic approach ensures every AI dollar you spend delivers measurable value. We help you prioritize high-impact initiatives and avoid investing in AI solutions that won't move the needle for your business.",
    },
    {
      icon: Zap,
      title: "Accelerate Your AI Timeline",
      description:
        "With expert guidance, you can move from AI strategy to implementation much faster than going it alone. We help you skip the learning curve and get to results quickly.",
    },
    {
      icon: Users,
      title: "Build Sustainable AI Capabilities",
      description:
        "We don't just implement AI solutions – we help you build internal capabilities so your team can manage, optimize, and expand your AI initiatives over time.",
    },
    {
      icon: CheckCircle,
      title: "Ensure Responsible AI Practices",
      description:
        "Our ethical AI framework helps you build systems that are fair, transparent, and compliant, protecting your reputation and building customer trust.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The Business Benefits{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              You Can Expect
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mx-auto mt-8"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className={`group relative rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Decorative Glow */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_70%)]"></div>

                <div className="relative z-10">
                  <div className="inline-flex p-4 rounded-2xl bg-transparent bg-opacity-20 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100 text-lg leading-relaxed mb-6">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 font-semibold text-blue-100 group-hover:gap-4 transition-all duration-300">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
