"use client";
import { useState } from "react";
import {
  Workflow,
  Star,
  Contact,
  Mail,
  Bell,
  BarChart3,
  Smartphone,
  Megaphone,
  LayoutDashboard,
  Link,
} from "lucide-react";

export default function CRMFeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Workflow,
      title: "Pipeline Management That Matches Your Sales Process",
      description:
        "Custom deal stages, automated workflows, and tracking that mirrors how your team actually sells.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: Star,
      title: "Lead Scoring & Qualification Systems",
      description:
        "Prioritize leads intelligently based on your specific criteria for qualified prospects.",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      icon: Contact,
      title: "Contact & Account Management",
      description:
        "Complete customer profiles with full interaction history, preferences, and relationship mapping.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Communication Hub Integration",
      description:
        "Email, phone, meeting, and social media interactions automatically logged and searchable in one place.",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      icon: Bell,
      title: "Task & Follow-Up Automation",
      description:
        "Never miss an opportunity — get automated reminders and scheduled follow-up sequences.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: BarChart3,
      title: "Sales Performance Analytics",
      description:
        "Track success, spot bottlenecks, and optimize your process with real-time, data-driven insights.",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      icon: Smartphone,
      title: "Mobile Access for Field Sales",
      description:
        "Full CRM functionality on smartphones and tablets — because sales happen everywhere.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: Megaphone,
      title: "Marketing Campaign Integration",
      description:
        "Connect marketing efforts with sales results, track ROI, and nurture leads through the funnel.",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
    {
      icon: LayoutDashboard,
      title: "Custom Reporting Dashboards",
      description:
        "Real-time visibility into key sales metrics, forecasting, and team performance for better decisions.",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
    },
    {
      icon: Link,
      title: "Third-Party Tool Integrations",
      description:
        "Seamless connectivity with email, marketing, accounting, and other tools your business uses daily.",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24 px-4 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Floating blur orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl font-bold mb-6 text-white">
            Features That Actually{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Help Close Deals
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Features grid */}
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

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-blue-900/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 transition-all duration-500 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2">
                  <div className="flex items-start gap-6 mb-4">
                    {/* Icon */}
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
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed pl-0">
                    {feature.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div
                      className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${feature.gradient} transform translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-20`}
                    ></div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
