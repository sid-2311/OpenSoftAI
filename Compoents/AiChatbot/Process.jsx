"use client";

import React from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import DynamicIcon from "@/Compoents/DynamicIcon";

export default function ProcessSection({ data }) {
  const section = data?.process || {};
  const stepsData = section.steps || [];
  const cta = section.cta || {};

  const steps = stepsData.map((s, index) => ({
    number: String(index + 1).padStart(2, "0"),
    title: s.title,
    description: s.description,
    icon: s.icon,
    features: s.features || [],
  }));

  if (!section.heading) return null;

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {section.heading}
          </h2>
          <p className="text-md md:text-lg text-gray-600 max-w-3xl mx-auto">
            {section.description}
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <article key={index} className="group relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-32 w-0.5 h-16 bg-gradient-to-b from-blue-400 to-blue-200" />
                )}

                <div className={`flex flex-col md:flex-row gap-8 items-start ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Icon */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-start">
                    <div className="relative">
                      <div className="w-40 h-40 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                        <DynamicIcon name={step.icon} className="w-20 h-20 text-white" />
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-blue-100">
                        <span className="text-xl font-bold text-blue-600">{step.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-2/3">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-md md:text-lg">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {index < steps.length - 1 && (
                        <div className="mt-6 flex items-center gap-2 text-blue-600 font-semibold">
                          <span className="text-sm">Next Step</span>
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              {cta.title}
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              {cta.description}
            </p>

            <Link
              href={cta.href || "/contact-us"}
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow-lg inline-block"
            >
              {cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
