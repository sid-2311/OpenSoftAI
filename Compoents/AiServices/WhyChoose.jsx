"use client";

import { useState } from "react";
import Head from "next/head";
import {
  Eye,
  Shield,
  Lightbulb,
  Users,
  CheckCircle,
  Award,
  Star,
  FileCheck,
} from "lucide-react";

export default function WhyChooseSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const reasons = [
    {
      icon: <Eye className="w-7 h-7" />,
      title: "Transparency First",
      description:
        "We believe in clear communication throughout the development process. You’ll understand exactly how your AI works, not just what it does.",
      gradient: "from-blue-400 to-blue-500",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Security by Design",
      description:
        "Your data security isn’t an afterthought—it’s built into every layer of our AI architecture. We follow enterprise-grade security protocols and compliance standards.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Proven Innovation",
      description:
        "We combine cutting-edge AI research with practical business implementation. Our team stays current with the latest AI breakthroughs while focusing on real-world impact.",
      gradient: "from-blue-600 to-blue-700",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "End-to-End Partnership",
      description:
        "From consultation to deployment and optimization, we’re your dedicated AI development partner. Our support doesn’t end when the code goes live.",
      gradient: "from-blue-500 to-blue-600",
    },
  ];

  const trustSignals = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "ISO 27001 Certified",
      subtitle: "Information Security Management",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Strategic Partnerships",
      subtitle: "Microsoft Azure AI, AWS, Google Cloud AI",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Partnership on AI",
      subtitle: "Industry Consortium Member",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Published Research",
      subtitle: "Peer-Reviewed AI Journals",
    },
  ];

  return (
    <>
      {/* ✅ SEO Meta Tags */}
      

      {/* ✅ Main Section */}
      <section
        className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        aria-labelledby="whychoose-heading"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-5" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <header className="text-center mb-16">
            <h2
              id="whychoose-heading"
              className="text-2xl lg:text-4xl font-bold text-gray-900 mb-6"
            >
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                OpenSoftAI
              </span>{" "}
              for Your AI Development Project
            </h2>
          </header>

          {/* Main Reasons */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {reasons.map((reason, index) => (
              <article
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-3xl p-8 border border-blue-100 hover:border-blue-300 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "scale-110 rotate-6"
                        : "scale-100 rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    {reason.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {reason.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-md md:text-lg">
                    {reason.description}
                  </p>

                  {/* Decorative Line */}
                  <div
                    className={`h-1 rounded-full bg-gradient-to-r ${reason.gradient} mt-6 transition-all duration-500 ${
                      hoveredIndex === index
                        ? "w-full opacity-100"
                        : "w-16 opacity-50"
                    }`}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* Trust Signals */}
          <section
            aria-labelledby="trustsignals-heading"
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl blur-xl opacity-10" />

            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-3xl p-12 shadow-xl">
              <header className="text-center mb-12">
                <h3
                  id="trustsignals-heading"
                  className="text-3xl font-bold text-gray-900"
                >
                  Trust Signals
                </h3>
              </header>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trustSignals.map((signal, index) => (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300"
                      aria-hidden="true"
                    >
                      {signal.icon}
                    </div>

                    {/* Text */}
                    <h4 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                      {signal.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {signal.subtitle}
                    </p>

                    {/* Hover Checkmark */}
                    <div className="absolute top-4 right-4 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom Decorative Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
        </div>
      </section>
    </>
  );
}
