"use client";
import { useState, useEffect } from "react";
import {
  UtensilsCrossed,
  MonitorCheck,
  Link2,
  Cloud,
  Settings2,
} from "lucide-react";

export default function WhyChooseOpenSoftRMS() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: UtensilsCrossed,
      title: "We Understand Restaurant Operations",
      description:
        "Our team includes professionals who've worked in restaurants and understand the fast-paced challenges of food service. We design systems that perform flawlessly during peak hours.",
    },
    {
      icon: MonitorCheck,
      title: "Kitchen-Tested User Interfaces",
      description:
        "Interfaces built for real restaurant conditions — large buttons, clear layouts, and intuitive flows that staff can use confidently even during the dinner rush.",
    },
    {
      icon: Link2,
      title: "Integration-First Architecture",
      description:
        "Our platform seamlessly connects POS, inventory, staff scheduling, and accounting — eliminating data duplication and ensuring accuracy across departments.",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "Whether you operate one outlet or a growing chain, our cloud-based RMS scales effortlessly — without costly hardware or complicated IT management.",
    },
    {
      icon: Settings2,
      title: "Industry-Specific Features",
      description:
        "From quick-service to fine dining, our customizable solutions address the distinct needs of every restaurant type with precision and flexibility.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-xl md:text-3xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              OpenSoft AI
            </span>{" "}
            for Restaurant Management Systems
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Built by restaurant professionals, engineered by experts — we create
            software that truly understands your business.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-blue-100 transform hover:scale-105 hover:shadow-xl transition-all duration-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "500+", label: "Restaurants Empowered" },
            { value: "99%", label: "Operational Uptime" },
            { value: "24/7", label: "Cloud Monitoring" },
            { value: "100%", label: "Customizable Solutions" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Explore Our RMS Solutions
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
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
    </section>
  );
}
