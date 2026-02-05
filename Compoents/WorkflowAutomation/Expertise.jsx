"use client";

import { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function IntelligentAutomationExpertiseSection({ data }) {
  const section = data?.expertise || {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  if (!section.titlePrefix) return null;

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
            {section.titlePrefix}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent">
              {section.titleHighlight}
            </span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mb-10"></div>

          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl font-light">
            {section.description}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-lg">
              <DynamicIcon name={section.reimaginingIcon || "Settings"} className="w-5 h-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">
                {section.reimaginingTitle}
              </span>
            </div>

            {section.reimaginingText?.map((para, i) => (
              <p
                key={i}
                className="text-md md:text-lg text-slate-600 leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Industries */}
            <div className="pt-6">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 font-bold mb-4">
                {section.industriesTitle}
              </h3>
              <div className="flex flex-wrap gap-3">
                {section.industries?.map((industry, index) => {
                  return (
                    <div
                      key={index}
                      className="px-5 py-3 bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200 rounded-xl"
                    >
                      <div className="flex items-center gap-3">
                        <DynamicIcon name={industry.icon || "Building2"} className="w-5 h-5 text-blue-700" />
                        <span className="text-slate-800 font-semibold">
                          {industry.name}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right – Highlights */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-3xl shadow-2xl">
            <h3 className="text-xl md:text-3xl font-bold text-white mb-6">
              {section.uniqueTitle}
            </h3>

            <div className="space-y-5">
              {section.highlights?.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <DynamicIcon name="CheckCircle" className="w-6 h-6 text-blue-300 mt-1" />
                  <p className="text-blue-50 text-lg leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12 border-2 border-blue-100 text-center">
          <DynamicIcon name={section.ctaIcon || "Brain"} className="w-12 h-12 text-blue-700 mx-auto mb-6" />
          <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
            {section.ctaTitle}
          </h3>
          <p className="text-lg md:text-xl text-slate-700 mb-6">
            {section.ctaDescription}
          </p>
          <p className="text-xl md:text-2xl font-semibold text-blue-700 mb-10">
            {section.ctaSubtext}
          </p>

          <Link
            href={section.ctaLink || "/contact-us"}
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-2xl font-bold text-lg"
          >
            {section.ctaButtonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
