"use client";

import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function BuildCopilotSection({ data }) {
  if (!data) return null;

  const heading = data?.heading;
  const description = data?.description;
  const steps = data?.items || [];
  const cta = data?.cta || {};

  return (
    <section
      id="build-copilot"
      className="bg-gradient-to-b from-white to-blue-50 py-24 px-6 text-slate-800"
    >
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
          {heading}
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          {description}
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {steps.map((item, index) => {
          return (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-10 border border-blue-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute top-6 right-6 text-blue-100 text-6xl font-bold opacity-20 select-none">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <DynamicIcon name={item.icon} className="w-8 h-8" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-semibold mb-3 text-blue-700">
                {item.step}: {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-20">
        <Link
          href={cta.href || "/contact-us"}
          className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {cta.text || "Explore Our Process"}
        </Link>
      </div>
    </section>
  );
}
