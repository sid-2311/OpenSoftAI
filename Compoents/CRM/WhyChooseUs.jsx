"use client";
import { useState, useEffect } from "react";
import {
  Workflow,
  Users,
  Plug,
  BarChart3,
  TrendingUp,
  RefreshCw,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Workflow,
      title: "We Build Around Your Sales Process",
      description:
        "Instead of forcing you to adapt to generic workflows, we design CRM systems that enhance and streamline your existing sales processes while eliminating inefficiencies.",
    },
    {
      icon: Users,
      title: "User Adoption Is Our Priority",
      description:
        "The best CRM features are worthless if your team won’t use them. We create interfaces and workflows that feel intuitive to your sales team and make their jobs easier.",
    },
    {
      icon: Plug,
      title: "Integration-First Architecture",
      description:
        "We connect your CRM seamlessly with the tools your team already uses — including email, calendars, marketing platforms, accounting systems, and industry-specific software.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth Support",
      description:
        "Whether you're a startup with one salesperson or a growing company with distributed sales teams, our CRM systems scale effortlessly with your business — no costly rebuilds required.",
    },
    {
      icon: BarChart3,
      title: "Sales Performance Focus",
      description:
        "Every feature we design helps your team sell more effectively — not just organize data. We measure our success by your revenue growth, not just system metrics.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Optimization",
      description:
        "Customer relationships and sales processes evolve. We provide continuous support and optimization to ensure your CRM keeps aligning with your business goals.",
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
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              OpenSoft AI
            </span>{" "}
            for Custom CRM Development
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            Our approach goes beyond CRM software — we build intelligent systems
            that empower your sales process, improve user adoption, and scale
            with your growth.
          </p>
        </div>

        {/* Feature Cards */}
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
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
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

        {/* Bottom Stats Section */}
        <div
          className={`grid md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "100+", label: "Custom CRMs Delivered" },
            { value: "95%", label: "Adoption Rate" },
            { value: "24/7", label: "Client Support" },
            { value: "100%", label: "Integration Ready" },
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
          <Link href="/contact-us" className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-10 py-5 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Start Your CRM Project
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
          </Link>
        </div>
      </div>
    </section>
  );
}
