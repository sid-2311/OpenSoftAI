"use client";

import { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function GenerativeAIExpertiseSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);

  const section = data?.expertise || {};

  useEffect(() => setIsVisible(true), []);

  if (!section.title) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
            {section.title}
          </h2>

          <p className="text-lg md:text-xl text-slate-700 max-w-4xl">
            {section.description}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
              <DynamicIcon name={section.handsOnIcon || "Brain"} className="w-5 h-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">
                {section.handsOnTitle}
              </span>
            </div>

            <p className="text-slate-600">
              {section.handsOnDescription}
            </p>

            <p className="text-slate-600">
              {section.tailoredDescription}
            </p>

            <div>
              <h3 className="text-sm uppercase font-bold mb-4 text-slate-500">
                {section.industriesTitle}
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.industries?.map((ind, i) => (
                  <div
                    key={i}
                    className="px-5 py-3 bg-slate-50 border border-blue-200 rounded-xl"
                  >
                    {ind.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="bg-blue-700 p-10 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-6">
              {section.uniqueTitle}
            </h3>

            <div className="space-y-5">
              {section.highlights?.map((h, i) => (
                <div key={i} className="flex gap-4">
                  <DynamicIcon name="CheckCircle" className="w-6 h-6" />
                  <p>{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-slate-50 p-12 rounded-3xl text-center">
          <DynamicIcon name={section.ctaIcon || "Sparkles"} className="w-12 h-12 text-blue-700 mx-auto mb-6" />

          <h3 className="text-3xl font-bold mb-6">
            {section.ctaTitle}
          </h3>

          <p className="mb-4">{section.ctaDescription}</p>
          <p className="mb-8 font-semibold text-blue-700">
            {section.ctaSubtext}
          </p>

          <Link
            href={section.ctaLink}
            className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold"
          >
            {section.ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
