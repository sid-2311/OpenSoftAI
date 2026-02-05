"use client";

import React, { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function GenerativeAISection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const section = data?.intro || {};

  const features = section.features || [];
  const benefits = section.benefits || [];

  useEffect(() => {
    setIsVisible(true);
    if (features.length > 0) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [features.length]);

  if (!section.title) return null;

  return (
    <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              {section.title}
            </h2>

            {/* Story */}
            <div className="relative bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="ml-2">
                <h4 className="font-bold mb-2">{section.storyTitle}</h4>
                <p className="mb-3">{section.storyDescription}</p>
                <p className="text-sm italic text-gray-600">
                  {section.storySubtext}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600">
              {section.description}
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-3 border p-4 rounded-xl">
                  <DynamicIcon name="CheckCircle" className="w-5 h-5 text-blue-600" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={section.ctaLink || "/contact-us"}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl"
            >
              <DynamicIcon name={section.ctaIcon || "Target"} className="w-5 h-5" />
              {section.ctaText}
            </Link>
          </div>

          {/* RIGHT – Features */}
          <div>
            <div className="grid grid-cols-3 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`p-4 rounded-xl border cursor-pointer ${activeFeature === i ? "bg-blue-600 text-white" : "bg-white"
                    }`}
                >
                  <div className="mb-2">
                    <DynamicIcon name={f.icon || "Sparkles"} className={`w-6 h-6 ${activeFeature === i ? "text-white" : "text-blue-600"}`} />
                  </div>
                  <h4 className="font-bold text-sm mb-1">{f.title}</h4>
                  <p className="text-xs">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
