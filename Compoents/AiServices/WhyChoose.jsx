"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import DynamicIcon from "@/Compoents/DynamicIcon";

// Dynamic data from API - use data prop to access section data

export default function WhyChooseSection({ data }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Extract section data
  const section = data?.whyChoose || {};
  const heading = section.heading || {};
  const reasonsData = section.reasons || [];
  const trustSignalsData = section.trustSignals || {};
  const signals = trustSignalsData.signals || [];

  const reasons = reasonsData.map(reason => ({
    icon: reason.icon,
    title: reason.title,
    description: reason.description,
    gradient: reason.gradient || "from-blue-400 to-blue-500",
  }));

  const trustSignals = signals.map(signal => ({
    icon: signal.icon,
    title: signal.title,
    subtitle: signal.subtitle,
  }));

  if (!section.heading) return null;

  return (
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
            {heading.main}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
              {heading.highlight}
            </span>{" "}
            {heading.suffix}
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
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30 transition-all duration-500 ${hoveredIndex === index
                    ? "scale-110 rotate-6"
                    : "scale-100 rotate-0"
                    }`}
                  aria-hidden="true"
                >
                  <DynamicIcon name={reason.icon} className="w-7 h-7" />
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
                  className={`h-1 rounded-full bg-gradient-to-r ${reason.gradient} mt-6 transition-all duration-500 ${hoveredIndex === index
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
                {trustSignalsData.heading || "Trust Signals"}
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
                    <DynamicIcon name={signal.icon} className="w-6 h-6" />
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
  );
}
