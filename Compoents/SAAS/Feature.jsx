"use client";
import { useState } from "react";
import {
  Layers,
  CreditCard,
  Cloud,
  Handshake,
  BarChart3,
  Code2,
  Shield,
  Database,
  MessageCircle,
  LineChart,
} from "lucide-react";

export default function SaaSFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Layers,
      title: "Multi-Tenant Architecture",
      description:
        "One codebase serving thousands of customers securely, with data isolation and flexible customization.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: CreditCard,
      title: "Subscription Management System",
      description:
        "Automated billing, plan upgrades, usage tracking, and reliable revenue recognition — built to scale.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "Auto-scaling architecture that handles traffic spikes without breaking the bank or the user experience.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: Handshake,
      title: "Customer Onboarding Flows",
      description:
        "Guided setup processes that get users to their 'aha moment' quickly, improving activation and retention.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: BarChart3,
      title: "Usage Analytics & Monitoring",
      description:
        "Real-time insights into how customers use your software — and where they might be struggling.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: Code2,
      title: "API-First Development",
      description:
        "Built for integrations from the start — because SaaS customers expect your app to connect seamlessly.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: Shield,
      title: "Role-Based Access Controls",
      description:
        "Sophisticated permission systems that scale from solo users to enterprise-level security policies.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "Data Migration Tools",
      description:
        "Smoothly move customers from their old systems without losing data or productivity.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
    {
      icon: MessageCircle,
      title: "Customer Success Features",
      description:
        "In-app messaging, help documentation, and ticketing systems that reduce churn and boost satisfaction.",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
    },
    {
      icon: LineChart,
      title: "Revenue Analytics Dashboard",
      description:
        "Track MRR, churn rates, lifetime value, and the metrics that matter most for SaaS growth.",
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating gradient blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            What Makes{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
              SaaS Development
            </span>{" "}
            Different
          </h2>
        
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Feature Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-indigo-900/50 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/20 transition-all duration-500 hover:border-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/20 transform hover:-translate-y-2">
                  {/* Icon and Title */}
                  <div className="flex items-start gap-6 mb-4">
                    <div
                      className={`relative flex-shrink-0 w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center transform transition-transform duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed pl-0">
                    {feature.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20`}
                    ></div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
