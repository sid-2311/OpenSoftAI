"use client";

import React, { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function AICopilotIntroSection({ data }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  /* ================= CMS DATA ================= */
  /* ================= CMS DATA ================= */
  const section = data?.intro || {};
  const heading = section.heading || {};
  const story = section.story || {};
  const description = section.description?.text || "";
  const benefitsData = section.benefits || [];
  const featuresData = section.features || [];
  const cta = section.cta || {};

  if (!heading.main) return null;

  /* ================= UI ================= */
  return (
    <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {heading.main}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {heading.highlight}
              </span>
            </h2>

            {/* Story */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 shadow-lg">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                <DynamicIcon name={story.icon || "Zap"} className="w-6 h-6" />
              </div>
              <div className="ml-6">
                <p className="text-gray-700 mb-3">{story.text}</p>
                <p className="text-sm text-gray-600 italic">{story.subtext}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefitsData.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100"
                >
                  <div className="text-blue-600">
                    <DynamicIcon name={b.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700 font-medium">{b.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={cta.href || "/contact-us"}
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
            >
              <DynamicIcon name={cta.icon || "Bot"} className="w-5 h-5" />
              {cta.text || "Get Your AI Copilot"}
            </Link>
          </div>

          {/* RIGHT VISUAL */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="relative aspect-square rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-2xl">
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <DynamicIcon name={section.centerIcon || "Brain"} className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Floating Feature Cards */}
              {featuresData.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  className={`absolute ${i === 0
                    ? "top-8 left-8"
                    : i === 1
                      ? "bottom-12 right-8"
                      : "bottom-0 left-6"
                    } w-44 bg-white rounded-2xl p-4 shadow-lg border border-blue-100 animate-bounce`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      <DynamicIcon name={f.icon} className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-gray-900 text-sm">
                      {f.title}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{f.description}</p>
                </div>
              ))}
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {featuresData.map((f, i) => (
                <div
                  key={i}
                  onClick={() => setActiveFeature(i)}
                  className={`p-4 rounded-2xl border cursor-pointer transition ${activeFeature === i
                    ? "bg-blue-600 text-white"
                    : "bg-white border-blue-100"
                    }`}
                >
                  <div className="mb-2">
                    <DynamicIcon name={f.icon} className={`w-6 h-6 ${activeFeature === i ? "text-white" : "text-blue-600"}`} />
                  </div>
                  <h4 className="text-xs font-bold">{f.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
