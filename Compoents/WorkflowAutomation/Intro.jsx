"use client";

import React, { useState, useEffect } from "react";
import DynamicIcon from "@/Compoents/DynamicIcon";
import Link from "next/link";

export default function AIWorkflowAutomationSection({ data }) {
  const section = data?.intro || {};
  const story = section.story || {};

  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % (section.features?.length || 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [section.features?.length]);

  if (!section.titlePrefix) return null;

  return (
    <section className="relative bg-white overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              {section.titlePrefix}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
                {section.titleHighlight}
              </span>
            </h2>

            {/* Story Box */}
            <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-6 shadow-lg shadow-blue-500/10">
              <div className="absolute -top-3 -left-3 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                <DynamicIcon name={story.icon || "Cpu"} className="w-6 h-6" />
              </div>

              <div className="ml-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {story.text}
                </p>
                <p className="text-sm text-gray-600 italic">
                  {story.subtext}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-md md:text-lg text-gray-600 leading-relaxed">
              {section.description}
            </p>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              {section.benefits?.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white rounded-xl p-4 border border-blue-100"
                >
                  <DynamicIcon name="CheckCircle" className="w-5 h-5 text-blue-600 mt-1" />
                  <span className="text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={section.ctaLink || "/contact-us"}
              className="group inline-flex items-center gap-3 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              <DynamicIcon name={section.ctaIcon || "Target"} className="w-5 h-5" />
              <span>{section.ctaText}</span>
            </Link>
          </div>

          {/* RIGHT SIDE – Features from CMS */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
          >
            <div className="grid grid-cols-1 gap-6">
              {section.features?.map((feature, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`p-6 rounded-2xl border cursor-pointer transition ${activeFeature === index
                      ? "bg-blue-600 text-white"
                      : "bg-white border-blue-100"
                      }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <DynamicIcon name={feature.icon || "Workflow"} className="w-6 h-6" />
                      <h4 className="font-bold">{feature.title}</h4>
                    </div>
                    <p className="text-sm opacity-90">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
