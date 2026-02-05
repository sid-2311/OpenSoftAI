"use client";

import React, { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function AIConsultingSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  // ✅ CMS section
  const section = data?.intro || {};

  // ✅ Correct CMS mappings
  const headingText = section.heading;
  const highlightText = section.subHeading;

  const storyText = section.story?.text1;
  const storyHighlight = section.story?.text2;

  const featuresData = section.features || [];
  const benefitsData = section.benefits || [];
  const cta = section.cta || {};

  const benefits = benefitsData.map((b) => ({
    text: b.text,
    icon: b.icon,
  }));

  useEffect(() => {
    setIsVisible(true);
    if (featuresData.length > 0) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % featuresData.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [featuresData.length]);

  if (!section.heading) return null;

  return (
    <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* ✅ Correct Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              {headingText}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                {highlightText}
              </span>
            </h2>

            {/* ✅ Story */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <DynamicIcon name={section.story?.icon || "LineChart"} className="w-6 h-6" />
              </div>

              <div className="ml-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {storyText}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {storyHighlight}
                </p>
              </div>
            </div>

            {/* ✅ Description */}
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              {section.description}
            </p>

            {/* ✅ Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100"
                >
                  <div className="text-blue-600 mt-0.5 flex-shrink-0">
                    <DynamicIcon name={benefit.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* ✅ CTA */}
            <Link
              href={cta.href}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all"
            >
              <DynamicIcon name={cta.icon || "Target"} className="w-5 h-5" />
              <span>{cta.text}</span>
            </Link>
          </div>

          {/* RIGHT (unchanged visuals) */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {featuresData.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`p-4 rounded-2xl border cursor-pointer ${activeFeature === index
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-white border-blue-100"
                    }`}
                >
                  <div className="w-10 h-10 mb-3">
                    <DynamicIcon name={feature.icon} className={`w-6 h-6 ${activeFeature === index ? "text-white" : "text-blue-600"}`} />
                  </div>
                  <h4 className="text-xs font-bold mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
