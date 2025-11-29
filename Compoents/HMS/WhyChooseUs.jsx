"use client";
import { useState, useEffect } from "react";
import {
  HeartPulse,
  ShieldCheck,
  Network,
  Cloud,
  LifeBuoy,
} from "lucide-react";
import Link from "next/link";

export default function WhyChooseOpenSoftAI() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: HeartPulse,
      title: "Healthcare Industry Expertise",
      description:
        "Our development team understands healthcare workflows, regulatory requirements, and the unique challenges facing healthcare organizations today.",
    },
    {
      icon: ShieldCheck,
      title: "HIPAA-Compliant Security Architecture",
      description:
        "We build healthcare systems with security and privacy at the foundation, ensuring patient data protection and regulatory compliance from day one.",
    },
    {
      icon: Network,
      title: "Interoperability Focus",
      description:
        "Our hospital management systems integrate with existing healthcare technologies, lab equipment, and third-party systems to create seamless workflows.",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "Modern cloud architecture supports everything from small clinics to large hospital networks, with the flexibility to add locations and services as you grow.",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support & Maintenance",
      description:
        "Healthcare systems require continuous updates and support. We provide dedicated healthcare technology support to ensure system reliability and performance.",
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              OpenSoftAI
            </span>{" "}
            for Hospital Management Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Building secure, scalable, and integrated healthcare solutions that
            empower hospitals to deliver better patient outcomes.
          </p>
        </div>

        {/* Cards Grid */}
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "10+", label: "Years in Healthcare IT" },
            { value: "99.9%", label: "System Uptime" },
            { value: "24/7", label: "Dedicated Support" },
            { value: "100%", label: "HIPAA Compliance" },
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
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/contact-us" className="group bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Get Your HMS Consultation
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
